// Sidebar.jsx
import { Plus, X } from "lucide-react";

export default function Sidebar({ ...props }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#202123] transform ${
        props.sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="p-2">
          <button
            onClick={props.handleNewChat}
            className="w-full flex items-center gap-2 px-3 py-3 text-sm text-white hover:bg-gray-700 rounded-md border border-gray-700"
          >
            <Plus size={16} />
            New chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {props.chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => props.loadChatHistory(chat)}
                className={`w-full text-left p-3 text-sm rounded-md hover:bg-gray-700 text-gray-200 ${
                  props.currentChatId === chat.id ? "bg-gray-700" : ""
                }`}
              >
                <div className="truncate">{chat.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
