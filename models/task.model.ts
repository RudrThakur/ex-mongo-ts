import { ObjectId, Schema, model } from "mongoose";

export interface ITask {
  task: string;
  assigned_to: ObjectId;
  status: string;
}

const taskSchema = new Schema<ITask>(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    assigned_to: {
      type: Schema.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    status: {
      type: String,
      required: false,
      trim: true,
      default: "uncomplete",
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<ITask>("Task", taskSchema);
