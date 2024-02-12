import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MediaSchema = new Schema({});

const MediaModel = mongoose.model("medias", MediaSchema);

export default MediaModel;
