import express from "express";
import userController from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/", userController.create);
userRouter.get("/", userController.get);
userRouter.get("/:id", userController.find);
userRouter.patch("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;
