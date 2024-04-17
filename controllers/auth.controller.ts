import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { httpStatus } from "../constants/http.constant";
import authService from "../services/auth.service";

export default {
  signin: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await authService.signin({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  signup: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await authService.signup({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),
};
