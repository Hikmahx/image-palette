import { Request, Response } from 'express';
import fs from 'fs/promises';
import multer from 'multer';
import path from 'path';
import SVGModel from '../models/svgModel';
// import cheerio from 'cheerio'; 
const cheerio = require('cheerio');


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const originalnameWithoutExt = path.basename(file.originalname, path.extname(file.originalname));
    // const ext = path.extname(file.originalname);
    // const filename = `${Date.now()}${ext}`;
    const filename = `${originalnameWithoutExt}.svg`;
    callback(null, filename);
    console.log(file)
  },
});

// const upload = multer({ dest: 'uploads/' })
const upload = multer({ storage: storage });


// 'svg' is the name of the key
export const uploadSvg = upload.single('svg'); 

export const handleSvgUpload = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { originalname, path } = req.file;
    const content = await fs.readFile(path, 'utf-8');

    const existingSVG = await SVGModel.findOne({ name: originalname });
    if (existingSVG) {
      return res.status(400).json({ error: 'An svg with the same name already exists' });
    }

    const { colors } = req.body;

    if (!colors) {
      return res.status(400).json({ error: 'Please provide a color' });
    }

    const $ = cheerio.load(content, { xmlMode: true });

    // Find all elements with a fill attribute
    $('[fill]').each((index: number, element: any) => {
      // If the fill attribute is not 'none', update it with the provided color
      const fillValue = $(element).attr('fill');
      if (fillValue !== 'none') {
        $(element).attr('fill', colors);
      }
    });

    // Serialize the modified SVG content back to a string
    const modifiedSvgContent = $.html();

    const svg = new SVGModel({ name: originalname, content: modifiedSvgContent, colors });
    await svg.save();

    // Update the SVG file in the uploads folder
    // const filePath = path.join('uploads', `${svg.name}.svg`);
    // const filePath = path.resolve(__dirname, '..', 'uploads', `${svg.name}.svg`);
    const filePath = `uploads/${svg.name}`;

    await fs.writeFile(filePath, modifiedSvgContent);

    res.status(201).json({ message: 'SVG uploaded and colors set successfully', svg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getSvgColors = async (req: Request, res: Response) => {
  try {
    const svgId = req.params.id; // Get the SVG ID from the request parameters

    const svg = await SVGModel.findById(svgId);

    if (!svg) {
      return res.status(404).json({ error: 'SVG not found' });
    }

    const $ = cheerio.load(svg.content);

    // Create a Set to store unique fill values
    const fillValues = new Set();

    // Find all elements with a fill attribute
    $('[fill]').each((index: number, element: any) => {
      const fillValue = $(element).attr('fill');
      if (fillValue) {
        fillValues.add(fillValue);
      }
    });

    // Convert the Set to an array of colors
    const uniqueColors = Array.from(fillValues);

    res.status(200).json({ uniqueColors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const updateSvgColors = async (req: Request, res: Response) => {
  try {
    const svgId = req.params.id;
    const { colors } = req.body;

    const svg = await SVGModel.findById(svgId);

    if (!svg) {
      return res.status(404).json({ error: 'SVG not found' });
    }

    if (!colors || !Array.isArray(colors)) {
      return res.status(400).json({ error: 'Please provide a valid colors array' });
    }

    // Update the colors field in the SVG model
    svg.colors = colors;
    await svg.save();

    res.status(200).json({ message: 'SVG colors updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
