import { Router } from "express";
import EventValidator from "../Validators/EventValidator.js";
import EventController from "../Controllers/EventController.js";

const eventRoutes = Router();

eventRoutes.route("/").post(EventValidator.create, EventController.create);

eventRoutes
  .route("/:id")
  .get(EventValidator.read, EventController.read)
  .put(EventValidator.update, EventController.update)
  .delete(EventValidator.destroy, EventController.delete);

export default eventRoutes;
