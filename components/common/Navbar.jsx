"use client";
import Link from "next/link";
import {
  User,
  Home,
  BookOpen,
  Bell,
  LogOut,
  Sparkles,
  CircleDot,
  Dot,
} from "lucide-react";

function BirdIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        d="M38 55 Q30 65 20 68 Q28 60 35 52Z"
        fill="url(#sg1)"
        opacity="0.8"
      />
      <path
        d="M40 56 Q35 70 25 75 Q32 64 38 54Z"
        fill="url(#sg2)"
        opacity="0.7"
      />
      <ellipse cx="42" cy="44" rx="14" ry="10" fill="url(#sg2)" />
      <path
        d="M42 38 Q55 20 68 18 Q60 28 50 36 Q46 39 42 38Z"
        fill="url(#sg1)"
      />
      <path
        d="M44 38 Q58 26 70 22 Q63 30 52 37Z"
        fill="url(#sg2)"
        opacity="0.6"
      />
      <path
        d="M38 44 Q22 38 14 28 Q24 34 36 42Z"
        fill="url(#sg1)"
        opacity="0.85"
      />
      <circle cx="52" cy="36" r="8" fill="url(#sg2)" />
      <circle cx="55" cy="34" r="2" fill="white" />
      <circle cx="55.5" cy="34" r="1" fill="#1E40AF" />
      <path d="M59 36 L64 34 L60 38Z" fill="#60A5FA" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-blue-100 shadow-lg shadow-blue-100/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-indigo-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-200/10 to-indigo-200/10 blur-3xl pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-2 right-[15%]">
        <CircleDot className="w-1.5 h-1.5 text-blue-300 opacity-50" />
      </div>
      <div className="absolute bottom-2 left-[20%]">
        <Dot className="w-1 h-1 text-blue-400 opacity-40" />
      </div>
      <div className="absolute top-1/2 left-[10%]">
        <CircleDot className="w-1 h-1 text-indigo-300 opacity-30" />
      </div>

      <div className="px-8 py-3 flex items-center relative z-10">
        {/* LEFT 30% — LOGO */}
        <div className="w-[20%]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Orbit ring */}
              <div
                className="absolute inset-0 w-12 h-12 rounded-full border border-dashed border-blue-200/60 group-hover:animate-spin-slow"
                style={{ animationDuration: "10s" }}
              />
              <div className="w-12 h-12 rounded-full  flex items-center justify-center shadow-lg shadow-blue-200/50 group-hover:shadow-blue-300/60 group-hover:scale-105 transition-all duration-300">
               <img src="https://futurdoom.com/assets/gemini242-B2wd8wXY.png"></img>
              </div>
              
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-light tracking-tight text-gray-800">
                futur
                <span className="font-bold text-pink-500">DooM</span>
              </span>
              <span className="text-[8px] text-gray-400 font-light -mt-1">
                intelligence meets community
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT 70% — ICONS EVENLY SPACED */}
        <div className="w-[80%] flex justify-between items-center">
          <NavIcon icon={<User size={18} />} label="Profile" />
          <NavIcon icon={<Home size={18} />} label="Home" />
          <NavIcon icon={<User size={18} />} label="Friends" />
          <NavIcon icon={<BookOpen size={18} />} label="Learn" />
          <NavIcon icon={<Bell size={18} />} label="Notifications" />
          <NavIcon icon={<LogOut size={18} />} label="Logout" />
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group:hover .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </header>
  );
}

function NavIcon({ icon, label }) {
  return (
    <div className="relative group">
      <button
        className="w-11 h-11 flex items-center justify-center rounded-2xl
                   bg-white/50 backdrop-blur-sm
                   border border-blue-100
                   text-gray-500 shadow-md shadow-blue-100/30
                   hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600
                   hover:text-white hover:border-blue-200
                   hover:shadow-lg hover:shadow-blue-200/50
                   hover:scale-110
                   transition-all duration-300
                   active:scale-95
                   relative overflow-hidden"
      >
        {/* Hover effect sparkle */}

        {icon}
      </button>

      {/* Tooltip */}
     
    </div>
  );
}
