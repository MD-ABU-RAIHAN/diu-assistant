// Sidebar.jsx
import { Plus, X } from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  chatHistory,
  currentChatId,
  loadChatHistory,
  handleNewChat,
}) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-gray-800 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md hover:bg-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <button
            onClick={handleNewChat}
            className="w-full mt-3 flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            <Plus size={18} />
            New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => loadChatHistory(chat)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
                  currentChatId === chat.id
                    ? "bg-gray-700 border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <div className="font-medium text-sm truncate">{chat.title}</div>
                <div className="text-gray-400 text-xs mt-1 truncate">
                  {chat.preview}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
