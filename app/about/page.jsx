"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Home, User, BookOpen, Bell } from "lucide-react";

export default function AboutShow() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 relative overflow-hidden">

      {/* Background Radial Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>

    
      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* ===== LEFT CARD ===== */}
          <div className="bg-blue-500/70 backdrop-blur-xl text-white p-10 rounded-3xl shadow-2xl">
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                🕊️
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <Facebook className="cursor-pointer hover:scale-110 transition" />
              <Instagram className="cursor-pointer hover:scale-110 transition" />
              <Twitter className="cursor-pointer hover:scale-110 transition" />
              <Linkedin className="cursor-pointer hover:scale-110 transition" />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Welcome to futur<span className="font-bold">DooM</span>
            </h2>

            <p className="text-center text-sm leading-relaxed text-white/90">
              futurDooM – A platform where emotions meet AI. Now, people can 
              express their feelings through AI and share their experiences 
              with AI openly. Join us and let your emotions flow with AI.
            </p>
          </div>

          {/* ===== CENTER QUOTE CARD ===== */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-[url('/grass-bg.jpg')] bg-cover bg-center p-10 text-white">
              <p className="italic text-lg">To,</p>
              <p className="mt-6 text-xl font-medium">
                For those we never met!
              </p>
              <p className="mt-6 text-right font-semibold">
                – futur<span className="font-bold">DooM</span>
              </p>
            </div>
          </div>

          {/* ===== RIGHT PROFILE CARD ===== */}
          <div className="flex flex-col items-center text-white">
            
            <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-xl">
              <Image
                src="/founder.jpg"  // add your image in public folder
                alt="Founder"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Dipankar Porey</h3>

            <div className="bg-blue-400/40 backdrop-blur-md mt-4 px-6 py-4 rounded-2xl shadow-xl text-center">
              <p className="mb-3 text-sm">The Founder</p>

              <div className="flex justify-center gap-4">
                <Facebook size={18} />
                <Instagram size={18} />
                <Twitter size={18} />
                <Linkedin size={18} />
              </div>
            </div>
          </div>

        </div>
      </main>

     
    </div>
  );
}