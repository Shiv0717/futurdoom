import Image from "next/image";
import {
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

export default function SidebarProfile() {
  // Social links array
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", hoverColor: "hover:text-gray-700" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:text-blue-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", hoverColor: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:shiv@example.com", label: "Email", hoverColor: "hover:text-red-400" },
  ];

  // Interest buttons array
  const interestButtons = [
    { icon: Heart, label: "Interested", color: "blue", iconColor: "text-blue-500", hoverColor: "hover:bg-blue-50" },
    { icon: Sparkles, label: "Interesting", color: "pink", iconColor: "text-pink-500", hoverColor: "hover:bg-pink-50" },
  ];

  return (
    <div className="bg-white border border-gray-200 overflow-hidden sticky top-18">
      {/* Cover with gradient */}
      <div className="h-20 bg-gradient-to-r from-blue-600 to-pink-400 relative">
        {/* Profile image positioned at bottom of cover */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full border-3 border-white ring-2 ring-blue-100 object-cover"
            />
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-12 px-4 pb-4 text-center">
        <h2 className="font-semibold text-gray-800 text-lg">Shiv Kumar</h2>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-400">
          <MapPin size={12} />
          <span>San Francisco, CA</span>
        </div>

        {/* Social Icons - Mapped from array */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.hoverColor} transition-colors`}
                aria-label={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Interest Buttons - Mapped from array */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {interestButtons.map((button, index) => {
            const Icon = button.icon;
            const isBlue = button.color === "blue";
            
            return (
              <button
                key={index}
                className={`flex items-center justify-center gap-1.5 text-xs border py-1.5  transition-colors ${
                  isBlue 
                    ? "border-blue-200 text-blue-600 hover:bg-blue-50" 
                    : "border-pink-200 text-pink-600 hover:bg-pink-50"
                }`}
              >
                <Icon size={14} className={isBlue ? "text-blue-500" : "text-pink-500"} />
                <span>{button.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}