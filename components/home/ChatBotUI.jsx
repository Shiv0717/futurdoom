"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

export default function ChatBotUI() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "This is a demo response. In a real implementation, this would connect to your actual API." 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border border-gray-200 h-[calc(100vh-6rem)] flex flex-col">
      
      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-400 rounded-lg flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">Chat Assistant</h2>
            <p className="text-xs text-gray-400">v4.0 • 8k context</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Sparkles size={14} className="text-blue-500" />
          <span>Pro</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-xl ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "user" 
                  ? "bg-blue-100" 
                  : "bg-white border border-gray-200"
              }`}>
                {msg.role === "user" 
                  ? <User size={14} className="text-blue-600" />
                  : <Bot size={14} className="text-blue-600" />
                }
              </div>
              
              {/* Message */}
              <div>
                <div className={`px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-2xl rounded-tr-none"
                    : "bg-white border border-gray-200 text-gray-700 rounded-2xl rounded-tl-none"
                }`}>
                  {msg.content}
                </div>
                
                {/* Message actions (only for assistant) */}
                {msg.role === "assistant" && index > 0 && (
                  <div className="flex items-center gap-2 mt-1 ml-1">
                    <button className="text-gray-300 hover:text-gray-400 transition-colors">
                      <Copy size={12} />
                    </button>
                    <button className="text-gray-300 hover:text-green-500 transition-colors">
                      <ThumbsUp size={12} />
                    </button>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <ThumbsDown size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <Bot size={14} className="text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-5 py-3">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything..."
            className="flex-1 border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`flex items-center gap-2 px-5 py-2.5  text-sm font-medium transition-colors ${
              input.trim() 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send size={16} />
            <span>Send</span>
          </button>
        </div>
       
      </div>
    </div>
  );
}