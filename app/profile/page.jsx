"use client";

import Link from "next/link";
import SidebarProfile from "@/components/home/SidebarProfile";
import { 
  ArrowRight, 
  User, 
  Info, 
  Shield, 
  Settings, 
  Heart, 
  Sparkles,
  Mail,
  MapPin,
  Globe
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff] p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        
        {/* Left Sidebar - Sticky */}
        <div className="w-64 flex-shrink-0">
          <SidebarProfile />
        </div>

        {/* Right Content - Settings Cards */}
        <div className="flex-1">
  {/* Header with sparkle and subtitle */}
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-1">
      <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      <Sparkles size={20} className="text-blue-400" />
    </div>
    <p className="text-sm text-gray-400">Manage your account preferences and privacy</p>
  </div>

  {/* Settings Stack - Single Column */}
  <div className="space-y-4">
    
    {/* Profile Information Card - Simplified */}
    <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Minimal Header */}
      <div className="px-5 py-4 border-b border-blue-100/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-md">
          <User size={16} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Profile Information</h3>
          <p className="text-xs text-gray-400">Manage your personal details</p>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-2">
        <SettingsItem href="/settings/profile" label="Edit Profile" />
        <SettingsItem href="/settings/credentials" label="User Credentials" />
      </div>
    </div>

    {/* About Us Card */}
    <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="px-5 py-4 border-b border-blue-100/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
          <Info size={16} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">About Us</h3>
          <p className="text-xs text-gray-400">Learn more about futurdoom</p>
        </div>
      </div>
      <div className="p-2">
        <SettingsItem href="/about" label="Visit Us" />
        <SettingsItem href="/contact" label="Contacts" />
      </div>
    </div>

    {/* Privacy Terms Card */}
    <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="px-5 py-4 border-b border-blue-100/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md">
          <Shield size={16} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Privacy Terms</h3>
          <p className="text-xs text-gray-400">Legal information and policies</p>
        </div>
      </div>
      <div className="p-2">
        <SettingsItem href="/disclaimer" label="Disclaimer" />
        <SettingsItem href="/privacy" label="Privacy Policy" />
        <SettingsItem href="/terms" label="Terms & Conditions" />
      </div>
    </div>

    {/* Account Management Card */}
    <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="px-5 py-4 border-b border-blue-100/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md">
          <Settings size={16} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Account Management</h3>
          <p className="text-xs text-gray-400">Manage your account settings</p>
        </div>
      </div>
      <div className="p-2">
        <SettingsItem href="/logout" label="Logout" className="text-rose-500 hover:bg-rose-50" />
        <SettingsItem href="/delete" label="Delete Account" className="text-rose-500 hover:bg-rose-50" />
      </div>
    </div>

    {/* Account Info Card - Compact */}
    <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <Globe size={12} className="text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 text-sm">Account Overview</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Email</span>
            <span className="text-gray-800 font-medium">shiv@futurdoom.com</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Location</span>
            <span className="text-gray-800 font-medium">San Francisco, CA</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Member since</span>
            <span className="text-gray-800 font-medium">Jan 2025</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-4 pt-3 border-t border-blue-100/50 flex gap-3">
          <div className="flex-1 bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white rounded-xl px-3 py-2 text-center">
            <div className="text-xs opacity-80">Interested</div>
            <div className="font-bold">124</div>
          </div>
          <div className="flex-1 border border-pink-200 text-pink-500 rounded-xl px-3 py-2 text-center">
            <div className="text-xs opacity-80">Interesting</div>
            <div className="font-bold">42</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <p className="text-center text-[10px] text-gray-300 mt-8">© 2025 futurdoom · All rights reserved</p>
</div>


      </div>
    </div>
  );
}

function SettingsItem({ href, label, className = "text-gray-600" }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group ${className}`}
    >
      <span className="text-sm">{label}</span>
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-gray-400" />
    </Link>
  );
}