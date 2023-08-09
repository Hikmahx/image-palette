import express from "express";
import { body } from "express-validator";
import { uploadImage, handleImageUpload } from "../controllers/imageController";

const router = express.Router();

router.post(
  "/upload-image",
  uploadImage,
  body("imageType", "Please provide a valid image type").isIn(['svg', 'png', 'jpeg', 'jpg']),
  body("imageType").custom((value, { req }) => {
    if (value === 'svg' && !req.body.color) {
      throw new Error("Color must be provided for SVG images");
    }
    return true;
  }),
  handleImageUpload
);
