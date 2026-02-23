"use client";

import { useState } from "react";
import Link from "next/link";
import SidebarProfile from "@/components/home/SidebarProfile";
import { 
  X, Bell, Heart, MessageCircle, UserPlus, 
  Star, Check, Clock, Settings, Sparkles,
  Filter, MoreHorizontal
} from "lucide-react";

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "comment",
      user: "Dipankar Porey",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "commented on your post",
      target: "Next.js Project",
      content: "“Ok good, give in nextjs”",
      time: "10 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "like",
      user: "Priya Sharma",
      userAvatar: "https://images.unsplash.com/photo-1494790108777-466fd069c499?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "liked your project",
      target: "AI Dashboard",
      content: "",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "follow",
      user: "Marcus Williams",
      userAvatar: "https://images.unsplash.com/photo-1519345184960-af0c8879c313?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "started following you",
      target: "",
      content: "",
      time: "yesterday",
      read: true,
    },
    {
      id: 4,
      type: "mention",
      user: "Sarah Johnson",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "mentioned you in",
      target: "design discussion",
      content: "“@shiv what do you think about this UI?”",
      time: "3 days ago",
      read: true,
    },
    {
      id: 5,
      type: "comment",
      user: "Alex Chen",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "replied to your comment",
      target: "in React discussion",
      content: "“Great point! I'll try that approach”",
      time: "5 hours ago",
      read: false,
    }
  ]);

  const filters = [
    { id: "all", label: "All", icon: Bell, count: notifications.length },
    { id: "unread", label: "Unread", icon: Clock, count: notifications.filter(n => !n.read).length },
    { id: "comments", label: "Comments", icon: MessageCircle, count: notifications.filter(n => n.type === "comment").length },
    { id: "likes", label: "Likes", icon: Heart, count: notifications.filter(n => n.type === "like").length },
    { id: "follows", label: "Follows", icon: UserPlus, count: notifications.filter(n => n.type === "follow").length },
  ];

  const getIcon = (type) => {
    switch(type) {
      case "comment": 
        return <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><MessageCircle size={12} className="text-blue-600" /></div>;
      case "like": 
        return <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center"><Heart size={12} className="text-pink-600" /></div>;
      case "follow": 
        return <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><UserPlus size={12} className="text-green-600" /></div>;
      case "mention": 
        return <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center"><Star size={12} className="text-purple-600" /></div>;
      default: 
        return <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"><Bell size={12} className="text-gray-600" /></div>;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !n.read;
    if (activeTab === "comments") return n.type === "comment";
    if (activeTab === "likes") return n.type === "like";
    if (activeTab === "follows") return n.type === "follow";
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#f0f4ff] p-6">
      <div className="max-w-6xl mx-auto flex gap-6">
        
        {/* Left Sidebar - Sticky */}
        <div className="w-64 flex-shrink-0">
          <SidebarProfile />
        </div>

        {/* Right Content - Notifications */}
        <div className="flex-1">
          
          {/* Header with sparkle */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-lg">
                  <Bell size={18} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                  <p className="text-xs text-gray-400">Stay updated with your activity</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    <Check size={12} />
                    <span>Mark all read</span>
                  </button>
                )}
                <Link 
                  href="/settings" 
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                >
                  <Settings size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeTab === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveTab(filter.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                      transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? "bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white shadow-md shadow-blue-300/30" 
                        : "bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50"
                      }
                    `}
                  >
                    <Icon size={14} />
                    <span>{filter.label}</span>
                    {filter.count > 0 && (
                      <span className={`
                        text-xs px-1.5 py-0.5 rounded-full
                        ${isActive 
                          ? "bg-white/20 text-white" 
                          : "bg-gray-100 text-gray-600"
                        }
                      `}>
                        {filter.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/40 border border-blue-50 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4">
                  <Bell size={24} className="text-gray-300" />
                </div>
                <h3 className="text-gray-800 font-medium mb-1">No notifications</h3>
                <p className="text-sm text-gray-400">You're all caught up!</p>
              </div>
            ) : (
              filteredNotifications.map((notif) => (
                <div 
                  key={notif.id}
                  className={`
                    bg-white rounded-2xl shadow-lg shadow-blue-200/40 border 
                    transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5
                    ${!notif.read 
                      ? 'border-blue-200 bg-gradient-to-r from-blue-50/50 to-white' 
                      : 'border-blue-50'
                    }
                  `}
                >
                  <div className="p-4">
                    <div className="flex gap-4">
                      {/* Avatar with type icon */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={notif.userAvatar}
                          alt={notif.user}
                          className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1">
                          {getIcon(notif.type)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold text-gray-800">
                                {notif.user}
                              </span>{" "}
                              {notif.action}{" "}
                              {notif.target && (
                                <span className="font-medium text-blue-600">
                                  {notif.target}
                                </span>
                              )}
                            </p>
                            
                            {notif.content && (
                              <p className="text-sm text-gray-500 mt-1 bg-gray-50 px-3 py-2 rounded-lg italic border-l-2 border-blue-200">
                                {notif.content}
                              </p>
                            )}
                            
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-400">
                                {notif.time}
                              </span>
                              {!notif.read && (
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-1">
                            {!notif.read && (
                              <button 
                                onClick={() => markAsRead(notif.id)}
                                className="w-7 h-7 rounded-lg hover:bg-green-50 flex items-center justify-center text-gray-300 hover:text-green-500 transition-all duration-200"
                                title="Mark as read"
                              >
                                <Check size={14} />
                              </button>
                            )}
                            <button 
                              onClick={() => deleteNotification(notif.id)}
                              className="w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all duration-200"
                              title="Delete"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with summary */}
          {filteredNotifications.length > 0 && (
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-gray-400">
                Showing {filteredNotifications.length} of {notifications.length} notifications
              </p>
              <div className="flex items-center gap-2">
                <button className="text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1">
                  <Filter size={12} />
                  <span>Filter</span>
                </button>
                <button className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}