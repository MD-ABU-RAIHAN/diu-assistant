import { MessageCircle, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E293B] border-t border-[#334155] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="text-[#38BDF8]" size={20} />
            <span className="text-[#94A3B8] text-sm">
              DIU Assistant © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-[#94A3B8]">
              Made by 91<sup>st</sup>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
