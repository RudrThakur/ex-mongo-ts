import { NextFunction, Request, Response } from "express";
import ApiException from "../exceptions/api.exception";

export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApiException) {
    return res.status(error.code).json({
      message: error.message,
    });
  } else {
    next();
  }
};
