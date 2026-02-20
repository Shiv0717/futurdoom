"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "hello@futurdoom.com",
      link: "mailto:hello@futurdoom.com",
      color: "blue",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "pink",
    },
    {
      icon: MapPin,
      label: "OFFICE",
      value: "San Francisco, CA",
      link: "#",
      color: "blue",
    },
    {
      icon: Clock,
      label: "HOURS",
      value: "Mon-Fri 9am-6pm PST",
      link: "#",
      color: "pink",
    },
  ];

  const faqs = [
    {
      q: "HOW QUICKLY DO YOU RESPOND?",
      a: "We typically respond within 24 hours during business days.",
    },
    {
      q: "DO YOU OFFER SUPPORT PLANS?",
      a: "Yes, we have various support plans for teams and enterprises.",
    },
    {
      q: "CAN I SCHEDULE A DEMO?",
      a: "Absolutely! Reach out and we'll set up a personalized demo.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Heading */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-2xl font-light text-gray-800">
          <span className="font-bold text-blue-600">CONTACT</span>{" "}
          <span className="font-bold text-pink-500">US</span>
        </h1>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.link}
                className="border border-gray-200 p-4 text-center hover:border-blue-500 transition-colors group"
              >
                <Icon
                  size={20}
                  className={`mx-auto mb-2 text-${item.color}-500`}
                />
                <p className="text-[10px] text-gray-400 mb-1 tracking-wider">
                  {item.label}
                </p>
                <p className="text-xs text-gray-700 group-hover:text-blue-600">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-gray-200 p-6">
            <h2 className="text-sm font-light text-gray-800 mb-4 tracking-wider">
              <span className="font-bold text-blue-600">SEND</span> MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-gray-200 px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-2 text-xs hover:from-blue-700 hover:to-pink-600 transition-colors flex items-center justify-center gap-2 tracking-wider"
              >
                <Send size={12} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Right Side - FAQ & Info */}
          <div className="space-y-6">
            {/* FAQ Section */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-sm font-light text-gray-800 mb-4 tracking-wider">
                <span className="font-bold text-pink-500">QUICK</span> ANSWERS
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <p className="text-xs font-medium text-gray-700 mb-1 tracking-wider">
                      {faq.q}
                    </p>
                    <p className="text-[10px] text-gray-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border border-gray-200 p-6">
              <h3 className="text-xs font-medium text-gray-700 mb-3 tracking-wider">
                SOCIAL
              </h3>
              <div className="flex gap-3 text-[10px]">
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-600 transition-colors tracking-wider"
                >
                  TWITTER
                </a>
                <span className="text-gray-200">/</span>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-600 transition-colors tracking-wider"
                >
                  LINKEDIN
                </a>
                <span className="text-gray-200">/</span>
                <a
                  href="#"
                  className="text-gray-300 hover:text-pink-500 transition-colors tracking-wider"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
