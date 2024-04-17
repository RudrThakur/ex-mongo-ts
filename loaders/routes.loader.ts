import { httpStatus } from "../constants/http.constant";
import express, { Request, Response } from "express";
import projectRouter from "../routes/project.routes";
import userRouter from "../routes/user.routes";
import authRouter from "../routes/auth.routes";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import taskRouter from "../routes/task.routes";
import errorMiddleware from "../middlewares/error.middleware";

export default (app: express.Application) => {
  app.get("/", async (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("STATUS OK");
  });

  app.use("/api/v1/auth", authRouter);
  app.use(
    "/api/v1/projects",
    authMiddleware,
    roleMiddleware(["admin"]),
    projectRouter
  );
  app.use(
    "/api/v1/users",
    authMiddleware,
    roleMiddleware(["admin"]),
    userRouter
  );
  app.use(
    "/api/v1/tasks",
    authMiddleware,
    roleMiddleware(["developer", "manager"]),
    taskRouter
  );

  app.use(errorMiddleware);
};
