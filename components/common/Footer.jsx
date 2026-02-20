"use client";

import Link from "next/link";
import { 
  Github, Twitter, Linkedin, Mail, Heart,
  Globe, BookOpen, MessageSquare, Shield, HelpCircle
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Home", href: "/" },
      { label: "Search", href: "/search" },
      { label: "Watch Me", href: "/watch" },
      { label: "Notifications", href: "/notifications" },
    ],
    community: [
      { label: "Discussion Group", href: "/discussions" },
      { label: "Contact Group", href: "/contacts" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
    ],
    support: [
      { label: "Help Center", href: "/help", icon: HelpCircle },
      { label: "Privacy Policy", href: "/privacy", icon: Shield },
      { label: "Terms of Service", href: "/terms", icon: BookOpen },
      { label: "Contact Us", href: "/contact", icon: Mail },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold">
  <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
    FUTURDOOM
  </span>
</Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connecting LLM engineers and researchers to build the future of artificial intelligence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors group"
                    >
                      {Icon && <Icon size={14} className="text-gray-400 group-hover:text-blue-600" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe size={14} />
              <span>English (English)</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-blue-600 transition-colors">
                Cookies
              </Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-blue-600 transition-colors">
                Accessibility
              </Link>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400">
              
              <Heart size={12} className="text-red-400 mx-1" />
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}