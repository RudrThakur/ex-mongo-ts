import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routesLoader from "./routes.loader";

export default (app: express.Application) => {
  app.use(morgan("common"));
  app.use(helmet());
  app.use(express.json());

  routesLoader(app);
};
