import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="py-16 bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Tagline */}
        <p className="text-blue-500 uppercase tracking-[0.2em] text-xs mb-6">
          futurdoom
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light text-gray-800 leading-tight mb-6">
          build the{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            future
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Hello <span className="text-gray-800">Shiv</span> — your journey
          starts here.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          <div className="border border-gray-200 p-6 text-left hover:border-blue-500 transition-colors group">
            <Sparkles
              size={20}
              className="text-gray-300 group-hover:text-blue-500 mb-3"
            />
            <h3 className="font-medium text-gray-800 mb-1">Discover</h3>
            <p className="text-xs text-gray-400">Explore new possibilities</p>
          </div>

          <div className="border border-gray-200 p-6 text-left hover:border-pink-500 transition-colors group">
            <Zap
              size={20}
              className="text-gray-300 group-hover:text-pink-500 mb-3"
            />
            <h3 className="font-medium text-gray-800 mb-1">Create</h3>
            <p className="text-xs text-gray-400">Build something amazing</p>
          </div>

          <div className="border border-gray-200 p-6 text-left hover:border-blue-500 transition-colors group">
            <Compass
              size={20}
              className="text-gray-300 group-hover:text-blue-500 mb-3"
            />
            <h3 className="font-medium text-gray-800 mb-1">Grow</h3>
            <p className="text-xs text-gray-400">Scale your impact</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/chat"
            className="px-6 py-3 bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            get started
          </Link>

          <Link
            href="/about"
            className="px-6 py-3 border border-gray-200 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-600 transition"
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
