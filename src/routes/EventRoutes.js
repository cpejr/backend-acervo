import { Router } from "express";
import EventValidator from "../Validators/EventValidator.js";
import EventController from "../Controllers/EventController.js";

const eventRoutes = Router();

eventRoutes.get("/get/:id", EventValidator.read, EventController.read);
eventRoutes.post("/create", EventValidator.create, EventController.create);
eventRoutes.put("/edit/:id", EventValidator.update, EventController.update);
eventRoutes.delete ("/delete/:id", EventValidator.destroy, EventController.delete);

export default eventRoutes;
