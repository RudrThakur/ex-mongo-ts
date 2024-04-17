import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { httpStatus } from "../constants/http.constant";

const secret = "secret";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const payload = await jwt.verify(token, secret);
      if (payload) {
        res.locals.context = payload;
        next();
      } else {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "invalid token" });
      }
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "invalid token" });
    }
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "missing authorization header" });
  }
};
