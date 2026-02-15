import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 pb-12 w-full bg-white border-t border-gray-100">
      {/* Navigation Links */}
      <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 font-serif italic text-xl text-gray-500 mb-20">
        <Link href="/music" className="flex items-center gap-4 hover:text-black transition-colors group">
          Listen Now <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
        <Link href="/my-eyes" className="flex items-center gap-4 hover:text-black transition-colors group">
          Watch Now <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
        <a href="https://fahad.wiki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-black transition-colors group">
          Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-100 mb-16 max-w-7xl mx-auto"></div>

      {/* Quote and Socials */}
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <p className="font-serif italic text-xl md:text-2xl text-gray-600">
          &quot;Every ending is just a new beginning waiting to unfold.&quot;
        </p>
        <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-4">
          Made with love from Sydney, Australia
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
            <div className="w-10 h-10 border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 8 0zm0 1.44c2.136 0 2.411.006 3.252.044.78.036 1.203.166 1.485.276.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.116.047 3.251s-.008 2.409-.047 3.251c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.116.047-3.251.047s-2.414-.009-3.251-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.116-.046-3.251s.008-2.409.046-3.251c.036-.78.166-1.204.276-1.485.145-.374.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm0 2.452a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.768a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32zm5.33-5.33a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92z"/></svg>
            </div>
             <div className="w-10 h-10 border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
            </div>
             <div className="w-10 h-10 border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-black">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>
            </div>
             <div className="w-10 h-10 border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-black">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2"/><path fillRule="evenodd" d="M9 3v10H8V3h1z"/><path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/></svg>
            </div>
            <div className="w-10 h-10 border border-gray-200 flex justify-center items-center hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-black">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
            </div>
          </div>

        <p className="text-[10px] md:text-xs text-gray-300 mt-12 mb-8 font-light">
          © 2026 Fahad.World — All rights reserved
        </p>
      </div>
    </footer>
  );
}