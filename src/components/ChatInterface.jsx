import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import WelcomeScreen from "./WelcomeScreen";

const DEMO_RESPONSES = {
  greeting: [
    "Hello! I'm DIU Assistant. How can I help you today?",
    "Welcome to DIU! I'm here to assist you with any questions about our university.",
    "Hi there! I'm your DIU virtual assistant. What would you like to know?",
  ],
  courses: [
    "DIU offers various undergraduate and postgraduate programs across different departments including CSE, BBA, English, and Law.",
    "For course registration, please visit the student portal. The current registration period is open until next Friday.",
    "Our Computer Science program is accredited by UGC and includes cutting-edge courses in AI, Web Development, and Data Science.",
  ],
  campus: [
    "DIU's main campus is located in Banani, Dhaka. We also have extended campuses in Green Road and Satarkul.",
    "Our facilities include modern computer labs, a central library, cafeteria, prayer rooms, and dedicated study spaces.",
    "The central library is open from 8 AM to 8 PM on weekdays, and 9 AM to 5 PM on weekends.",
  ],
  admission: [
    "Admission for the Fall 2025 semester is now open! You can apply online through our website.",
    "To apply, you'll need your SSC/HSC certificates, passport-size photographs, and national ID.",
    "We offer merit-based scholarships up to 100% tuition waiver for excellent academic results.",
  ],
  facilities: [
    "Our computer labs are equipped with high-speed internet and the latest software tools.",
    "DIU provides free Wi-Fi access across all campuses for students and faculty.",
    "Students can access digital resources and e-journals through our library portal.",
  ],
};

export default function ChatInterface({ sidebarOpen, setSidebarOpen }) {
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

    // Improved response selection based on keywords
    setTimeout(() => {
      let responseCategory = "greeting";
      const input = inputText.toLowerCase();

      if (
        input.includes("course") ||
        input.includes("program") ||
        input.includes("study")
      ) {
        responseCategory = "courses";
      } else if (
        input.includes("campus") ||
        input.includes("location") ||
        input.includes("where")
      ) {
        responseCategory = "campus";
      } else if (
        input.includes("admit") ||
        input.includes("apply") ||
        input.includes("admission")
      ) {
        responseCategory = "admission";
      } else if (
        input.includes("facility") ||
        input.includes("lab") ||
        input.includes("library")
      ) {
        responseCategory = "facilities";
      }

      const responses = DEMO_RESPONSES[responseCategory];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const aiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
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
    const demoMessages = [
      {
        id: 1,
        text: chat.preview,
        sender: "user",
        timestamp: "10:30 AM",
      },
    ];

    // Add contextual responses based on chat title
    if (chat.title.includes("Course")) {
      demoMessages.push({
        id: 2,
        text: DEMO_RESPONSES.courses[0],
        sender: "ai",
        timestamp: "10:31 AM",
      });
    } else if (chat.title.includes("Campus")) {
      demoMessages.push({
        id: 2,
        text: DEMO_RESPONSES.campus[0],
        sender: "ai",
        timestamp: "10:31 AM",
      });
    } else {
      demoMessages.push({
        id: 2,
        text: DEMO_RESPONSES.greeting[0],
        sender: "ai",
        timestamp: "10:31 AM",
      });
    }

    setMessages(demoMessages);
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
    <div className="flex h-full relative">
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
      <div className="flex-1 flex flex-col relative bg-[#1F2937]">
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1F2937] to-transparent h-32 pointer-events-none" />
        <div className="relative bg-[#1F2937] p-6 pb-1.5">
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
