const { Router } = require("express");
const UserController = require("./Controllers/UserController");

const routes = Router();
routes.post("/users", UserController.create);
routes.get("/users", UsersController.read);
routes.delete("/users", UserController.delete);
routes.put("/users", UserController.update);

module.exports = routes;
