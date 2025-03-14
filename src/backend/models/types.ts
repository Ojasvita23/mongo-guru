import { Document } from "mongoose";

export interface IQuestion extends Document {
  topic_id: string;
  question: string;
  difficulty: "easy" | "medium" | "hard";
  expectedOutput?: any;
}
