const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

// CORS
app.use(cors());

// ROUTES
app.use("/api/images", require("./routes/imageRoute"));
app.use("/api/svgs", require("./routes/svgRoute"));

app.get("/", (req: any, res: any) => {
  // console.log("Hello world");
  return res.status(200).json({ message: "Image palette application" });
});

app.listen(PORT, () => console.log("This is listening on PORT: " + PORT));