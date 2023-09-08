import express from "express";
import { body } from "express-validator";
import { uploadImage, handleImageUpload } from "../controllers/imageController";

const router = express.Router();

router.post(
  "/upload-image",
  uploadImage,
  handleImageUpload
);

module.exports = router;
