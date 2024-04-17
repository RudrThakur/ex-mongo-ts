import { httpStatus } from "../constants/http.constant";
import ApiException from "../exceptions/api.exception";
import { Task } from "../models/task.model";

export default {
  create: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.create(body);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  get: async (props: any) => {
    const { body, query, params, context } = props;
    const projects = await Task.find({});
    return {
      status: httpStatus.OK,
      data: projects,
    };
  },

  find: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.find(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  update: async (props: any) => {
    const { body, query, params, context } = props;

    if (body.status == "uncomplete") {
      throw new ApiException(
        httpStatus.BAD_REQUEST,
        "you are not allowed to uncomplete a task"
      );
    }
    const project = await Task.findOneAndUpdate({ id: params.id }, body, {
      new: true,
    });
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  assign: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.findOneAndUpdate(
      { id: params.id },
      { assigned_to: body.id },
      {
        new: true,
      }
    );
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  review: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.findOneAndUpdate(
      { id: params.id },
      { status: "reviewed" },
      {
        new: true,
      }
    );
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  uncomplete: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.findOneAndUpdate(
      { id: params.id },
      { status: "uncomplete" },
      {
        new: true,
      }
    );
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  delete: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Task.deleteOne(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },
};
