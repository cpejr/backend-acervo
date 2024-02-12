const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VoteSchema = new Schema({});

const VoteModel = mongoose.model("votes", VoteSchema);
module.exports = VoteModel;
