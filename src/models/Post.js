import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  date: {
    type: String,
    required: [true, "Please provide a date"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  media: {
    type: [String], // An array of URL strings (from Cloudinary)
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", PostSchema);