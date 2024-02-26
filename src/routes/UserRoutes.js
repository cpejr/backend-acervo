import { Router } from "express";
import UserController from "Controllers/UserController.js";
import UserValidator from "Validators/UserValidator.js";

const userRoutes = Router();

userRoutes.route("/getAll").get(UserController.readAll);

userRoutes.route("/").post(UserValidator.create, UserController.create);

userRoutes
  .route("/:id")
  .get(UserController.read)
  .delete(UserValidator.destroy, UserController.destroy)
  .put(UserValidator.update, UserController.update);

userRoutes.get("/userImage/:id", UserController.takeImage);

export default userRoutes;
