import express from "express";
import { body } from "express-validator";
import {
  uploadSvg,
  handleSvgUpload,
  getSvgColors,
  updateSvgColors,
} from "../controllers/svgController";

const router = express.Router();

router.post(
  "/upload-svg",
  uploadSvg,
  body("name", "Please provide svg name"),
  handleSvgUpload
);

router.get("/svg-colors/:id", getSvgColors);
router.put(
  "/update-svg-colors/:id",
  body("colors", "Please provide svg colors"),
  updateSvgColors
);

module.exports = router;
