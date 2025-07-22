// Header.jsx
import { Menu, MessageCircle } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <div className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <MessageCircle className="text-blue-500" size={24} />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DIU Assistant
          </h1>
        </div>
      </div>
    </div>
  );
}
