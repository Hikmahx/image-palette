import express from "express";
import { body } from "express-validator";
import {
  uploadSvg,
  handleSvgUpload,
  getSvgColor,
  updateSvgColor,
} from "../controllers/svgController";

const router = express.Router();

router.post(
  "/upload-svg",
  uploadSvg,
  body("name", "Please provide svg name"),
  handleSvgUpload
);

router.get("/svg-colors/:id", getSvgColor);
router.put(
  "/svg-colors/:id",
  updateSvgColor
);

module.exports = router;
