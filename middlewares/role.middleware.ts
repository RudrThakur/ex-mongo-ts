import { NextFunction, Request, Response } from "express";
import { IContext } from "../constants/auth.constant";
import { httpStatus } from "../constants/http.constant";
import ApiException from "../exceptions/api.exception";

export default (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const context: IContext = res.locals?.context;
    if (!context) {
      throw new ApiException(httpStatus.UNAUTHORISED, "unauthorized");
    }
    const currentRole = context.role;

    if (roles.includes(currentRole)) {
      next();
    } else {
      return res.status(httpStatus.FORBIDDEN).json({ message: "forbidden" });
    }
  };
};
