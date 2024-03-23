import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id_categoryType: [
    {
      type: Schema.Types.ObjectId,
      ref: "categoryType",
      required: true,
    },
  ],
  id_categoryPrice: [
    {
      type: Schema.Types.ObjectId,
      ref: "categoryPrice",
      required: true,
    },
  ],
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
  link: {
    type: String,
    required: true,
    trim: true,
  },
});

const EventModel = mongoose.model("events", EventSchema);

export default EventModel;
