const { Router } = require("express");
const MediaController = require("./Controllers/MediaController");

const routes = Router();
routes.post("/medias", MediaValidator.create, MediaController.create);
routes.get("/medias", MediaValidator.read, MediaController.read);
routes.delete("/medias", MediaValidator.delete, MediaController.delete);
routes.put("/medias", MediaValidator.update, MediaController.update);

module.exports = routes;
