const { Router } = require("express");
const MediaController = require("./Controllers/MediaController");

const routes = Router();
routes.post("/medias", MediaController.create);
routes.get("/medias", MediasController.read);
routes.delete("/medias", MediasController.delete);
routes.put("/medias", MediasController.update);

module.exports = routes;
