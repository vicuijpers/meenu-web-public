"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLocale } from "../lib/locale-context";
import { localeNames, locales } from "../lib/i18n";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const router = useRouter();
  const { t, locale, setLocale } = useLocale();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200 text-base">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-gray-900">
            <img src="/icon-meino.svg" alt="AI Waiter" width={32} height={32} />
            <span className="font-semibold text-xl">AI Waiter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 font-bold">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/features"
              className={
                isActive("/features")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }
            >
              {t("nav.features")}
            </Link>
            <Link
              href="/pricing"
              className={
                isActive("/pricing")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="/signup"
              className={`inline-flex items-center px-4 py-2 rounded-full border-2 transition-colors font-bold ${
                isActive("/signup")
                  ? "border-orange-300 text-orange-600 bg-orange-50"
                  : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {t("nav.signup")}
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                aria-label="Language"
                className="inline-flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline font-mono text-sm">
                  {locale.toUpperCase()}
                </span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  {locales.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLocale(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        locale === lang
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700"
                      }`}
                    >
                      {localeNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 border-t border-gray-100">
            <div className="px-2 pt-2 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={
                  isActive("/")
                    ? "block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className={
                  isActive("/pricing")
                    ? "block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }
              >
                {t("nav.pricing")}
              </Link>
              <Link
                href="/features"
                onClick={() => setIsOpen(false)}
                className={
                  isActive("/features")
                    ? "block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }
              >
                {t("nav.features")}
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className={`block mx-3 my-2 px-4 py-2 rounded-full text-center text-base font-medium border-2 transition-colors ${
                  isActive("/signup")
                    ? "border-orange-300 text-orange-600 bg-orange-50"
                    : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {t("nav.signup")}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
