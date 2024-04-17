import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userService from "../services/user.service";
import { httpStatus } from "../constants/http.constant";

export default {
  create: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await userService.create({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  get: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await userService.get({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  find: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await userService.find({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  update: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await userService.update({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  delete: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await userService.delete({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),
};
