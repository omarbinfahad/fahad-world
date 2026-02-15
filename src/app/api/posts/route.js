import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import Post from "../../../models/Post";
import { v2 as cloudinary } from "cloudinary";

// Config Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const finalMediaList = [];

    // 1. Process Images
    if (data.images && data.images.length > 0) {
      for (const image of data.images) {
        const uploadResponse = await cloudinary.uploader.upload(image, {
          folder: "fahad-world-gear",
        });
        finalMediaList.push(uploadResponse.secure_url);
      }
    }

    // 2. Process Videos
    if (data.videos && data.videos.length > 0) {
      data.videos.forEach(link => finalMediaList.push(link));
    }

    // 3. Save to DB
    const newPost = await Post.create({
      title: data.title,
      date: data.date,
      description: data.description,
      media: finalMediaList,
    });

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// --- NEW: DELETE FUNCTION ---
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    await dbConnect();
    await Post.findByIdAndDelete(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}