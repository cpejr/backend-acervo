import mongoose from "mongoose";

const CategoryTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

CategoryTypeSchema.virtual("categoryType", {
  ref: "categoryType",
  localField: "_id",
  foreignField: "id_categoryType",
  options: { lean: true },
});

const CategoryTypeModel = mongoose.model("categoryType", CategoryTypeSchema);
export default CategoryTypeModel;
