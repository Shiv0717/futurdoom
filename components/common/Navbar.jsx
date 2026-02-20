"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Settings,
  LogOut,
  MessageCircle,
  Edit,
  Users,
  Search,
  Home,
  Eye,
  Bell,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Navigation links array with icons
  const navLinks = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/search", label: "Search", icon: Search },
    { href: "/watch", label: "Watch Me", icon: Eye },
  ];

  // Profile dropdown links array
  const profileLinks = [
    { href: "/profile", label: "My Profile", icon: User },
    { href: "/profile/edit", label: "Edit Profile", icon: Edit },
    { type: "divider" },
    { href: "/discussions", label: "Discussion Group", icon: MessageCircle },
    { href: "/contacts", label: "Contact Group", icon: Users },
    { type: "divider" },
    { href: "/settings", label: "Settings", icon: Settings },
    {
      type: "button",
      label: "Sign out",
      icon: LogOut,
      action: "logout",
      color: "red",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 h-14 flex items-center justify-between">
        {/* LEFT — LOGO with gradient */}
        <Link href="/" className="text-lg font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            FUTURDOOM
          </span>
        </Link>

        {/* RIGHT — Links and Profile together */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent font-medium"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Divider after links */}
          <div className="h-4 w-px bg-gray-200"></div>

          {/* Notification Icon - Link to page */}
          <Link
            href="/notification"
            className="relative p-1 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-[10px] flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 focus:outline-none transition-opacity group"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
                className="transition-all object-cover ring-2 ring-gray-200 group-hover:ring-blue-400"
              />
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-gray-700">Shiv Kumar</p>
                <p className="text-xs text-gray-400">shiv@example.com</p>
              </div>
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-sm py-1 z-50">
                {profileLinks.map((item, index) => {
                  if (item.type === "divider") {
                    return (
                      <div
                        key={`divider-${index}`}
                        className="border-t border-gray-50 my-1"
                      ></div>
                    );
                  }

                  if (item.type === "button") {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={handleLogout}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                          item.color === "red"
                            ? "text-gray-400 hover:text-red-400"
                            : "text-gray-600 hover:text-blue-500"
                        } hover:bg-gray-50 transition-colors`}
                      >
                        <Icon size={16} className="text-gray-400" />
                        {item.label}
                      </button>
                    );
                  }

                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <Icon size={16} className="text-gray-400" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}