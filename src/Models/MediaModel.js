const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaSchema = new Schema({});

const MediaModel = mongoose.model("medias", MediaSchema);
module.exports = MediaModel;
