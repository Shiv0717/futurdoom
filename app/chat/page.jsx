import Image from "next/image";
import Link from "next/link";
import SidebarProfile from "@/components/home/SidebarProfile";
import ChatBotUI from "@/components/home/ChatBotUI";

export default async function Chat() {
  return (
    <div className="min-h-screen flex max-w-7xl mx-auto">
      {/* LEFT PROFILE SIDEBAR */}
      <div className="hidden lg:block w-70 ">
        <SidebarProfile />
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex-1 px-4 py-4">
        <ChatBotUI />
      </div>
    </div>
  );
}
