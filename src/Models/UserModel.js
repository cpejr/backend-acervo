import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: false,
    trim: true,
    select: false,
  },
  imageURL: {
    type: String,
    required: false,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  }

  next();
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
