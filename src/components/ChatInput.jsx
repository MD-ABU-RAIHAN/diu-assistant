import { Send } from "lucide-react";

export default function ChatInput({
  inputText,
  setInputText,
  handleSendMessage,
  handleKeyPress,
  textareaRef,
  isTyping,
}) {
  return (
    // Chat input and Submit button

    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about DIU..."
            className="w-full overflow-hidden scroll-smooth bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
            rows="1"
            style={{ minHeight: "48px", maxHeight: "120px" }}
          />
        </div>
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim() || isTyping}
          className={`p-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
            inputText.trim() && !isTyping
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          <Send size={20} />
        </button>
      </div>
      <div className="text-xs text-gray-400 mt-2 text-center">
        Press Enter to send • Shift+Enter for new line
      </div>
    </div>
  );
}
