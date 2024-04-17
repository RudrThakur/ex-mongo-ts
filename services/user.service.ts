import { httpStatus } from "../constants/http.constant";
import { User } from "../models/user.model";

export default {
  create: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await User.create(body);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  get: async (props: any) => {
    const { body, query, params, context } = props;
    const projects = await User.find({});
    return {
      status: httpStatus.OK,
      data: projects,
    };
  },

  find: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await User.find(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  update: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await User.findOneAndUpdate({ id: params.id }, body, {
      new: true,
    });
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  delete: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await User.deleteOne(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },
};
