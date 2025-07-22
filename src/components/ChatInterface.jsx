import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import WelcomeScreen from "./WelcomeScreen";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  //Demo Chat History
  const [chatHistory] = useState([
    {
      id: 1,
      title: "Course Registration Help",
      preview: "How do I register for courses?",
    },
    {
      id: 2,
      title: "Campus Information",
      preview: "Tell me about DIU campus facilities",
    },
    {
      id: 3,
      title: "Academic Calendar",
      preview: "When does the semester start?",
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Demo AI Responses
    setTimeout(() => {
      const aiResponses = [
        "Hello! I'm here to help you with any questions about Dhaka International University.",
        "DIU offers modern facilities, libraries, sports complex and more.",
        "For course registration, please visit the student portal.",
        "We have partnerships with companies for internships.",
        "The library is open 24/7 during exams!",
      ];
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentChatId(null);
    setSidebarOpen(false);
  };

  const loadChatHistory = (chat) => {
    setCurrentChatId(chat.id);
    setMessages([
      { id: 1, text: chat.preview, sender: "user", timestamp: "10:30 AM" },
      {
        id: 2,
        text: "I'd be happy to help you with that!",
        sender: "ai",
        timestamp: "10:31 AM",
      },
    ]);
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + "px";
    }
  }, [inputText]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar
        {...{
          sidebarOpen,
          setSidebarOpen,
          chatHistory,
          currentChatId,
          loadChatHistory,
          handleNewChat,
        }}
      />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex-1 flex flex-col lg:ml-0">
        <Header setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <WelcomeScreen />
            </div>
          ) : (
            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
            />
          )}
        </div>
        <div className="border-t border-gray-700 bg-gray-800 p-4">
          <ChatInput
            {...{
              inputText,
              setInputText,
              handleSendMessage,
              handleKeyPress,
              textareaRef,
              isTyping,
            }}
          />
        </div>
      </div>
    </div>
  );
}
