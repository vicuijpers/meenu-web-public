"use client";

import { Bell } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { useEffect, useState } from "react";
import EmailModal from "@/app/components/ui/EmailModal";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const [open, setOpen] = useState(false);

  // Auto-open modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-orange-500 to-orange-600">
      {/* Be First in Line CTA */}
      <div className="">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            {t("footer.beFirstTitle")}
          </h2>
          <p className="text-base sm:text-lg text-orange-100 mb-6">
            {t("footer.beFirstSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-orange-600 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Bell className="h-5 w-5 mr-2" />
              {t("home.joinWaitlist")}
            </button>
            {/* <button
              onClick={() => {
                window.dispatchEvent(new Event("toggle-chat"));
              }}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-200"
              aria-label="Open chat demo"
            >
              <Headphones className="h-5 w-5 mr-2" />
              {t('footer.tryDemo')}
            </button> */}
          </div>
          <p className="text-orange-100 mt-4 text-xs sm:text-sm">
            {t("footer.earlyAccess")}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 text-white mx-auto">
          AI Waiter © 2025
        </div>

        {/* <nav className="flex items-center gap-5">
          <Link href="/" className="text-white hover:text-orange-200">
            {t("nav.home")}
          </Link>
          <Link href="/pricing" className="text-white hover:text-orange-200">
            {t("nav.pricing")}
          </Link>
          <Link href="/signup" className="text-white hover:text-orange-200">
            {t("nav.signup")}
          </Link>
        </nav> */}

        <EmailModal
          open={open}
          onClose={() => setOpen(false)}
          title={t("comingSoon.exclusiveAccess")}
          subtitle={t("comingSoon.exclusiveAccessDesc")}
        />
      </div>
    </footer>
  );
}
