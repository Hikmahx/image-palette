const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  mimetype: String,
  size: Number,
  uploadDate: { type: Date, default: Date.now },
  // imageType: { type: String, enum: ["svg", "png", "jpeg", "jpg"] },
  bgColor: String
});

const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;