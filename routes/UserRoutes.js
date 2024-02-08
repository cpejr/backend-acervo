const { Router } = require("express");
const UserController = require("./Controllers/UserController");

const routes = Router();
routes.post("/users", UserValidator.create, UserController.create);
routes.get("/users", UserValidator.read, UserController.read);
routes.delete("/users", UserValidator.delete, UserController.delete);
routes.put("/users", UserValidator.update, UserController.update);

module.exports = routes;
