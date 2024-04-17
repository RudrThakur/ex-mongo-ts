import { Schema, model } from "mongoose";

export interface IProject {
  name: string;
}

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>("Project", projectSchema);
