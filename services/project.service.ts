import { httpStatus } from "../constants/http.constant";
import { Project } from "../models/project.model";

export default {
  create: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Project.create(body);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  get: async (props: any) => {
    const { body, query, params, context } = props;
    const projects = await Project.find({});
    return {
      status: httpStatus.OK,
      data: projects,
    };
  },

  find: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Project.find(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  update: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Project.findOneAndUpdate({ id: params.id }, body, {
      new: true,
    });
    return {
      status: httpStatus.OK,
      data: project,
    };
  },

  delete: async (props: any) => {
    const { body, query, params, context } = props;
    const project = await Project.deleteOne(params.id);
    return {
      status: httpStatus.OK,
      data: project,
    };
  },
};
