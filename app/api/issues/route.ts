import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { IssuseSchema } from "../../validationschema";
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = IssuseSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
