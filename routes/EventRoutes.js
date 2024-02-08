const { Router } = require("express");
const EventController = require("./Controllers/EventController");

const routes = Router();
routes.post("/events", EventValidator.create, EventController.create);
routes.get("/events", EventValidator.read, EventController.read);
routes.delete("/events", EventValidator.delete, EventController.delete);
routes.put("/events", EventValidator.update, EventController.update);

module.exports = routes;
