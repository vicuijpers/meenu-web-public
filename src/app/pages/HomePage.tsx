"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, TrendingUp, Star, Headphones, Bell } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import EmailModal from "@/app/components/ui/EmailModal";

const HomePage = () => {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon-meino.svg"
                alt="Meenu"
                width={64}
                height={64}
                className="h-16 w-16 text-orange-500"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1]">
              {t("home.title")}
              <span className="text-orange-500 block">
                {t("home.titleHighlight")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("home.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <Bell className="h-5 w-5 mr-2" />
                {t("home.joinWaitlist")}
              </button>
              {/* <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-200"
              >
                <Headphones className="h-5 w-5 mr-2" />
                {t("home.learnMore")}
              </Link> */}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {t("home.waitlistDescription")}
            </p>
          </div>
        </div>
      </section>
      <EmailModal
        open={open}
        onClose={() => setOpen(false)}
        title={t("comingSoon.exclusiveAccess")}
        subtitle={t("comingSoon.exclusiveAccessDesc")}
      />

      {/* Benefits for Restaurant Owners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t("home.benefitsTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.benefitsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("home.increaseRevenueTitle")}
              </h3>
              <p className="text-gray-600">{t("home.increaseRevenueDesc")}</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("home.fasterServiceTitle")}
              </h3>
              <p className="text-gray-600">{t("home.fasterServiceDesc")}</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("home.happyCustomersTitle")}
              </h3>
              <p className="text-gray-600">{t("home.happyCustomersDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
