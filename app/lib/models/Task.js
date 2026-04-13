import { Schema } from "mongoose";
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
export default Task;
