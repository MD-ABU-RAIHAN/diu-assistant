import { Menu, MessageCircle } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="w-full bg-[#1E293B] border-b border-[#334155] shadow-lg h-16">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-[#334155] transition-colors text-[#94A3B8]"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <MessageCircle className="text-[#38BDF8]" size={28} />
            <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent tracking-wide">
              DIU Assistant (Dhaka International University)
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
