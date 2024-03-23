import { Router } from "express";
import CategoryTypeValidator from "../Validators/CategoryTypeValidator.js";
import CategoryController from "../Controllers/CategoryTypeController.js";

const categoryTypeRoutes = Router();

categoryTypeRoutes
  .route("/")
  .get(CategoryController.read)
  .post(CategoryTypeValidator.create, CategoryController.create);

categoryTypeRoutes
  .route("/:id")
  .delete(CategoryTypeValidator.destroy, CategoryController.destroy)
  .put(CategoryTypeValidator.update, CategoryController.update);

categoryTypeRoutes.route("/search-by-name").get(CategoryController.readByName);
categoryTypeRoutes.route("/names").get(CategoryController.readNames);

export default categoryTypeRoutes;
