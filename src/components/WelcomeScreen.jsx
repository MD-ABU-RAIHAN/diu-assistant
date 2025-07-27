import React from "react";
import { MessageCircle } from "lucide-react";

export default function WelcomeScreen() {
  return (
    <div className="flex items-center justify-center min-h-full p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <MessageCircle size={64} className="mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Welcome to Dhaka International University
          </h2>
          <p className="text-gray-400">
            Your AI assistant is here to help with academic information, course
            details, campus facilities, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="font-medium text-blue-400">📚 Academic Support</div>
            <div className="text-gray-400 text-xs mt-1">
              Course registration, schedules, and requirements
            </div>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="font-medium text-purple-400">
              🏢 Campus Information
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Facilities, locations, and campus services
            </div>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="font-medium text-pink-400">💼 Career Guidance</div>
            <div className="text-gray-400 text-xs mt-1">
              Internships, job placement, and career advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
