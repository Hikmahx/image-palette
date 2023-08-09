import express from "express";
import { body } from "express-validator";
import { uploadSvg, handleSvgUpload } from "../controllers/svgController";

const router = express.Router();

router.post(
  "/upload-svg",
  uploadSvg,
  body("name", "Please provide svg name"),
  handleSvgUpload
);

module.exports = router;