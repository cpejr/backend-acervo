import { Router } from "express";
import MemorialController from "../Controllers/MemorialController.js";
import MemorialValidator from "../Validators/MemorialValidator.js";
import verifyJwt from "../Middlewares/VerifyJwt.js";
import verifyIsAdm from "../Middlewares/VerifyisAdm.js";

const memorialRoutes = Router();

memorialRoutes
  .route("/")
  .post(verifyIsAdm, verifyJwt, MemorialController.create, MemorialValidator.create)
  .get(verifyIsAdm, verifyJwt, MemorialValidator.read, MemorialController.read);

memorialRoutes
  .route("/:id")
  .put(verifyIsAdm, verifyJwt, MemorialValidator.update, MemorialController.update)
  .delete(verifyIsAdm, verifyJwt, MemorialValidator.destroy, MemorialController.delete);

export default memorialRoutes;
