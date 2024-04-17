import express from "express";
import projectController from "../controllers/project.controller";
const projectRouter = express.Router();

projectRouter.post("/", projectController.create);
projectRouter.get("/", projectController.get);
projectRouter.get("/:id", projectController.find);
projectRouter.patch("/:id", projectController.update);
projectRouter.delete("/:id", projectController.delete);

export default projectRouter;
