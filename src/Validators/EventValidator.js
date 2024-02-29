import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import mongoose from "mongoose";

const create = validateRequest({
  body: z.object({
    name: z
      .string({ required_error: "The name is required" })
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(60, { message: "Name cannot exceed 60 characters" }),

    eventUpload: z.string({ required_error: "Uploading an event is required" }),

    shortDescription: z
      .string({ required_error: "The short description is required" })
      .min(2, {
        message: "Short description must be at least 2 characters long",
      })
      .max(100, { message: "Short description cannot exceed 100 characters" }),

    longDescription: z
      .string({ required_error: "The description is required" })
      .min(20, {
        message: "Large description must be at least 20 characters long",
      })
      .max(750, { message: "Large description cannot exceed 750 characters" }),
  }),
});
const destroy = validateRequest({
  params: z.object({
    id: z.string().refine(mongoose.isValidObjectId, { message: "The ID is not valid" }),
  }),
});
const update = validateRequest({
  body: z.object({
    name: z.string(),

    eventUpload: z.string(),

    shortDescription: z.string(),

    longDescription: z.string(),
  }),
});
const read = validateRequest({
  body: z.object({}),
});

export default {
  destroy,
  create,
  update,
  read,
};
