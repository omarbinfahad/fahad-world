"use client"; // Needed for form interactivity
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  // State to handle the sending status
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Gather data from the form fields
    const formData = {
      lastName: e.target[0].value,
      firstName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      // Send data to your new API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        e.target.reset(); // Clear the form so they can't spam
        
        // Reset button after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        console.error(result.error);
      }
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white text-[#374151]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-10 md:mt-24 pb-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* =======================
              LEFT COLUMN: Info
          ======================== */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-12">
            
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-black">
                Contact Information
              </h1>
              <p className="text-gray-500 font-serif italic text-lg">
                I&apos;m always open to discussing new projects, creative opportunities, 
                or just having a chat about music and code.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Email</span>
                <a href="mailto:hello@fahad.email" className="text-xl md:text-2xl font-serif text-black hover:opacity-70 transition-opacity">
                  hello@fahad.email
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Location</span>
                <span className="text-xl md:text-2xl font-serif text-black">
                  Auburn, NSW, Australia
                </span>
              </div>
            </div>

          </div>


          {/* =======================
              RIGHT COLUMN: Form
          ======================== */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm">
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Names */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full relative group">
                  <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-serif focus:outline-none focus:border-black transition-colors"
                    placeholder="Doe"
                  />
                </div>
                <div className="w-full relative group">
                  <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-serif focus:outline-none focus:border-black transition-colors"
                    placeholder="John"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="w-full relative group">
                <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-serif focus:outline-none focus:border-black transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Row 3: Phone */}
              <div className="w-full relative group">
                <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-serif focus:outline-none focus:border-black transition-colors"
                  placeholder="+61 400 000 000"
                />
              </div>

              {/* Row 4: Message */}
              <div className="w-full relative group">
                <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Message</label>
                <textarea 
                  rows="4"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-serif focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-lg text-white text-lg font-serif tracking-wide transition-all duration-500 
                  ${status === "success" 
                    ? "bg-green-600 cursor-default" 
                    : status === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                  }
                `}
              >
                {status === "idle" && "Send it to the moon 🚀"}
                {status === "sending" && "Launching... 🛰️"}
                {status === "success" && "Landed Successfully! 🌕"}
                {status === "error" && "Mission Failed. Try Again. ❌"}
              </button>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}