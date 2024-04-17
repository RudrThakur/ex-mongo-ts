import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import taskService from "../services/task.service";
import { httpStatus } from "../constants/http.constant";

export default {
  create: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.create({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  get: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.get({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  find: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.find({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  update: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.update({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  assign: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.assign({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  review: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.review({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  uncomplete: asyncHandler(
    async (req: Request, res: Response): Promise<any> => {
      let data = await taskService.uncomplete({
        body: req.body,
        query: req.query,
        params: req.params,
        context: res.locals.context,
      });
      return res.status(httpStatus.OK).json(data);
    }
  ),

  delete: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await taskService.delete({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),
};
