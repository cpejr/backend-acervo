import mongoose from "mongoose";

const CategoryPriceSchema = new mongoose.Schema(
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

CategoryPriceSchema.virtual("categoryPrice", {
  ref: "categoryPrice",
  localField: "_id",
  foreignField: "id_categoryPrice",
  options: { lean: true },
});

const CategoryModel = mongoose.model("categoryPrice", CategoryPriceSchema);
export default CategoryModel;
