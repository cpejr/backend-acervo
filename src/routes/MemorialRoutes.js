import { Router } from "express";
import MemorialController from "../Controllers/MemorialController.js";
import MemorialValidator from "../Validators/MemorialValidator.js";
import verifyJwt from "../Middlewares/VerifyJwt.js";
import verifyIsAdm from "../Middlewares/VerifyisAdm.js";

const memorialRoutes = Router();

memorialRoutes
  .route("/memorialCards")
  .post(MemorialValidator.read, MemorialController.read);

  memorialRoutes
    .route("/")
    .post(verifyJwt, verifyIsAdm, MemorialValidator.create, MemorialController.create)
    .get(MemorialValidator.read, MemorialController.read);

memorialRoutes
  .route("/:id")
  .put(verifyJwt, verifyIsAdm, MemorialValidator.update, MemorialController.update)
  .delete(verifyJwt, verifyIsAdm, MemorialValidator.destroy, MemorialController.delete);

export default memorialRoutes;
