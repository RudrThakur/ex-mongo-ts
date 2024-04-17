import { IContext } from "../constants/auth.constant";
import { httpStatus } from "../constants/http.constant";
import ApiException from "../exceptions/api.exception";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret: string = "secret";

export default {
  signin: async (props: any) => {
    const { body, query, params, context } = props;

    const user = await User.findOne({ email: body.email });
    if (!user)
      throw new ApiException(httpStatus.BAD_REQUEST, "invalid credentials");

    const compareResult = await bcrypt.compare(body.password, user.password);
    if (!compareResult)
      throw new ApiException(httpStatus.UNAUTHORISED, "invalid credentials");

    const newContext: IContext = { id: user.id, role: user.role };
    const token = await jwt.sign(newContext, secret);
    return {
      status: httpStatus.OK,
      token,
    };
  },

  signup: async (props: any) => {
    const { body, query, params, context } = props;

    const hashed = await bcrypt.hash(body.password, 10);
    const user = new User();
    user.email = body.email;
    user.password = hashed;
    user.role = body.role;
    user.name = body.name;
    user.save();

    return {
      status: httpStatus.OK,
    };
  },
};
