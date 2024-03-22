import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

// Non existing routes
app.use("*", (req, res, next) => {
  next(new NotFoundError(`Route '${req.baseUrl}' not found`));
});

export default app;
