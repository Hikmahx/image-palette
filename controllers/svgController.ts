import { Request, Response } from 'express';
import fs from 'fs/promises';
import multer from 'multer';
import path from 'path';
import SVGModel from '../models/svgModel';


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

    const svg = new SVGModel({ name: originalname, content });
    await svg.save();

    res.status(201).json({ message: 'SVG uploaded successfully', svg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


