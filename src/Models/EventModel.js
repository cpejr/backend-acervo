import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  eventUpload: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  longDescription: {
    type: String,
    required: true,
    trim: true,
  },
});

const EventModel = mongoose.model("events", EventSchema);

export default EventModel;
