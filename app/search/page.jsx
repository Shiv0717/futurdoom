"use client";

import { useState } from "react";
import Link from "next/link";
import SidebarProfile from "@/components/home/SidebarProfile";
import { 
  Search, 
  MapPin, 
  UserPlus, 
  Users, 
  Sparkles,
  Heart,
  Filter,
  Globe,
  Star
} from "lucide-react";

export default function SearchPeoplePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const suggestedUsers = [
    {
      id: 1,
      name: "Dipankar Porey",
      location: "Kolkata, India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 12,
      interests: ["React", "Next.js", "UI/UX"],
      isOnline: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "https://images.unsplash.com/photo-1494790108777-466fd069c499?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 8,
      interests: ["Design", "Figma", "Animation"],
      isOnline: false
    },
    {
      id: 3,
      name: "Alex Chen",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 5,
      interests: ["AI", "Machine Learning", "Python"],
      isOnline: true
    },
    {
      id: 4,
      name: "Sarah Johnson",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 3,
      interests: ["Product", "Strategy", "Growth"],
      isOnline: false
    }
  ];

  const filters = [
    { id: "all", label: "All", icon: Users },
    { id: "online", label: "Online", icon: Globe },
    { id: "mutual", label: "Mutual Friends", icon: Heart },
    { id: "popular", label: "Popular", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4ff] p-6">
      <div className="max-w-6xl mx-auto flex gap-6">
        
        {/* Left Sidebar - Sticky */}
        <div className="w-64 flex-shrink-0">
          <SidebarProfile />
        </div>

        {/* Right Content - Search People */}
        <div className="flex-1">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-lg">
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Search People</h1>
                  <p className="text-xs text-gray-400">Find and connect with amazing people</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-200">
                  <Filter size={12} />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 p-6 mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, location, or interests..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
            </div>

           
            
          </div>

        

          {/* People List */}
          <div className="space-y-3">
            {suggestedUsers.map((user) => (
              <div 
                key={user.id}
                className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar with online indicator */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-md"
                      />
                      {user.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white" />
                      )}
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800">{user.name}</h3>
                        {user.isOnline && (
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                            Online
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <MapPin size={10} className="text-blue-400" />
                        <span>{user.location}</span>
                      </div>

                      {/* Interests */}
                      

                     
                    </div>

                    {/* Action Button */}
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white text-sm font-medium shadow-md shadow-blue-300/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                      <UserPlus size={14} />
                      <span>Connect</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-6 text-center">
            <button className="px-6 py-2 rounded-xl bg-white border border-gray-200 text-gray-500 text-sm font-medium hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200">
              Load More People
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-[10px] text-gray-300 mt-8">© 2025 futurdoom · All rights reserved</p>
        </div>
      </div>
    </div>
  );
}