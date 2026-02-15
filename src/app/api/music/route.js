import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET() {
  try {
    // 👇 PASTE YOUR PLAYLIST ID HERE 👇
    // It usually starts with "PL..." 
    const PLAYLIST_ID = "PLlW-1Dqq_sVd9CFid8up2yLTyBCgSv8C6&si=Ax6U005pId18xrMj"; 

    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`, { next: { revalidate: 60 } });
    
    if (!res.ok) throw new Error("Failed to fetch playlist");

    const xmlText = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
    const result = parser.parse(xmlText);

    const entries = result.feed.entry || [];
    const list = Array.isArray(entries) ? entries : [entries];

    const tracks = list.map((item) => {
      const videoId = item["yt:videoId"];
      return {
        title: item.title,
        artist: item.author.name,
        url: `https://music.youtube.com/watch?v=${videoId}&list=${PLAYLIST_ID}`,
        coverImage: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    });

    return NextResponse.json({ success: true, tracks });
  } catch (error) {
    console.error("YouTube Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch music" });
  }
}