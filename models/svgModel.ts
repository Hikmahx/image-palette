import mongoose, { Document, Schema } from 'mongoose';

const svgSchema = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  color: { type: String, required: true },
});

const SVGModel = mongoose.model('SVG', svgSchema);

export default SVGModel;