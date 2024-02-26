import { Router } from "express";
import EventValidator from "../Validators/EventValidator.js";
import EventController from "../Controllers/EventController.js";

const eventRoutes = Router();

eventRoutes.get("/event/:id", EventValidator.read, EventController.read);
eventRoutes.post("/create-event", EventValidator.create, EventController.create);
eventRoutes.put("/event/:id", EventValidator.update, EventController.update);
eventRoutes.delete ("/event/:id", EventValidator.destroy, EventController.delete);

export default eventRoutes;
