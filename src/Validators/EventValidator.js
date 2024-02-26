import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import mongoose from "mongoose";

const create = validateRequest({
  body: z.object({
    name: z.string({ required_error: "The name is required" }),

    eventUpload: z.string({ required_error: "Uploading an event is required" }),

    shortDescription: z.string({ required_error: "The short description is required" }),

    longDescription: z.string({ required_error: "The description is required" }),
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
