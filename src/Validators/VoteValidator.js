import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const create = validateRequest({});
const destroy = validateRequest({});
const update = validateRequest({});
const read = validateRequest({});

module.exports = {
  destroy,
  create,
  update,
  read,
};
