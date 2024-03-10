const mongoose = require("mongoose");

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
    unique: true,
    trim: true,
  },
  longDescription: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  archive: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
});

const MemorialModel = mongoose.model("memorial", MemorialSchema);
export default MemorialModel;
