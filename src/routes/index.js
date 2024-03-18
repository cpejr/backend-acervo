import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import eventRoutes from "./EventRoutes.js";
import mediaRoutes from "./MediaRoutes.js";
import voteRoutes from "./VoteRotes.js";
import categoryTypeRoutes from "./CategoryTypeRoutes.js";
import categoryPriceRoutes from "./CategoryPriceRoutes.js";

const routes = Router();

routes
  .use("/user", userRoutes)
  .use("/event", eventRoutes)
  .use("/media", mediaRoutes)
  .use("/vote", voteRoutes)
  .use("/categoryType", categoryTypeRoutes)
  .use("/categoryPrice", categoryPriceRoutes);

export default routes;
