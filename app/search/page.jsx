"use client";

import { useState } from "react";
import { Search, X, MapPin, Briefcase, Users, UserPlus, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SearchPeoplePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample people data
  const people = [
    {
      id: 1,
      name: "Alex Chen",
      role: "AI Research Engineer",
      company: "Google AI",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 345,
      skills: ["LLM", "PyTorch", "Transformers"],
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "ML Product Manager",
      company: "OpenAI",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1494790108777-466fd069c499?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 892,
      skills: ["Product Strategy", "LLM", "Team Leadership"],
      verified: true
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "NLP Researcher",
      company: "Stanford University",
      location: "Palo Alto, CA",
      avatar: "https://images.unsplash.com/photo-1519345184960-af0c8879c313?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 567,
      skills: ["NLP", "Research", "Python"],
      verified: false
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "AI Ethics Lead",
      company: "Anthropic",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 723,
      skills: ["AI Ethics", "Policy", "Research"],
      verified: true
    },
    {
      id: 5,
      name: "David Kim",
      role: "Software Engineer",
      company: "Meta AI",
      location: "Menlo Park, CA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 234,
      skills: ["Backend", "Python", "MLOps"],
      verified: false
    },
    {
      id: 6,
      name: "Elena Rodriguez",
      role: "Data Scientist",
      company: "Microsoft Research",
      location: "Redmond, WA",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      connections: 456,
      skills: ["Data Science", "ML", "Statistics"],
      verified: true
    }
  ];

  const recentSearches = [
    "alex chen",
    "product managers",
    "nlp researchers",
    "san francisco"
  ];

  const suggestions = [
    { label: "AI Researchers", count: 234 },
    { label: "Product Managers", count: 156 },
    { label: "Engineers", count: 423 },
    { label: "San Francisco", count: 89 }
  ];

  const filteredPeople = people.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-light text-gray-800 mb-1">
            search <span className="font-bold text-blue-600">people</span>
          </h1>
          <p className="text-xs text-gray-400">
            find researchers, engineers, and thinkers
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search by name, role, company, location, or skills..."
              className="w-full pl-9 pr-8 py-2.5 border border-gray-200 focus:border-blue-500 outline-none transition-colors text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-400"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-6 mb-6 pb-4 border-b border-gray-100">
          <button
            onClick={() => setActiveFilter("all")}
            className={`text-xs uppercase tracking-wider ${
              activeFilter === "all" 
                ? "text-blue-600 font-medium" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            all
          </button>
          <button
            onClick={() => setActiveFilter("researchers")}
            className={`text-xs uppercase tracking-wider ${
              activeFilter === "researchers" 
                ? "text-blue-600 font-medium" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            researchers
          </button>
          <button
            onClick={() => setActiveFilter("engineers")}
            className={`text-xs uppercase tracking-wider ${
              activeFilter === "engineers" 
                ? "text-blue-600 font-medium" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            engineers
          </button>
          <button
            onClick={() => setActiveFilter("product")}
            className={`text-xs uppercase tracking-wider ${
              activeFilter === "product" 
                ? "text-blue-600 font-medium" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            product
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - Suggestions */}
          <div className="lg:col-span-1">
            {!searchQuery && (
              <>
                <div className="mb-5">
                  <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                    recent searches
                  </h2>
                  <div className="space-y-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                    suggestions
                  </h2>
                  <div className="space-y-2">
                    {suggestions.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => setSearchQuery(item.label)}
                        className="flex items-center justify-between w-full text-xs text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-gray-300">{item.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side - People Results */}
          <div className="lg:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-gray-400">
                {filteredPeople.length} {filteredPeople.length === 1 ? 'person' : 'people'} found
              </p>
              <select className="text-xs border border-gray-200 px-2 py-1 outline-none focus:border-blue-500">
                <option>most relevant</option>
                <option>most connected</option>
                <option>newest</option>
              </select>
            </div>

            <div className="space-y-3">
              {filteredPeople.map((person) => (
                <div 
                  key={person.id}
                  className="border border-gray-200 p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <img
                      src={person.avatar}
                      alt={person.name}
                      width={56}
                      height={56}
                      className="border border-gray-200 object-cover"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-800">{person.name}</h3>
                        {person.verified && (
                          <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5">✓ verified</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{person.role} · {person.company}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {person.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={11} />
                          {person.connections} connections
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        {person.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="text-[10px] bg-gray-50 border border-gray-200 px-2 py-0.5 text-gray-500"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <button className="flex items-center gap-1.5 text-xs border border-blue-600 text-blue-600 px-3 py-1.5 hover:bg-blue-50 transition-colors">
                        <UserPlus size={12} />
                        <span>connect</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs border border-gray-200 text-gray-500 px-3 py-1.5 hover:border-pink-500 hover:text-pink-500 transition-colors">
                        <MessageCircle size={12} />
                        <span>message</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search Tips */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <p className="text-[10px] text-gray-300 flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            search by name, role, company, location, or skills
          </p>
        </div>

      </div>
    </div>
  );
}