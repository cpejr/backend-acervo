import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
