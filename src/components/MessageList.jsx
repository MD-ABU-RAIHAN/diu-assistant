// MessageList.jsx
export default function MessageList({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          } animate-fade-in`}
        >
          <div
            className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-2xl ${
              message.sender === "user"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-auto"
                : "bg-gray-800 text-gray-100 border border-gray-700"
            } shadow-lg transform hover:scale-105 transition-transform duration-200`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.text}
            </p>
            <div
              className={`text-xs mt-2 ${
                message.sender === "user" ? "text-blue-100" : "text-gray-400"
              }`}
            >
              {message.timestamp}
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start animate-fade-in">
          <div className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-2xl max-w-xs shadow-lg">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
