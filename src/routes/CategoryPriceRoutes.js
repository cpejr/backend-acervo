import { Router } from "express";
import CategoryPriceValidator from "../Validators/CategoryPriceValidator.js";
import CategoryController from "../Controllers/CategoryPriceController.js";

const categoryPriceRoutes = Router();

categoryPriceRoutes
  .route("/")
  .get(CategoryController.read)
  .post(CategoryPriceValidator.create, CategoryController.create);

categoryPriceRoutes
  .route("/:id")
  .delete(CategoryPriceValidator.destroy, CategoryController.destroy)
  .put(CategoryPriceValidator.update, CategoryController.update);

categoryPriceRoutes.route("/search-by-name").get(CategoryController.readByName);
categoryPriceRoutes.route("/names").get(CategoryController.readNames);

export default categoryPriceRoutes;
