import { Request, Response } from "express";
import multer from 'multer';
import ImageModel from "../models/ImageModel";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + file.originalname); 
  }
});

const upload = multer({ storage: storage });

export const uploadImage = upload.single('image'); 

export const handleImageUpload = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { filename, originalname, mimetype, size } = req.file;
    const { imageType, color } = req.body;

    const newImage = new ImageModel({
      filename,
      originalName: originalname,
      mimetype,
      size,
      imageType,
      color
    });

    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image" });
  }
};
