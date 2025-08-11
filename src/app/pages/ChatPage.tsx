"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI waiter. I'm here to help you place your order. What would you like to eat today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage.text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateAIResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes("pizza")) {
      return "Great choice! We have several delicious pizzas. Our Classic Margherita is very popular, or would you prefer something with meat toppings? I can also recommend our Truffle Mushroom if you're looking for something gourmet.";
    } else if (lowerText.includes("burger")) {
      return "Excellent! Our Wagyu Beef Burger is a customer favorite - it's made with premium wagyu beef, caramelized onions, and aged cheddar. Would you like to add any sides like our crispy fries?";
    } else if (lowerText.includes("salad")) {
      return "Perfect for a healthy option! Our Mediterranean Salad is fresh and flavorful with mixed greens, olives, feta cheese, and herb vinaigrette. Would you like to add grilled chicken or salmon to make it a complete meal?";
    } else if (lowerText.includes("dessert") || lowerText.includes("sweet")) {
      return "Sweet ending! Our Chocolate Lava Cake is absolutely divine - warm chocolate cake with a molten center served with vanilla ice cream. It's perfect for sharing too!";
    } else if (lowerText.includes("drink") || lowerText.includes("beverage")) {
      return "What would you like to drink? We have fresh juices, sodas, coffee, tea, and a selection of wine and beer. Any preferences?";
    } else if (
      lowerText.includes("recommend") ||
      lowerText.includes("suggest")
    ) {
      return "I'd love to help you choose! What kind of flavors do you enjoy? Are you in the mood for something light and fresh, or something hearty and comforting? Any dietary restrictions I should know about?";
    } else if (lowerText.includes("price") || lowerText.includes("cost")) {
      return "Our menu items range from $9.50 for desserts up to $26.00 for our premium Wagyu Burger. Most main dishes are between $16-23. Would you like me to suggest something within a specific price range?";
    } else if (
      lowerText.includes("vegetarian") ||
      lowerText.includes("vegan")
    ) {
      return "We have great vegetarian options! The Truffle Mushroom Pasta and Mediterranean Salad are very popular. The Margherita Pizza is also vegetarian. Would any of these interest you?";
    } else if (lowerText.includes("thank") || lowerText.includes("thanks")) {
      return "You're very welcome! I'm here to help make your dining experience perfect. Is there anything else you'd like to order or any questions about our menu?";
    } else if (lowerText.includes("hello") || lowerText.includes("hi")) {
      return "Hello there! I'm excited to help you with your order today. What can I get started for you? You can browse our full menu or just tell me what you're craving!";
    } else {
      return "I understand you're interested in that! Let me help you find the perfect dish. Could you tell me a bit more about what you're looking for? Are you in the mood for something specific, or would you like me to make some recommendations based on our most popular items?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-end space-x-3 mb-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">AI Waiter</h1>
            <p className="text-sm text-green-600">
              Online • Ready to take your order
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`flex items-end space-x-3 max-w-xs sm:max-w-md lg:max-w-lg ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-blue-500" : "bg-orange-500"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1 min-w-0">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                disabled={isTyping}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                inputText.trim() && !isTyping
                  ? "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
