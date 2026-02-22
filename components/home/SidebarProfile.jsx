"use client";

import {
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Sparkles,
  CircleDot,
  Dot,
  MessageCircle,
  Users,
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

export default function SidebarProfile() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      hoverColor: "hover:text-gray-700",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:shiv@example.com",
      label: "Email",
      hoverColor: "hover:text-red-400",
    },
  ];

  const interestButtons = [
    { icon: Heart, label: "Interested", color: "blue" },
    { icon: Sparkles, label: "Interesting", color: "pink" },
  ];

  return (
    <div className=" mt-4  bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl overflow-hidden shadow-xl shadow-blue-100/30 sticky top-6 w-64">
      {/* Decorative background blobs - enhanced */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 blur-3xl pointer-events-none" />

      {/* Floating dots with Lucide icons - enhanced */}
      <div className="absolute top-3 right-4 z-10">
        <CircleDot className="w-2 h-2 text-blue-300 opacity-60 animate-pulse" />
      </div>
      <div className="absolute top-16 right-3 z-10">
        <Dot className="w-1.5 h-1.5 text-blue-400 opacity-50 animate-pulse delay-100" />
      </div>
      <div className="absolute bottom-12 left-3 z-10">
        <CircleDot className="w-2 h-2 text-indigo-300 opacity-50 animate-pulse delay-200" />
      </div>
      <div className="absolute top-8 left-6 z-10">
        <Dot className="w-1 h-1 text-blue-300 opacity-40 animate-pulse delay-150" />
      </div>
      <div className="absolute bottom-20 right-6 z-10">
        <CircleDot className="w-1.5 h-1.5 text-blue-400 opacity-40 animate-pulse delay-75" />
      </div>

      {/* Cover gradient - matching futurDooM gradient */}
      <div className="h-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 relative">
        {/* Wave lines overlay - enhanced */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g
            opacity="0.25"
            stroke="url(#waveGrad)"
            strokeWidth="1.2"
            fill="none"
          >
            <path d="M -10 25 Q 30 5 70 25 Q 110 45 150 25 Q 190 5 230 25 Q 270 45 310 25" />
            <path d="M -10 45 Q 30 25 70 45 Q 110 65 150 45 Q 190 25 230 45 Q 270 65 310 45" />
            <path d="M -10 65 Q 30 45 70 65 Q 110 85 150 65 Q 190 45 230 65 Q 270 85 310 65" />
          </g>
          {/* Additional dotted lines */}
          <g
            opacity="0.15"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          >
            <path d="M -10 35 Q 30 15 70 35 Q 110 55 150 35 Q 190 15 230 35 Q 270 55 310 35" />
          </g>
        </svg>

        {/* futurDooM watermark with enhanced styling */}
        
      </div>

      {/* Profile image - positioned to overlay the cover and content area */}
      <div className="relative flex justify-center -mt-10 z-30">
        <div className="relative">
          {/* Orbit ring with animation */}
          <div className="absolute inset-0 w-[92px] h-[92px] -m-1.5 rounded-full">
            <div
              className="absolute inset-0 rounded-full border border-dashed border-blue-200/70 animate-spin-slow"
              style={{ animationDuration: "20s" }}
            />
            <div className="absolute inset-0 rounded-full border border-blue-100/30 scale-110" />
          </div>
          {/* Small orbiting dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1">
            <CircleDot className="w-1.5 h-1.5 text-blue-300" />
          </div>
          <div className="absolute bottom-0 right-0 -mb-1 -mr-1">
            <Dot className="w-1 h-1 text-blue-400" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-2 border-white ring-4 ring-blue-100/50 object-cover shadow-xl shadow-blue-200/40"
          />
          {/* Online dot with pulse animation */}
          <div className="absolute bottom-1 right-1">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-6 px-5 pb-5 text-center">
        {/* Name with sparkle */}
        <h2 className="font-semibold text-gray-800 text-base tracking-tight flex items-center justify-center gap-1">
          Shiv Kumar
          <Sparkles className="w-3 h-3 text-blue-400" />
        </h2>

        {/* Divider line with dots - matching chat design */}
        <div className="flex items-center gap-2 mt-3 justify-center">
          <div className="w-6 h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-300" />
          <div className="flex gap-1">
            <Dot className="w-1 h-1 text-blue-300" />
            <CircleDot className="w-1.5 h-1.5 text-blue-400" />
            <Dot className="w-1 h-1 text-blue-300" />
          </div>
          <div className="w-6 h-px bg-gradient-to-l from-transparent via-blue-200 to-blue-300" />
        </div>

        {/* Location with enhanced styling */}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-gray-400 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-50 w-fit mx-auto">
          <MapPin size={11} className="text-blue-400" />
          <span>San Francisco, CA</span>
          <CircleDot className="w-1 h-1 text-blue-300" />
        </div>

        {/* Social Icons with enhanced styling */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl text-gray-400 ${social.hoverColor} hover:bg-white/80 hover:shadow-sm hover:shadow-blue-100/50 transition-all duration-200 backdrop-blur-sm border border-transparent hover:border-blue-100`}
                aria-label={social.label}
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        {/* Interest Buttons with enhanced styling */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {interestButtons.map((button, index) => {
            const Icon = button.icon;
            const isBlue = button.color === "blue";
            return (
              <button
                key={index}
                className={`flex items-center justify-center gap-1.5 text-[11px] font-medium py-2.5 rounded-2xl border transition-all duration-200 active:scale-95 backdrop-blur-sm ${
                  isBlue
                    ? "border-blue-200/80 text-blue-600 hover:bg-blue-50/80 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 bg-white/30"
                    : "border-pink-200/80 text-pink-500 hover:bg-pink-50/80 hover:border-pink-300 hover:shadow-md hover:shadow-pink-100/50 bg-white/30"
                }`}
              >
                <Icon
                  size={12}
                  className={isBlue ? "text-blue-400" : "text-pink-400"}
                />
                <span>{button.label}</span>
              </button>
            );
          })}
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
