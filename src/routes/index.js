import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import eventRoutes from "./EventRoutes.js";
import mediaRoutes from "./MediaRoutes.js";
import voteRoutes from "./VoteRotes.js";
import memorialRoutes from "./MemorialRoutes.js";

const routes = Router();

routes
  .use("/user", userRoutes)
  .use("/event", eventRoutes)
  .use("/media", mediaRoutes)
  .use("/vote", voteRoutes)
  .use("/memorial", memorialRoutes);

export default routes;
