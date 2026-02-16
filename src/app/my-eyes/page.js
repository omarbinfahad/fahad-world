"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const introSections = [
  { 
    id: 1, 
    type: "image-left", 
    src: "/my-eyes.webp", 
    text: "I’ve always been drawn to the small details that most people walk past without noticing. Whether I’m wearing my Meta glasses, flying my DJI FPV drone, or holding my camera, I’m constantly searching for moments that feel alive. My passion for music and visual storytelling comes together here — in the colours, movements, and emotions I capture. This space is where I share the world exactly as I experience it, one frame at a time." 
  },

  { 
    id: 2, 
    type: "image-right", 
    src: "/my-eyes2.webp", 
    text: "Every time I record something — a quiet street, a fast-paced flight, a simple moment with friends — I’m trying to freeze a feeling. My goal is to connect with people through visuals that speak louder than words. With every clip and every photo, I’m sharing the stories that inspire me daily: the energy of the city, the calm of nature, and the beauty hidden in everyday life. This page is my way of letting you step into those moments with me." 
  },

  { 
    id: 3, 
    type: "image-left", 
    src: "/eyes-3.png", 
    text: "Life moves fast, and every ending opens the door to something new. Through my lens, I try to capture those transitions — the shifts, the emotions, the beginnings that rise from unexpected places. Whether it’s a drone soaring above the world or a simple snapshot from my glasses, each image is a reminder that every moment has a story. This is where those stories live, unfolding one after another." 
  }
];


// --- HELPER: ROBUST YOUTUBE ID EXTRACTOR ---
// Captures ID from: shorts, watch, embed, and youtu.be
const getVideoId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function MyEyes() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null); // Stores URL for lightbox
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        if (data.success) setPosts(data.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen w-full bg-white text-[#374151]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-10 md:mt-20 pb-20">
        
        <div className="flex items-center gap-4 mb-20">
          <h1 className="text-2xl md:text-4xl font-bold font-serif">My Eyes</h1>
        </div>

        {/* STATIC INTRO */}
        <div className="flex flex-col gap-24 border-l border-black ml-[11px] pl-12 md:pl-24 relative mb-32">
           {introSections.map((section) => (
             <div key={section.id} className="flex flex-col md:flex-row gap-8 items-start">
               {section.type === "image-left" ? (
                 <>
                   <div className="relative w-full md:w-1/2">
                     <Image src={section.src} alt="Landscape" width={800} height={600} className="object-contain w-full h-auto rounded-sm" />
                   </div>
                   <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">{section.text}</p>
                 </>
               ) : (
                 <>
                   <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg order-2 md:order-1">{section.text}</p>
                   <div className="relative w-full md:w-1/2 order-1 md:order-2">
                     <Image src={section.src} alt="Landscape" width={800} height={600} className="object-contain w-full h-auto rounded-sm" />
                   </div>
                 </>
               )}
             </div>
           ))}
        </div>

        {/* DYNAMIC FEED */}
        <div className="relative border-l border-gray-300 ml-[11px] pl-12 md:pl-24 space-y-32">
          
          {loading && <p className="text-gray-200 font-serif italic">Loading memories...</p>}
          
          {posts.slice(0, visibleCount).map((post) => (
            <div key={post._id} className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              <div className="absolute -left-[59px] md:-left-[107px] top-2 w-6 h-6 bg-black rounded-full border-4 border-white"></div>

              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-2xl md:text-5xl font-serif font-bold text-black">{post.title}</h2>
                <span className="text-sm font-serif text-gray-500">{post.date}</span>
              </div>

              {/* MEDIA ROW */}
              {post.media && post.media.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-8 items-start">
                  {post.media.map((mediaSrc, idx) => {
                    
                    const isVideo = mediaSrc.includes("youtube.com") || mediaSrc.includes("youtu.be");
                    const isShort = mediaSrc.includes("/shorts/");
                    
                    // --- VIDEO PREVIEW LOGIC ---
                    let videoThumbnail = null;
                    if (isVideo) {
                        const videoId = getVideoId(mediaSrc);
                        if (videoId) {
                            videoThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        }
                    }

                    return (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedMedia(mediaSrc)}
                        // Grid Logic: 
                        // 1. Height is fixed (300px) so items line up nicely.
                        // 2. Width is AUTO so images keep their natural shape (Square/Wide).
                        // 3. Videos get a specific aspect ratio class.
                        className={`
                          relative h-[300px] cursor-zoom-in group rounded-lg overflow-hidden border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-all
                          ${isVideo && isShort ? 'aspect-[9/16]' : ''}
                          ${isVideo && !isShort ? 'aspect-video' : ''}
                          ${!isVideo ? 'w-auto' : ''} 
                        `}
                      >
                        {isVideo ? (
                          // VIDEO THUMBNAIL (Prevents blank errors)
                          <div className="w-full h-full relative bg-black">
                             {videoThumbnail ? (
                               <img 
                                  src={videoThumbnail} 
                                  alt="Video Preview" 
                                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                               />
                             ) : (
                               // Fallback if no thumbnail found
                               <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xs">Video</div>
                             )}
                             
                             {/* Play Button Overlay */}
                             <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl transform group-hover:scale-110 transition-transform">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                                </div>
                             </div>
                          </div>
                        ) : (
                          // IMAGE PREVIEW (Natural width)
                          <img 
                            src={mediaSrc} 
                            alt="Preview" 
                            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              <p className="text-gray-600 leading-relaxed font-serif text-lg max-w-2xl whitespace-pre-wrap">
                {post.description}
              </p>
            </div>
          ))}

          {visibleCount < posts.length && (
            <div className="pt-12 pb-12 flex justify-center">
               <button onClick={handleLoadMore} className="bg-black text-white px-8 py-3 rounded-full font-serif text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">Load More</button>
            </div>
          )}

        </div>
      </div>

      <Footer />

      {/* ====================================================
          LIGHTBOX (NATIVE IFRAME - "THE NUCLEAR OPTION")
      ==================================================== */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
          </button>

          <div 
            className="w-full h-full flex items-center justify-center relative pointer-events-none md:pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(selectedMedia.includes("youtube.com") || selectedMedia.includes("youtu.be")) ? (
               // VIDEO PLAYER LOGIC (Pure HTML Iframe)
               (() => {
                 const isShort = selectedMedia.includes("/shorts/");
                 const videoId = getVideoId(selectedMedia);
                 
                 // If regex failed, show error
                 if (!videoId) return <p className="text-white">Video Error</p>;

                 return (
                   <div className={`
                      relative 
                      ${isShort ? 'h-[85vh] aspect-[9/16]' : 'w-full max-w-5xl aspect-video'} 
                      bg-black shadow-2xl rounded-lg overflow-hidden
                   `}>
                     <iframe 
                       src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                       title="YouTube Player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       className="w-full h-full"
                     ></iframe>
                   </div>
                 );
               })()
            ) : (
               // IMAGE LOGIC
               <img 
                 src={selectedMedia} 
                 alt="Full Screen" 
                 className="max-w-full max-h-[90vh] object-contain"
               />
            )}
          </div>
        </div>
      )}

    </main>
  );
}
