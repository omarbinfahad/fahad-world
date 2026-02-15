"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Music() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your Specific Spotify Playlists
  const spotifyPlaylists = [
    "https://open.spotify.com/embed/playlist/3q4vcOlL1kCvGIfpVqKSuN?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2lO0vZmlJ1Y2rw4McFSXLC?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1E38xzPEKHfojp?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZEVXcG9R8X1mHhkk?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1E384pXZ0oZyvB?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1E3abNZwrQvl57?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1E352sfMsTa3eY?utm_source=generator"
  ];

  useEffect(() => {
    fetch("/api/music")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTracks(data.tracks || []);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#374151]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-10 md:mt-20 pb-20">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-6 text-black tracking-tighter">
            Sonic World
          </h1>
          <p className="text-gray-500 font-serif text-lg max-w-lg">
            This page is a collection of the music I enjoy and return to often. Every song here represents a mood, a memory, or a moment in time. Some tracks help me focus, some inspire creativity, and others simply let me feel present. Instead of a playlist, think of it as a small window into how I experience the world.
          </p>
        </div>

        {/* --- 1. YOUTUBE SECTION --- */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 text-black flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs">▶</span>
             YouTube Rotation
          </h2>

          {loading ? (
            <div className="space-y-4">
              {[1,2,3].map(i => <div key={i} className="h-16 bg-gray-50 rounded-lg animate-pulse" />)}
            </div>
          ) : (
            <div className="space-y-2">
              {tracks.length === 0 ? (
                  <p className="text-gray-400 italic">No songs found in YouTube playlist.</p>
              ) : tracks.map((track, i) => (
                <a 
                  key={i} 
                  href={track.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-300 font-serif w-6 text-right group-hover:text-red-500 transition-colors">
                    {i + 1}
                  </span>
                  <div className="relative w-12 h-12 shadow-sm rounded overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image 
                      src={track.coverImage} 
                      alt={track.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-base font-bold font-serif text-gray-900 truncate group-hover:text-red-600 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate font-serif">
                      {track.artist}
                    </p>
                  </div>
                  <div className="text-gray-300 group-hover:text-red-500 transition-colors pr-2">
                       ♥
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* --- 2. MIDDLE VIDEO (With Sound) --- */}
        <div className="mb-20 w-full">
           <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-xl bg-black">
             {/* Video Player Note: 
                 We use 'controls' so the user can turn on the sound. 
                 Browsers block 'autoplay' if sound is on.
             */}
             <video 
               src="/music-page.mp4" 
               className="w-full h-auto object-cover"
               controls 
               loop 
               playsInline
             />
           </div>
        </div>

        {/* --- 3. SPOTIFY SECTION --- */}
        <div>
          <h2 className="text-3xl font-serif font-bold mb-8 text-black flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">●</span>
             Spotify Collections
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {spotifyPlaylists.map((link, idx) => (
              <div key={idx} className="w-full bg-black rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <iframe 
                  style={{ borderRadius: "12px" }} 
                  src={link} 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}