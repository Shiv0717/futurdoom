"use client";

import Link from "next/link";
import { MessageSquare, ArrowRight, Bot } from "lucide-react";

export default function ChatbotMain() {
  return (
    <div className="min-h-screen bg-[#f0f4ff] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Soft background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Main Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-white/50">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-[#0f1f6e] via-[#1a3aad] to-[#2563eb] px-8 pt-10 pb-12 relative">
          {/* Abstract decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
          
          {/* Profile Section */}
          <div className="relative flex flex-col items-center">
            {/* Avatar with online indicator */}
            <div className="relative mb-5">
              <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl shadow-inner">
                  <img src="https://futurdoom.com/assets/gemini242-B2wd8wXY.png"></img>
                </div>
              </div>
              <div className="absolute -bottom-1 right-0 bg-white rounded-full px-2 py-0.5 shadow-lg flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-green-600">ONLINE</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
              futur<span className="text-blue-300">doom</span>
            </h1>

            {/* Welcome Message */}
            <p className="text-blue-100 text-center">
              Hello <span className="font-semibold text-white">Shiv</span>, nice to meet you!
            </p>
          </div>
        </div>

        {/* Body Section - Single CTA */}
        <div className="p-8 bg-white">
          <Link
            href="/chat"
            className="group block w-full bg-gradient-to-r from-[#1a3aad] to-[#2563eb] hover:from-[#0f1f6e] hover:to-[#1a3aad] rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Start Chatting</p>
                  <p className="text-blue-200 text-sm">Begin your conversation now</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </div>
          </Link>

          {/* Subtle footer */}
          <p className="text-center text-xs text-slate-400 mt-6">
            © 2025 futurdoom · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}