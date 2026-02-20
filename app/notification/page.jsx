"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, Bell, Heart, MessageCircle, UserPlus, 
  Star, Check, Clock, Settings 
} from "lucide-react";

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "comment",
      user: "Dipankar Porey",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "commented on",
      target: "Shiv Kumar's post",
      content: "“Ok good, give in nextjs”",
      time: "10 hours ago",
      read: false,
      color: "blue"
    },
    {
      id: 2,
      type: "like",
      user: "Priya Sharma",
      userAvatar: "https://images.unsplash.com/photo-1494790108777-466fd069c499?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "liked your",
      target: "project update",
      content: "",
      time: "2 hours ago",
      read: false,
      color: "pink"
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
      color: "blue"
    },
    {
      id: 4,
      type: "mention",
      user: "Sarah Johnson",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      action: "mentioned you in",
      target: "discussion group",
      content: "“@shiv what do you think about this?”",
      time: "3 days ago",
      read: true,
      color: "pink"
    }
  ]);

  const filters = [
    { id: "all", label: "All", icon: Bell },
    { id: "unread", label: "Unread", icon: Clock },
    { id: "comments", label: "Comments", icon: MessageCircle },
    { id: "likes", label: "Likes", icon: Heart },
    { id: "follows", label: "Follows", icon: UserPlus },
  ];

  const getIcon = (type) => {
    switch(type) {
      case "comment": return <MessageCircle size={14} className="text-blue-500" />;
      case "like": return <Heart size={14} className="text-pink-500" />;
      case "follow": return <UserPlus size={14} className="text-green-500" />;
      case "mention": return <Star size={14} className="text-purple-500" />;
      default: return <Bell size={14} className="text-gray-500" />;
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

  return (
    <div className="min-h-screen bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-blue-500" />
            <h1 className="text-2xl font-light text-gray-800">
              notifications
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={markAllAsRead}
              className="text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Check size={14} />
              <span>mark all read</span>
            </button>
            <Link href="/settings" className="text-gray-300 hover:text-gray-400">
              <Settings size={16} />
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeTab === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveTab(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  isActive 
                    ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white" 
                    : "text-gray-500 hover:text-blue-600 border border-gray-200 hover:border-blue-500"
                }`}
              >
                <Icon size={14} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12 border border-gray-100">
              <Bell size={32} className="text-gray-200 mx-auto mb-3" />
              <p className="text-sm text-gray-300">no notifications</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div 
                key={notif.id}
                className={`border p-4 transition-colors hover:border-blue-500 ${
                  !notif.read ? 'bg-blue-50/30 border-blue-200' : 'border-gray-200'
                }`}
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={notif.userAvatar}
                      alt={notif.user}
                      width={48}
                      height={48}
                      className="object-cover border border-gray-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      {getIcon(notif.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className={`font-medium text-${notif.color}-600`}>
                        {notif.user}
                      </span>{" "}
                      {notif.action}{" "}
                      {notif.target && (
                        <span className="font-medium text-gray-800">
                          {notif.target}
                        </span>
                      )}
                    </p>
                    
                    {notif.content && (
                      <p className="text-sm text-gray-500 mt-1 italic">
                        {notif.content}
                      </p>
                    )}
                    
                    <p className="text-xs text-gray-400 mt-2">
                      {notif.time}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-start gap-2">
                    {!notif.read && (
                      <button 
                        onClick={() => markAsRead(notif.id)}
                        className="text-gray-300 hover:text-green-500 transition-colors"
                        title="Mark as read"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotification(notif.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[10px] text-gray-200">
            {notifications.filter(n => !n.read).length} unread notifications
          </p>
        </div>
      </div>
    </div>
  );
}