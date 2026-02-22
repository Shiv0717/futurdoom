import Link from "next/link";
import { Info, ArrowRight, Mail, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f4ff] flex items-center justify-center p-6">
      
      {/* Single Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-200/50 border border-blue-50 w-full max-w-md overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-gradient-to-br from-[#0f1f6e] via-[#1a3aad] to-[#2563eb] p-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-1/2 w-24 h-24 rounded-full bg-blue-400/10" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-[2px] bg-blue-300" />
              <span className="text-blue-200 text-xs tracking-[0.2em] uppercase font-medium">Est. 2025</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              futur<span className="text-blue-300">doom</span>
            </h1>
            <p className="text-blue-100/70 text-sm mt-2 leading-relaxed">
              Your gateway to amazing possibilities.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs font-semibold text-blue-500 tracking-[0.2em] uppercase mb-1">Get Started</p>

          <Link href="/about"
            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-200">
                <Info size={16} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">About Us</p>
                <p className="text-xs text-slate-400">Learn about our story</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>

          <Link href="/home"
            className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#1a3aad] to-[#2563eb] shadow-md shadow-blue-300/30 hover:shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Let's Go</p>
                <p className="text-xs text-blue-200">Start your journey</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-white group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>

          <Link href="/contact"
            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-200">
                <Mail size={16} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Contact Us</p>
                <p className="text-xs text-slate-400">Get in touch</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        </div>

        <div className="px-6 pb-6">
          <p className="text-xs text-slate-300 text-center">© 2025 futurdoom · All rights reserved</p>
        </div>
      </div>
    </div>
  );
}