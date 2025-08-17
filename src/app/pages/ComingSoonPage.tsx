"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bell, Clock, Star } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import EmailModal from "@/app/components/ui/EmailModal";

const ComingSoonPage = () => {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <section className="flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/icon-meino.svg"
              alt="Meino"
              width={80}
              height={80}
              className="h-20 w-20 text-orange-500"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1]">
            {t("comingSoon.title")}
            <span className="text-orange-500 block">
              {t("comingSoon.titleHighlight")}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("comingSoon.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Bell className="h-5 w-5 mr-2" />
              {t("comingSoon.joinWaitlist")}
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("comingSoon.launchingSoon")}
              </h3>
              <p className="text-gray-600">
                {t("comingSoon.launchingSoonDesc")}
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => setOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setOpen(true);
              }}
              aria-label={t("comingSoon.exclusiveAccess")}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("comingSoon.exclusiveAccess")}
              </h3>
              <p className="text-gray-600">
                {t("comingSoon.exclusiveAccessDesc")}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("comingSoon.stayUpdated")}
              </h3>
              <p className="text-gray-600">{t("comingSoon.stayUpdatedDesc")}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            {t("comingSoon.followProgress")}
          </p>
        </div>
        <EmailModal
          open={open}
          onClose={() => setOpen(false)}
          title={t("comingSoon.exclusiveAccess")}
          subtitle={t("comingSoon.exclusiveAccessDesc")}
        />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            What is AI Waiter?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI Waiter is a digital service platform that allows restaurants to
            add their menus while enabling an AI-powered assistant to serve
            customers directly through the app. The AI can take orders, answer
            menu questions, suggest upsells, and streamline communication
            between customers and waiters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;
