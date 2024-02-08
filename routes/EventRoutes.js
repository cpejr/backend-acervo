const { Router } = require("express");
const EventController = require("./Controllers/EventController");

const routes = Router();
routes.post("/events", EventController.create);
routes.get("/events", EventController.read);
routes.delete("/events", EventController.delete);
routes.put("/events", EventController.update);

module.exports = routes;
