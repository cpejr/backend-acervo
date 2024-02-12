import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({});

const EventModel = mongoose.model("events", EventSchema);

export default EventModel;
