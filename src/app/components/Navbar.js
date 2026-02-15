"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Music", path: "/music" },
    { name: "My Eyes", path: "/my-eyes" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper to check active state
  const isActive = (path) => pathname === path;

  return (
    <nav className="w-full py-8 px-6 md:px-12 flex justify-center items-center relative z-50">
      
      {/* ======================
          DESKTOP MENU (Hidden on Mobile)
      ====================== */}
      <ul className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.path}
              className={`text-sm tracking-widest uppercase font-serif transition-colors duration-300
                ${isActive(link.path) ? "text-black border-b border-black pb-1" : "text-gray-400 hover:text-black"}
              `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* ======================
          MOBILE HEADER (Visible on Mobile)
      ====================== */}
      <div className="md:hidden w-full flex justify-between items-center">
        
        {/* Optional: Your Name/Logo on left if you want, or keep it empty for center alignment */}
        <span className="text-xl font-serif font-bold"></span> 

        {/* 3-DOT MENU BUTTON */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 focus:outline-none"
        >
          {/* If open, show X, else show 3 Dots */}
          {isMobileOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
               <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
             </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
               <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
             </svg>
          )}
        </button>
      </div>

      {/* ======================
          MOBILE MENU OVERLAY
      ====================== */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileOpen(false)} // Close menu when clicked
              className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-300
                ${isActive(link.path) ? "text-black border-b-2 border-black pb-1" : "text-gray-400"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}