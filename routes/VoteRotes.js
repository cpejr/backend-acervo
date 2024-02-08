const { Router } = require("express");
const VoteController = require("./Controllers/VoteController");

const routes = Router();
routes.post("/votes", VoteController.create);
routes.get("/votes", VoteController.read);
routes.delete("/votes", VoteController.delete);
routes.put("/votes", VoteController.update);

module.exports = routes;
