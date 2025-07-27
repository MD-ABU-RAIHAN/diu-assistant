import Header from "./components/Header";
import ChatInterface from "./components/ChatInterface";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#17191E]">
      <Header setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 overflow-hidden">
        <ChatInterface
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <Footer />
    </div>
  );
}
