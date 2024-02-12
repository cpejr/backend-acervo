const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({});

const EventModel = mongoose.model("events", EventSchema);
module.exports = EventModel;
