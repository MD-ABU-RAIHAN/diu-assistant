// MessageList.jsx
export default function MessageList({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="w-full px-4 py-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`max-w-3xl mx-auto mb-6 ${
            message.sender === "user" ? "flex flex-row-reverse" : "flex"
          }`}
        >
          <div
            className={`flex max-w-[80%] items-start gap-4 ${
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                message.sender === "ai"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gradient-to-r from-pink-500 to-orange-500"
              }`}
            >
              {message.sender === "ai" ? "AI" : "U"}
            </div>
            <div
              className={`rounded-2xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-[#1A1C23] border border-gray-700"
              }`}
            >
              <p className="text-gray-100 leading-relaxed">{message.text}</p>
              <span
                className={`text-xs mt-2 block ${
                  message.sender === "user" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {message.timestamp}
              </span>
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            AI
          </div>
          <div className="bg-[#1A1C23] border border-gray-700 rounded-2xl px-4 py-3">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
