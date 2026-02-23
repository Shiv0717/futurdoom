"use client";
import Link from "next/link";
import {
  User,
  Home,
  BookOpen,
  Bell,
  LogOut,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Users, label: "Search", href: "/search" },
    { icon: Bell, label: "Notifications", href: "/notification" },
    { icon: MessageSquare, label: "Chat", href: "/chat" },
    { icon: BookOpen, label: "Learn", href: "/learn" },
   
   
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-lg shadow-blue-100/30 sticky top-0 z-50">
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
            <img 
              src="https://futurdoom.com/assets/gemini242-B2wd8wXY.png" 
              alt="futurdoom" 
              className="w-6 h-6 object-contain brightness-0 invert"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gray-800">futur</span>
              <span className="text-blue-600">doom</span>
            </span>
            <span className="text-[8px] text-gray-400 -mt-1">AI assistant</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center px-3 py-1.5 rounded-xl text-gray-400 hover:text-gray-600 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <Link
          href="/logout"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all duration-200"
        >
          <LogOut size={16} />
          <span className="text-sm font-medium hidden sm:inline">Logout</span>
        </Link>
      </div>
    </header>
  );
}