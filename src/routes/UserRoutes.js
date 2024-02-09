const { Router } = require("express");
const UserController = require("./Controllers/UserController");

const userRoutes = Router();
userRoutes.post("/users", UserValidator.create, UserController.create);
userRoutes.get("/users", UserValidator.read, UserController.read);
userRoutes.delete("/users", UserValidator.delete, UserController.delete);
userRoutes.put("/users", UserValidator.update, UserController.update);

module.exports = userRoutes;
