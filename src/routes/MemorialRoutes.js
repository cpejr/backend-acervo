import { Router } from "express";
import MemorialController from "../Controllers/MemorialController.js";
import MemorialValidator from "../Validators/MemorialValidator.js";
import verifyJwt from "../Middlewares/VerifyJwt.js";
import verifyIsAdm from "../Middlewares/VerifyisAdm.js";

const memorialRoutes = Router();

memorialRoutes
  .route("/")
  .post(MemorialValidator.create, MemorialController.create)
  .get(MemorialValidator.read, MemorialController.read);

memorialRoutes
  .route("/:id")
  .put(MemorialValidator.update, MemorialController.update)
  .delete(MemorialValidator.destroy, MemorialController.delete);

export default memorialRoutes;
