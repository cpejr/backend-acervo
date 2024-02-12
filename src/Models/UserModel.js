const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
