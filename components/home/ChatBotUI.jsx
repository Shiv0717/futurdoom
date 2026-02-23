"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Globe,
  Code,
  Image as ImageIcon,
  Paperclip,
  Mic,
  MoreVertical,
  ChevronDown
} from "lucide-react";

export default function FuturDoomChat() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm futurDooM AI, your intelligent assistant. I can help you with coding, answer questions, analyze documents, and much more. How can I assist you today? 🚀",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      role: "user", 
      content: "Can you help me write a React component?",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      role: "assistant",
      content: "Of course! I'd be happy to help you create a React component. What kind of component are you looking to build? For example:\n\n- A responsive navbar\n- A data table with sorting\n- A form with validation\n- A chat interface\n\nJust let me know your requirements and I'll provide you with clean, production-ready code!",
      timestamp: "10:02 AM",
    },
    {
      id: 4,
      role: "user",
      content: "Show me a modern button component with Tailwind CSS",
      timestamp: "10:03 AM",
    },
    {
      id: 5,
      role: "assistant",
      content: "Here's a modern, customizable button component with Tailwind CSS:\n\n```jsx\ninterface ButtonProps {\n  variant?: 'primary' | 'secondary' | 'outline';\n  size?: 'sm' | 'md' | 'lg';\n  children: React.ReactNode;\n  onClick?: () => void;\n  disabled?: boolean;\n  fullWidth?: boolean;\n}\n\nexport default function Button({ \n  variant = 'primary', \n  size = 'md', \n  children, \n  onClick, \n  disabled = false,\n  fullWidth = false \n}) {\n  const baseStyles = \"rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2\";\n  \n  const variants = {\n    primary: \"bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0\",\n    secondary: \"bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200\",\n    outline: \"border-2 border-blue-600 text-blue-600 hover:bg-blue-50\"\n  };\n  \n  const sizes = {\n    sm: \"px-3 py-1.5 text-sm\",\n    md: \"px-5 py-2.5 text-base\",\n    lg: \"px-7 py-3.5 text-lg\"\n  };\n  \n  return (\n    <button\n      onClick={onClick}\n      disabled={disabled}\n      className={`\n        \${baseStyles}\n        \${variants[variant]}\n        \${sizes[size]}\n        \${fullWidth ? 'w-full' : ''}\n        \${disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : ''}\n      `}\n    >\n      {children}\n    </button>\n  );\n}\n```\n\nThis component is:\n- 🎨 **Fully customizable** with variants and sizes\n- ✨ **Smooth animations** on hover and click\n- 📱 **Responsive** and accessible\n\nWould you like me to add more features like icons or loading states?",
      timestamp: "10:04 AM",
    }
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const shouldAutoScroll = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!messagesContainerRef.current || !shouldAutoScroll.current) return;
    
    const container = messagesContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    
    const container = messagesContainerRef.current;
    const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 100;
    shouldAutoScroll.current = isAtBottom;
    setShowScrollButton(!isAtBottom);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    shouldAutoScroll.current = true;

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = {
        id: messages.length + 2,
        role: "assistant",
        content: "I'm processing your request. As an AI assistant, I can help with various tasks including coding, analysis, creative writing, and problem-solving. What specific assistance do you need? Feel free to ask me anything! 💡",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      shouldAutoScroll.current = true;
    }
  };

  const suggestedPrompts = [
    "Write a React hook",
    "Explain async/await",
    "Debug my code",
    "Create an API route",
    "Style with Tailwind",
    "Optimize performance"
  ];

  const containsCode = (content) => {
    return content.includes("```");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full  h-[85vh] bg-white rounded-3xl shadow-2xl shadow-blue-200/50 border border-blue-100 flex flex-col overflow-hidden">
        
        {/* Chat Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#0f1f6e] via-[#1a3aad] to-[#2563eb] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Bot size={28} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-white tracking-tight">
                    futur<span className="text-blue-200">doom</span> AI
                  </h1>
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] text-white border border-white/30">
                    v2.0
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-100">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>AI Assistant • 128k context</span>
                  <span className="w-1 h-1 rounded-full bg-blue-200" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <Globe size={18} />
              </button>
              <button className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <Code size={18} />
              </button>
              <button className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent relative"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 ${message.role === "assistant" ? "mt-1" : ""}`}>
                  {message.role === "assistant" ? (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-md">
                      <Bot size={16} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-md">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Message Content */}
                <div>
                  <div
                    className={`rounded-2xl p-4 shadow-sm ${
                      message.role === "assistant"
                        ? "bg-white border border-gray-200 text-gray-800"
                        : "bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white"
                    }`}
                  >
                    {containsCode(message.content) ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            <Code size={12} />
                            JavaScript/JSX
                          </span>
                          <button
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {copiedId === message.id ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                        </div>
                        <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                          <code>{message.content}</code>
                        </pre>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    )}
                    
                    <div className={`flex items-center justify-end gap-2 mt-2 text-xs ${
                      message.role === "assistant" ? "text-gray-400" : "text-blue-200"
                    }`}>
                      <span>{message.timestamp}</span>
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-1">
                          <button className="hover:text-blue-600 transition-colors">
                            <ThumbsUp size={10} />
                          </button>
                          <button className="hover:text-blue-600 transition-colors">
                            <ThumbsDown size={10} />
                          </button>
                          <button className="hover:text-blue-600 transition-colors">
                            <RefreshCw size={10} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Actions */}
                  {message.role === "assistant" && containsCode(message.content) && (
                    <div className="flex items-center gap-2 mt-2 ml-2">
                      <button 
                        onClick={() => copyToClipboard(message.content, message.id)}
                        className="text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        {copiedId === message.id ? (
                          <>
                            <Check size={10} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={10} />
                            Copy code
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0f1f6e] to-[#2563eb] flex items-center justify-center shadow-md">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-4">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scroll to bottom button */}
          {showScrollButton && (
            <button
              onClick={scrollToBottom}
              className="sticky bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-blue-200 shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:scale-110 mx-auto"
            >
              <ChevronDown size={18} />
            </button>
          )}
        </div>

        {/* Suggested Prompts */}
        <div className="flex-shrink-0 px-6 py-3 bg-white/50 border-t border-blue-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">Suggestions:</span>
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(prompt)}
                className="text-xs whitespace-nowrap px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors border border-blue-100"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 bg-white border-t border-blue-100 p-4">
          <form onSubmit={sendMessage} className="flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-200"
            >
              <Paperclip size={18} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-200"
            >
              <ImageIcon size={18} />
            </button>
            
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything... (e.g., Write code, Explain concepts, Analyze data)"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
            
            <button
              type="button"
              className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-200"
            >
              <Mic size={18} />
            </button>
            
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1a3aad] to-[#2563eb] flex items-center justify-center shadow-md shadow-blue-300/30 hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputMessage.trim()}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>

          {/* Model Info */}
          <div className="flex items-center justify-between mt-3 px-2">
            <div className="flex items-center gap-3 text-[10px] text-gray-400">
              <span>⚡ 0.3s response time</span>
              <span>🔒 End-to-end encrypted</span>
              <span>🎯 99.9% accuracy</span>
            </div>
            <span className="text-[10px] text-gray-300">futurdoom AI v2.0</span>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #93C5FD;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce {
          animation: bounce 0.8s infinite;
        }
      `}</style>
    </div>
  );
}