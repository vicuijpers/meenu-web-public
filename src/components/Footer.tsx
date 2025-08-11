import Link from "next/link";
import { Bell } from "lucide-react";
import { useLocale } from "../lib/locale-context";

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            Be First in Line
          </h2>
          <p className="text-base sm:text-lg text-orange-100 mb-6">
            Join the waitlist and be among the first restaurants to experience
            the future of AI-powered service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-orange-600 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Bell className="h-5 w-5 mr-2" />
              Join Waitlist
            </Link>
          </div>
          <p className="text-orange-100 mt-4 text-xs sm:text-sm">
            Early access for waitlist members • Priority support • Exclusive
            launch pricing
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-white mx-auto">
            <span className="font-semibold">Your AI Waiter</span>
            <span className="text-white">•</span>
            <span className="text-white">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
