const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
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
