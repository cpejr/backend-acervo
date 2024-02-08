const { Router } = require("express");
const VoteController = require("./Controllers/VoteController");

const routes = Router();
routes.post("/votes", VoteValidator.create, VoteController.create);
routes.get("/votes", VoteValidator.read, VoteController.read);
routes.delete("/votes", VoteValidator.delete, VoteController.delete);
routes.put("/votes", VoteValidator.update, VoteController.update);

module.exports = routes;
