import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import UserValidator from "../Validators/UserValidator.js";

const userRoutes = Router();

userRoutes
  .route("/")
  .post(UserValidator.create, UserController.create)
  .get(UserValidator.get, UserController.readAll);

userRoutes
  .route("/:id")
  .get(UserValidator.get, UserController.read)
  .delete(UserValidator.destroy, UserController.destroy)
  .put(UserValidator.update, UserController.update);

export default userRoutes;
