import { Send } from "lucide-react";

export default function ChatInput({
  inputText,
  setInputText,
  handleSendMessage,
  isTyping,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Send a message..."
          className="w-full bg-[#1A1C23] border border-gray-700 rounded-xl px-4 py-3 pr-12 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-200 shadow-lg"
          style={{ minHeight: "52px", maxHeight: "120px" }}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim() || isTyping}
          className={`absolute right-3 bottom-3 p-1.5 rounded-lg transition-all duration-200 ${
            inputText.trim() && !isTyping
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-600 cursor-not-allowed"
          }`}
        >
          <Send size={18} />
        </button>
      </div>
      <div className="text-xs text-center mt-0.5 text-gray-500">
        DIU Assistant helps with academic information and campus queries
      </div>
    </div>
  );
}
