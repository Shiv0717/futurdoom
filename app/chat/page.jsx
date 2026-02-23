"use client";

import Image from "next/image";
import Link from "next/link";
import SidebarProfile from "@/components/home/SidebarProfile";
import FuturDoomChat from "@/components/home/ChatBotUI";

export default function Chat() {
  return (
    <div className="min-h-screen bg-[#f0f4ff] overflow-hidden">
      <div className="max-w-7xl mx-auto h-screen flex gap-6 p-4">
        {/* LEFT PROFILE SIDEBAR */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <SidebarProfile />
          </div>
        </div>

        {/* RIGHT CHAT AREA */}
        <div className="flex-1 h-full min-h-0">
          <FuturDoomChat />
        </div>
      </div>
    </div>
  );
}