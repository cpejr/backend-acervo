import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MemorialSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  longDescription: {
    type: String,
    required: false,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  archive: {
    type: [String],
    required: false,
  },
  characteristics: {
    type: [String]
  },
  date: {
    type: Date, 
    default: Date.now,
    required: true, 
  },
});

const MemorialModel = mongoose.model("memorial", MemorialSchema);
export default MemorialModel;
