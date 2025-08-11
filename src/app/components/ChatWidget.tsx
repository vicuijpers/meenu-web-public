"use client";
import { useRef, useState, useEffect } from "react";
import { Bot, Send, MessageCircle } from "lucide-react";

type Sender = "user" | "ai";

interface Message {
  id: number;
  text: string;
  sender: Sender;
  timestamp: Date;
}

function generateAIResponse(userText: string): string {
  const lowerText = userText.toLowerCase();
  if (lowerText.includes("pizza")) {
    return "Great choice! Our Classic Margherita or Truffle Mushroom are both hits—want me to suggest pairings?";
  } else if (lowerText.includes("burger")) {
    return "Our Wagyu Beef Burger is a guest favorite. Want to add fries or a drink?";
  } else if (lowerText.includes("salad")) {
    return "Try the Mediterranean Salad—fresh and flavorful. Add grilled chicken?";
  } else if (lowerText.includes("dessert") || lowerText.includes("sweet")) {
    return "The Chocolate Lava Cake is perfect to share. Should I add one?";
  } else if (lowerText.includes("drink") || lowerText.includes("beverage")) {
    return "We have fresh juices, sodas, coffee, tea, and a selection of wine and beer. Any preference?";
  } else if (lowerText.includes("recommend") || lowerText.includes("suggest")) {
    return "Tell me your mood—light and fresh or hearty and comforting? Any dietary needs?";
  } else if (lowerText.includes("price") || lowerText.includes("cost")) {
    return "Most mains are between $16-23. Want something within a specific range?";
  } else if (lowerText.includes("vegetarian") || lowerText.includes("vegan")) {
    return "We have great vegetarian options like Truffle Mushroom Pasta and Margherita Pizza.";
  } else if (lowerText.includes("hello") || lowerText.includes("hi")) {
    return "Hi! I can take your order and answer menu questions. What are you craving?";
  }
  return "I can help with recommendations, allergens, and special requests. What would you like?";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI server. Ask me anything about the menu or start an order.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages, isTyping]);

  const handleSend = () => {
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
    setTimeout(() => {
      const aiText = generateAIResponse(userMessage.text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 900 + Math.random() * 900);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
        >
          <MessageCircle className="h-5 w-5" />
          Chat
        </button>
      )}

      {open && (
        <div className="w-[20rem] sm:w-[22rem] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">AI Server</p>
              <p className="text-xs text-green-600">Online • Ready</p>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-3 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md"
                  }`}
                >
                  {m.text}
                  <div
                    className={`mt-1 text-[10px] ${
                      m.sender === "user" ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {m.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Bot className="h-3 w-3" />
                typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask or order…"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isTyping}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  inputText.trim() && !isTyping
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
