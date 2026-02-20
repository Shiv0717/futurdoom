import Image from "next/image";
import Link from "next/link";
import { Info, ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className=" grid lg:grid-cols-2">

      {/* LEFT SIDE — HERO IMAGE */}
      <div className="relative h-[400px] lg:h-screen">
       

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-pink-900/80 flex items-end p-8 lg:p-16">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
              welcome to{" "}
              <span className="text-blue-300">futur</span>
              <span className="text-pink-300">doom</span>
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              Your gateway to amazing possibilities. Start exploring now.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — ACTION CARDS */}
      <div className="flex flex-col justify-center gap-4 p-8 lg:p-16 bg-white">
        
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">get started</span>
        </div>

        {/* About Card */}
        <Link 
          href="/about" 
          className="group flex items-center justify-between p-5 border border-gray-200 hover:border-blue-500 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Info size={18} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">About Us</h3>
              <p className="text-sm text-gray-400">Learn about our story</p>
            </div>
          </div>
          <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Let's Go Card */}
        <Link 
          href="/home" 
          className="group flex items-center justify-between p-5 border border-gray-200 hover:border-pink-500 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-500 flex items-center justify-center">
              <ArrowRight size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Let's Go</h3>
              <p className="text-sm text-gray-400">Start your journey</p>
            </div>
          </div>
          <ArrowRight size={18} className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Contact Card */}
        <Link 
          href="/contact" 
          className="group flex items-center justify-between p-5 border border-gray-200 hover:border-pink-500 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-pink-50 border border-pink-100 flex items-center justify-center">
              <Mail size={18} className="text-pink-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-400">Get in touch</p>
            </div>
          </div>
          <ArrowRight size={18} className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
        </Link>

        
      </div>
    </div>
  );
}