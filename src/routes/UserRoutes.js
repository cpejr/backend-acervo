import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import UserValidator from "../Validators/UserValidator.js";
import verifyJwt from "../Middlewares/VerifyJwt.js";
import verifyIsAdm from "../Middlewares/VerifyisAdm.js";

const userRoutes = Router();

userRoutes.route("/").post(UserValidator.create, UserController.create).get(UserController.readAll);

userRoutes
  .route("/:id")
  .get(UserValidator.get, UserController.read)
  .delete(verifyJwt, verifyIsAdm, UserValidator.destroy, UserController.destroy)
  .put(verifyJwt, verifyIsAdm, UserValidator.update, UserController.update);

userRoutes.route("/").post(UserController.login);

export default userRoutes;
