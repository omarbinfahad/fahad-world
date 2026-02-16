"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white text-[#374151]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-10 md:mt-20 pb-20">
        
        {/* TOP SECTION */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-12">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <Image src="/about-image.png" alt="My Workspace" fill className="object-cover rounded-[5px]" />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <p className="text-lg md:text-xl text-gray-600 font-serif leading-relaxed">
              I&apos;m a creative artist passionate about music, visual expression, 
              and capturing life&apos;s beautiful moments. Through my work, I strive 
              to connect with people and share the stories that inspire me every day.
              I&apos;m a creative artist passionate about music, visual expression, 
              and capturing life&apos;s beautiful moments.
            </p>
          </div>
        </div>

        {/* JOURNEY SECTION */}
        <h2 className="text-3xl md:text-4xl font-bold font-serif italic mb-16">My Journey</h2>

        <div className="space-y-32 relative border-l-2 border-gray-100 md:border-l-0 pl-8 md:pl-0">
          
          {/* 1. CUMILLA */}
          <div className="relative">
             {/* Sticky Marker (Desktop Only) */}
             <div className="hidden md:flex absolute -left-[69px] top-0 flex-col items-center h-full">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white z-10 sticky top-24">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                </div>
                <div className="w-[2px] h-full bg-gray-100 absolute top-8"></div>
             </div>

             {/* Mobile Marker */}
             <div className="md:hidden absolute -left-[41px] top-0 w-6 h-6 bg-black rounded-full border-4 border-white"></div>

             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">Cumilla, Bangladesh</h3>
             <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-8">
                  <p className="text-gray-600 leading-relaxed font-serif text-lg">
                    This is where my story started in 2004. Growing up in Cumilla, I was surrounded by history and everyday simplicity. The city has a calm rhythm — not too fast, not too slow. Its greenery, old architecture, and warm community gave me perspective. Many of my earliest inspirations were born here.
                  </p>
                  <div className="relative w-full h-[300px]">
                    <Image src="/Cumila.png" alt="Cumilla home" fill className="object-cover rounded-[5px]" />
                  </div>
                </div>
                <div className="relative w-full h-[500px] md:mt-20">
                  <Image src="/Cumilla.webp" alt="Cumilla Stadium" fill className="object-cover rounded-[5px]" />
                </div>
             </div>
          </div>

          {/* 2. DHAKA */}
          <div className="relative">
             {/* Sticky Marker (Desktop) */}
             <div className="hidden md:flex absolute -left-[69px] top-0 flex-col items-center h-full">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white z-10 sticky top-24">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                </div>
                <div className="w-[2px] h-full bg-gray-100 absolute top-8"></div>
             </div>

             {/* Mobile Marker */}
             <div className="md:hidden absolute -left-[41px] top-0 w-6 h-6 bg-black rounded-full border-4 border-white"></div>

             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">Dhaka, Bangladesh</h3>
             <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                   <div className="relative w-full md:w-1/2 h-[300px]">
                    <Image src="/Dhaka-1.png" alt="Dhaka City" fill className="object-cover rounded-[5px]" />
                  </div>
                  <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                    I moved to Dhaka in 2010, and it quickly became the city where I truly grew up, building lifelong friendships, spending most of my teenage years discovering who I was, and experiencing the vibrant energy, diversity, and fast rhythm that shaped my personality and broadened my perspective on life.
                  </p>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
                   <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                    In Dhaka, I completed my secondary education while learning lessons far beyond the classroom, surrounded by inspiring people, busy streets, and unforgettable everyday moments that played a major role in shaping my character, ambition, and creative mindset. <br></br> <br></br> Dhaka is where my journey truly began, where curiosity turned into ambition and ideas slowly became direction, as the city&apos;s constant movement, challenges, and opportunities pushed me to grow, dream bigger, and take my first real steps toward the person I am becoming today.
                  </p>
                  <div className="relative w-full md:w-1/2 h-[400px]">
                    <Image src="/dmrc.avif" alt="Dhaka Boats" fill className="object-cover rounded-[5px]" />
                  </div>
                </div>
             </div>
          </div>

          {/* 3. SYDNEY */}
          <div className="relative">
             {/* Sticky Marker (Desktop) */}
             <div className="hidden md:flex absolute -left-[69px] top-0 flex-col items-center h-full">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white z-10 sticky top-24">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                </div>
                {/* No line for last item */}
             </div>

             {/* Mobile Marker */}
             <div className="md:hidden absolute -left-[41px] top-0 w-6 h-6 bg-black rounded-full border-4 border-white"></div>

             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">Sydney, Australia</h3>
             <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                      Moving to Sydney in February 2023 marked a completely new chapter in my life. I came for my studies at the University of Wollongong, but the experience quickly became much bigger than academics. Living between cities, traveling almost every week, and adapting to a new culture taught me independence, confidence, and curiosity about the world around me. <br></br> <br></br> Here I began collecting experiences instead of just plans — from stepping out of a plane while skydiving to learning how to read the waves while surfing. Each challenge slowly replaced fear with excitement, and I realized growth often lives on the other side of discomfort. <br></br> <br></br>A new country, new routines, and new perspectives.
                    </p>
                    <div className="relative w-full md:w-1/2 h-[500px]">
                      <Image src="/journey-5.png" alt="Sydney Train" fill className="object-cover rounded-[5px]" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                   <div className="relative w-full md:w-1/2 h-[300px]">
                    <Image src="/skydive.png" alt="Skydive" fill className="object-cover rounded-[5px]" />
                  </div>
                  <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                    This place pushed me to try things I had never imagined before. Between university responsibilities and new adventures, I found balance — discipline during the week and freedom on the weekends, building memories that defined this stage of my journey. <br></br> <br></br> Sydney became more than a destination; it became a turning point. I arrived as a student, but slowly grew into someone more open, adaptable, and willing to take risks, carrying lessons that go far beyond academics.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                      This is where I started saying yes to experiences I once only imagined — learning to skydive, learning to surf, and embracing the outdoors, turning ordinary weekends into unforgettable memories and discovering a freer, more confident version of myself.
                    </p>
                    <div className="relative w-full md:w-1/2 h-[500px]">
                      <Image src="/surfing.png" alt="Surfing" fill className="object-cover rounded-[5px]" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                      The ocean, the sky, and everything in between taught me to live fully.
                    </p>
                    <div className="relative w-full md:w-1/2 h-[500px]">
                      <video 
                        className="w-full h-full object-cover rounded-[5px]"
                        src="/video.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}