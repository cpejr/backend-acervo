import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import mongoose from "mongoose";

const create = validateRequest({
  body: z.object({
    name: z.string({ required_error: "O nome é obrigatório" }),
    email: z.string({ required_error: "O email é obrigatório" }),
    imageURL: z.string({ required_error: "A imagem é obrigatória" }),
    type: z.string({ required_error: "O tipo é obrigatório" }),
  }),
});
const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});
const update = validateRequest({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    imageURL: z.string().optional(),
    type: z.string().optional(),
  }),

  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});

export default {
  destroy,
  create,
  update,
};
