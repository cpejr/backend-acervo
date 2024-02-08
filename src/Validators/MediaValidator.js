const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const create = validateRequest({});
module.exports = {
  create,
};
