import express from "express";
import authController from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter.post("/signin", authController.signin);
authRouter.post("/signup", authController.signup);

export default authRouter;
