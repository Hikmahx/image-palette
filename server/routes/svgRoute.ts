import express from "express";
import { body } from "express-validator";
import {
  uploadSvg,
  handleSvgUpload,
  getSvgDetails,
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

router.get("/:id", getSvgDetails);

router.get("/svg-colors/:id", getSvgColor);

router.put("/svg-colors/:id", updateSvgColor);

module.exports = router;
