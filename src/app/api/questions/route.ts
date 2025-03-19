import { NextResponse } from "next/server";

import Question from "@/backend/models/Question";
import { connectDB } from "@/backend/lib/db";

export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    const newQuestion = new Question(data);
    await newQuestion.save();
    return NextResponse.json(
      { success: true, data: newQuestion },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Fetch questions based on topicId
export async function GET(req: Request) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);
    const topicId = searchParams?.get("topicId");
    if (!topicId) {
      return NextResponse.json(
        { success: false, error: "Topic ID is required" },
        { status: 400 }
      );
    }

    const questions = await Question.find({ topic_id: topicId });

    return NextResponse.json(
      { success: true, data: questions },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
