import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-[#374151]">
      {/* HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 px-8 gap-12 md:gap-24 max-w-7xl mx-auto mb-32">
        {/* LEFT: Image */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-full h-full border-[1.5px] border-blue-400 z-0 hidden md:block"></div>
          <div className="relative z-10 w-[300px] h-[350px] md:w-[400px] md:h-[480px]">
            <Image src="/hero-image.png" alt="Fahad" fill className="object-cover shadow-lg" priority />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex flex-col max-w-md">
          <h1 className="text-6xl md:text-8xl mb-12">
            <span className="text-[#A0A0A0]">Fahad</span>
            <span className="text-black font-semibold">.world</span>
          </h1>
          <div className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed space-y-6 font-serif">
            <p>
              I exist in the quiet spaces between sound and sight. Where the note
              fades into silence, and the shadow lengthens across the wall.
            </p>
            <p>
              through our fingers like sand, leaving only the faintest trace of what
              My work is an exploration of memory—how we hold it, how it slips.
            </p>
          </div>
        </div>
      </div>


      {/* TIMELINE SECTIONS */}
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        
        {/* 1. ABOUT ME */}
        <div className="flex gap-6 md:gap-12 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border border-black flex justify-center items-center bg-white z-10">
              <span className="font-serif italic font-bold text-lg">i</span>
            </div>
            <div className="w-[1px] bg-black h-full min-h-[400px]"></div>
          </div>
          <div className="pb-24 w-full">
            <Link href="/about" className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold italic mb-8 hover:opacity-70 transition-opacity cursor-pointer">About Me</h2>
            </Link>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image src="/about-image.png" alt="My Setup" fill className="object-cover"/>
              </div>
              <p className="text-gray-600 leading-relaxed font-serif text-lg">
                I&apos;m a creative web developer and University of Wollongong student who lives for motion, culture, and expression. Whether I&apos;m surfing waves, skydiving through the sky, or learning a new language, I’m always chasing new perspectives. Fluent in five languages, I use design and visuals to capture moments and turn them into stories that connect people.
              </p>
            </div>
          </div>
        </div>


        {/* 2. MUSIC */}
        <div className="flex gap-6 md:gap-12 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border border-black flex justify-center items-center bg-white z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2"/><path fillRule="evenodd" d="M9 3v10H8V3h1z"/><path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/></svg>
            </div>
            <div className="w-[1px] bg-black h-full min-h-[400px]"></div>
          </div>
          <div className="pb-24 w-full">
            <Link href="/music" className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold italic mb-8 hover:opacity-70 transition-opacity cursor-pointer">Music</h2>
            </Link>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                <div className="relative w-full h-[300px]">
                  <Image src="/guittar.png" alt="Studio" fill className="object-cover"/>
                </div>
                <p className="text-gray-600 leading-relaxed font-serif text-lg">
                  Music is more than background sound for me — it&apos;s part of my creative process. I listen while building ideas and play guitar when I want to slow down and feel them. The emotions and rhythms I experience often translate into the visuals and experiences I design.
                </p>
              </div>
              <div className="relative w-full h-[400px] md:mt-24">
                <Image src="/music-man-new.png" alt="Artist Portrait" fill className="object-cover"/>
              </div>
            </div>
          </div>
        </div>


        {/* 3. MY EYES */}
        <div className="flex gap-6 md:gap-12 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border border-black flex justify-center items-center bg-white z-10">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </div>
            <div className="w-[1px] bg-black h-full min-h-[400px]"></div>
          </div>
          <div className="pb-24 w-full">
            <Link href="/my-eyes" className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold italic mb-8 hover:opacity-70 transition-opacity cursor-pointer">My Eyes</h2>
            </Link>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/2 h-[300px]">
                  <Image src="/eyes-1.png" alt="Landscape 1" fill className="object-cover"/>
                </div>
                <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                  I enjoy walking through new places and letting nature slow me down. Whenever something feels peaceful or meaningful, I capture it. Photography helps me notice details most people pass by. Light, colors, and atmosphere often tell their own story. Each photo becomes a memory I can revisit later. It&apos;s my way of keeping moments alive.
                </p>
              </div>
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                  Exploring nature gives me space to breathe and observe. I like documenting scenes that feel calm and authentic. Mountains, forests, and open skies inspire my perspective. Sometimes the smallest moment becomes the most beautiful frame. Through photos, I share how I experienced that place. It&apos;s less about perfection and more about feeling.
                </p>
                <div className="relative w-full md:w-1/2 h-[400px]">
                  <Image src="/eyes-2.png" alt="Landscape 2" fill className="object-cover"/>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/2 h-[450px]">
                  <Image src="/eyes-3.png" alt="Landscape 3" fill className="object-cover"/>
                </div>
                <p className="w-full md:w-1/2 text-gray-600 leading-relaxed font-serif text-lg">
                  I often carry a devices when I travel or wander around. Not to take pictures of everything, but to wait for the right moment. Good light, movement, and silence make a scene special. Photography teaches me patience and awareness. Every image reflects how I saw that moment in time. It turns ordinary days into lasting memories.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. CONTACT */}
        <div className="flex gap-6 md:gap-12 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border border-black flex justify-center items-center bg-white z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/><path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/></svg>
            </div>
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="pb-12 w-full">
            <Link href="/contact" className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold italic mb-8 hover:opacity-70 transition-opacity cursor-pointer">Contact</h2>
            </Link>
            <p className="text-gray-600 leading-relaxed font-serif text-lg mb-8 max-w-xl">
              Feel free to reach out anytime. I&apos;m happy to chat about design, travel, languages, or life. I appreciate genuine conversations and shared curiosity. Every connection has a story behind it. Maybe ours starts here. Say hello 👋
            </p>
            <div className="space-y-4 font-serif text-lg text-gray-700">
              <div className="flex items-center gap-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                <a href="mailto:hello@fahad.email" className="hover:underline">hello@fahad.email</a>
              </div>
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg>
                <span className="cursor-pointer hover:underline"><a href="https://fahad.social" target="_blank" rel="noopener noreferrer">Social links</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER COMPONENT */}
      <Footer />
    </main>
  );
}