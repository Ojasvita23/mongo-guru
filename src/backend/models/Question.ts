import mongoose, { Schema } from "mongoose";
import { IQuestion } from "./types";

const QuestionSchema = new Schema<IQuestion>(
  {
    topic_id: { type: String, required: true },
    question: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    expectedOutput: {
      type: Schema.Types.Mixed,
      // , required: true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Question ||
  mongoose.model<IQuestion>("Question", QuestionSchema);
