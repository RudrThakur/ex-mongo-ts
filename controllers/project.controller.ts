import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import projectService from "../services/project.service";
import { httpStatus } from "../constants/http.constant";

export default {
  create: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await projectService.create({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  get: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await projectService.get({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  find: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await projectService.find({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  update: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await projectService.update({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),

  delete: asyncHandler(async (req: Request, res: Response): Promise<any> => {
    let data = await projectService.delete({
      body: req.body,
      query: req.query,
      params: req.params,
      context: res.locals.context,
    });
    return res.status(httpStatus.OK).json(data);
  }),
};
