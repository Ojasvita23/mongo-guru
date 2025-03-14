import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log("searchParams = ", searchParams);
  const topic = searchParams.get("topic");

  console.log("topic = ", topic);

  if (!topic) {
    return NextResponse.json({ error: "Topic not provided" }, { status: 400 });
  }

  const filePath = path.join(
    process.cwd(),
    "src/constants/content",
    `/${topic}.md`
  );

  console.log("filePath = ", filePath);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Topic not found" }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({ content });
}
