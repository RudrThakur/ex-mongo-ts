import express from "express";
import taskController from "../controllers/task.controller";
import accessMiddleware from "../middlewares/access.middleware";
const taskRouter = express.Router();

taskRouter.post("/", accessMiddleware("create_tasks"), taskController.create);

taskRouter.get("/", taskController.get);
taskRouter.get("/:id", taskController.find);
taskRouter.patch(
  "/:id",
  accessMiddleware("change_task_status"),
  taskController.update
);
taskRouter.delete(
  "/:id",
  accessMiddleware("delete_tasks"),
  taskController.delete
);

taskRouter.post(
  "/:id/assign",
  accessMiddleware("assign_tasks"),
  taskController.assign
);

taskRouter.post(
  "/:id/review",
  accessMiddleware("review_tasks"),
  taskController.assign
);

taskRouter.post(
  "/:id/uncomplete",
  accessMiddleware("uncomplete_tasks"),
  taskController.assign
);

export default taskRouter;
