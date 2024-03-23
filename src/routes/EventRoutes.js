import { Router } from "express";
import EventValidator from "../Validators/EventValidator.js";
import EventController from "../Controllers/EventController.js";

const eventRoutes = Router();

eventRoutes
  .route("/")
  .get(EventValidator.read, EventController.read)
  .post(EventValidator.create, EventController.create);

eventRoutes
  .route("/:id")
  .put(EventValidator.update, EventController.update)
  .delete(EventValidator.destroy, EventController.delete);

eventRoutes.get("/search-by-category", EventController.filterCategories);

export default eventRoutes;
