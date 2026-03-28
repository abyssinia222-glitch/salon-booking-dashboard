import { NextResponse } from "next/server";
import { businesses } from "@/lib/businesses";

export async function GET() {
  return NextResponse.json(businesses);
}
