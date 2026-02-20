import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Search } from "lucide-react";

export default function AboutPage() {
  const founder = {
    name: "Alex Chen",
    bio: "Designer & builder. Previously started two companies. Loves coffee and clean code.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "build things that matter.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
     
      {/* Founder Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="border border-gray-200 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <img
                src={founder.avatar}
                alt={founder.name}
                className="w-full h-full object-cover border border-gray-200"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-light text-gray-800 mb-3">{founder.name}</h2>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{founder.bio}</p>
              <p className="text-sm text-gray-400 italic mb-5">"{founder.quote}"</p>
              
              {/* Social Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={founder.social.twitter} className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href={founder.social.linkedin} className="text-gray-300 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={founder.social.github} className="text-gray-300 hover:text-gray-700 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}