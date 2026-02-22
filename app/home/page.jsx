"use client";

import { User, Search, Sparkles, CircleDot, Dot, MessageCircle, Compass } from "lucide-react";


export default function MainContent() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 font-sans">

      {/* Floating dots decoration */}
      <div className="absolute top-[15%] right-[20%]">
        <CircleDot className="w-3 h-3 text-blue-400 opacity-60 animate-pulse" />
      </div>
      <div className="absolute top-[75%] left-[10%]">
        <Dot className="w-2 h-2 text-indigo-400 opacity-50 animate-pulse delay-100" />
      </div>
      <div className="absolute top-[30%] left-[15%]">
        <CircleDot className="w-2.5 h-2.5 text-blue-300 opacity-40 animate-pulse delay-200" />
      </div>
      <div className="absolute bottom-[20%] right-[15%]">
        <Dot className="w-1.5 h-1.5 text-blue-400 opacity-50 animate-pulse delay-150" />
      </div>

      {/* Radial Background Circles - updated to match design */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-gradient-to-br from-blue-200/10 to-indigo-200/10 rounded-full blur-3xl" />
        <div className="w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl absolute" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-10 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            {/* Orbit ring */}
            <div className="absolute inset-0 w-44 h-44 -m-2 rounded-full border border-dashed border-blue-200/70 animate-spin-slow" style={{ animationDuration: '20s' }} />
            
            {/* Profile image container */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-2 border-blue-100 flex items-center justify-center shadow-xl shadow-blue-200/50 relative">
            <img src="https://futurdoom.com/assets/gemini242-B2wd8wXY.png"></img>
            </div>
            
            {/* Small orbiting dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2">
              <CircleDot className="w-2 h-2 text-blue-400" />
            </div>
            <div className="absolute bottom-0 right-0 -mb-2 -mr-2">
              <Sparkles className="w-3 h-3 text-blue-400" />
            </div>
          </div>

          <h2 className="text-4xl font-light tracking-tight text-gray-800 mb-2">
            Welcome to
          </h2>
          <h2 className="text-4xl font-light tracking-tight text-gray-800 flex items-center gap-2">
            futur
            <span className="font-bold text-pink-500">DooM</span>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </h2>
          
          {/* Divider with dots */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-300" />
            <div className="flex gap-1">
              <Dot className="w-1 h-1 text-blue-300" />
              <CircleDot className="w-1.5 h-1.5 text-blue-400" />
              <Dot className="w-1 h-1 text-blue-300" />
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-blue-200 to-blue-300" />
          </div>

          <p className="text-gray-500 text-sm mt-4 font-light">
            Where Intelligence meets Community
          </p>
        </div>

        {/* RIGHT CHAT CARD - updated to match design */}
        <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl shadow-blue-100/40 p-10 w-[550px] relative">
          
          {/* Decorative dots */}
          <div className="absolute top-4 left-6">
            <Dot className="w-1.5 h-1.5 text-blue-300 opacity-60" />
          </div>
          <div className="absolute bottom-4 right-6">
            <CircleDot className="w-2 h-2 text-blue-300 opacity-50" />
          </div>
          <div className="absolute top-1/2 right-8">
            <Dot className="w-1 h-1 text-indigo-300 opacity-40" />
          </div>

          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200/50">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-gray-800">
                Hello <span className="font-semibold text-blue-500">shiv</span>,
              </h3>
              <p className="text-sm text-gray-500">Nice to meet you!</p>
            </div>
          </div>

          <p className="text-gray-600 mb-8 text-lg flex items-center gap-2">
            Ask me anything, and I'm here to help you.
            <Sparkles className="w-4 h-4 text-blue-400" />
          </p>

          

          <div className="flex justify-center">
            <div className="relative group">
              {/* Orbit ring on hover */}
              <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full border border-dashed border-blue-200/50 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300" style={{ animationDuration: '10s' }} />
              
              <button className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-300/50 flex items-center justify-center hover:shadow-blue-400/60 hover:scale-110 transition-all duration-200 active:scale-95">
                <Search size={24} className="text-white" />
              </button>
              
              {/* Small dot */}
              <div className="absolute -top-1 -right-1">
                <CircleDot className="w-2 h-2 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Footer text */}
          <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
            <Compass className="w-3 h-3" />
            Start exploring with futurDooM
            <Sparkles className="w-3 h-3 text-blue-400" />
          </p>
        </div>

      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </div>
  );
}