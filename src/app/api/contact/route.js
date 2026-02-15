import { NextResponse } from "next/server";
// Changing "@" to "../../../" to force it to find the files
import dbConnect from "../../../lib/db";
import Contact from "../../../models/Contact";

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newMessage = await Contact.create(data);
    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}