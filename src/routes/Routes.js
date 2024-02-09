const { Router } = require("express");
const VoteController = require("./Controllers/VoteController");
const UserController = require("./Controllers/UserController");
const MediaController = require("./Controllers/MediaController");
const EventController = require("./Controllers/EventController");
const userRoutes = Router();
module.exports = userRoutes;
