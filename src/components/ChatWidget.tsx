import Link from "next/link";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="/chat"
        aria-label="Open chat"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
      >
        <MessageCircle className="h-5 w-5" />
        Chat
      </Link>
    </div>
  );
};

export default ChatWidget;
