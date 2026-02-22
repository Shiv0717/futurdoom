"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Settings, 
  Paperclip, 
  Send, 
  User, 
  Waves,
  Sparkles,
  HelpCircle,
  Compass,
  MessageCircle,
  Users,
  CircleDot,
  Dot
} from "lucide-react";

export default function FuturDoomChat() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to futurDooM Chat!", sender: "bot", time: "10:00 AM" },
    { id: 2, text: "Hey! How does this work?", sender: "user", time: "10:01 AM" },
    { id: 3, text: "Just type your message and explore the future of community!", sender: "bot", time: "10:01 AM" },
    // Adding more messages to demonstrate scrolling
    { id: 4, text: "This is a longer message to demonstrate how the chat handles multiple messages and scrolling behavior. The input area should stay at the bottom regardless of content.", sender: "user", time: "10:02 AM" },
    { id: 5, text: "Great question! The futurDooM platform is designed to handle all types of conversations, from short queries to long, detailed discussions about community building and artificial intelligence.", sender: "bot", time: "10:03 AM" },
    { id: 6, text: "Can you tell me more about the community features?", sender: "user", time: "10:04 AM" },
    { id: 7, text: "Absolutely! Our community features include real-time discussions, topic-based channels, private messaging, and collaborative spaces where members can share ideas and work together on projects. The intelligence layer helps connect people with similar interests and expertise.", sender: "bot", time: "10:05 AM" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const shouldAutoScroll = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to maintain position when new messages arrive
  useEffect(() => {
    if (!messagesContainerRef.current || !shouldAutoScroll.current) return;
    
    const container = messagesContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  // Detect if user has scrolled up
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    
    const container = messagesContainerRef.current;
    const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 100;
    shouldAutoScroll.current = isAtBottom;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! The futurDooM community is growing.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className=" flex items-center justify-center relative overflow-hiddenfont-sans">
      <div
        className={`relative w-full h-[85vh] bg-white/70 backdrop-blur-md rounded-3xl border border-blue-100 shadow-xl shadow-blue-100/40 flex flex-col transition-all duration-700 delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Decorative dots with Lucide */}
        <div className="absolute top-5 left-8">
          <Dot className="w-1.5 h-1.5 text-blue-300 opacity-60" />
        </div>
        <div className="absolute bottom-6 left-8">
          <Dot className="w-1.5 h-1.5 text-blue-200 opacity-50" />
        </div>
        <div className="absolute top-5 right-8">
          <Dot className="w-1.5 h-1.5 text-blue-200 opacity-50" />
        </div>

        {/* Chat Header - Fixed height, no shrinking */}
        <div className="flex-shrink-0 flex items-center gap-3 p-4 border-b border-blue-100">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 flex items-center gap-1">
              futurDooM Community
              <Sparkles className="w-3 h-3 text-blue-400" />
            </h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <CircleDot className="w-1.5 h-1.5 text-green-400 fill-green-400" />
              128 online now
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-blue-50 rounded-full transition-colors group">
              <Settings className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors" />
            </button>
          </div>
        </div>

        {/* Messages Area - Takes all remaining space, scrolls when needed */}
        <div 
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent min-h-0"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl rounded-tr-none"
                    : "bg-white border border-blue-100 text-gray-800 rounded-2xl rounded-tl-none"
                } p-3 shadow-sm`}
              >
                <p className="text-sm break-words">{message.text}</p>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    message.sender === "user" ? "text-blue-100" : "text-gray-400"
                  }`}
                >
                  {message.time}
                  {message.sender === "bot" && <Dot className="w-1 h-1" />}
                </p>
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center ml-2 flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        
        {/* Input Area - Fixed at bottom, no shrinking */}
        <form onSubmit={sendMessage} className="flex-shrink-0 p-4 pt-2 border-t border-blue-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 hover:bg-blue-50 rounded-full transition-colors group"
            >
              <Paperclip className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors" />
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-white/50 border border-blue-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 transition-all text-sm"
            />
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-300/50 flex items-center justify-center hover:shadow-blue-400/60 hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputMessage.trim()}
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>
      </div>

      

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #BFDBFE;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkitScrollbar-thumb:hover {
          background: #93C5FD;
        }
      `}</style>
    </div>
  );
}