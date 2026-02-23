"use client";

import {
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function SidebarProfile() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:shiv@example.com",
      label: "Email",
    },
  ];

  return (
    <div className="w-64 bg-white rounded-3xl shadow-xl shadow-blue-200/50 border border-blue-50 overflow-hidden sticky top-6">
      {/* Cover with gradient - matching futurdoom gradient */}
      <div className="h-20 bg-gradient-to-br from-[#0f1f6e] via-[#1a3aad] to-[#2563eb] relative">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        
        {/* futardoom watermark */}
        <div className="absolute bottom-2 right-3 text-white/20 text-xs font-bold tracking-wider">
          futurdoom
        </div>
      </div>

      {/* Profile Image - centered on cover */}
      <div className="relative flex justify-center -mt-10">
        <div className="relative">
          {/* Profile circle with white border */}
          <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white shadow-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 text-center">
        {/* Name with sparkle */}
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <h2 className="font-semibold text-gray-800 text-base">Shiv Kumar</h2>
          <Sparkles size={14} className="text-blue-400" />
        </div>

       

       

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-200"
                aria-label={social.label}
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        {/* Interest Buttons - matching chatbot's single button style but smaller */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white text-sm font-medium shadow-md shadow-blue-300/30 hover:shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-2">
              <Heart size={14} />
              <span>Interested</span>
            </div>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">124</span>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-pink-200 text-pink-500 text-sm font-medium hover:bg-pink-50 hover:border-pink-300 hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-2">
              <Sparkles size={14} />
              <span>Interesting</span>
            </div>
            <span className="text-xs bg-pink-50 text-pink-400 px-2 py-0.5 rounded-full">42</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-gray-300 mt-4">© 2025 futurdoom</p>
      </div>
    </div>
  );
}