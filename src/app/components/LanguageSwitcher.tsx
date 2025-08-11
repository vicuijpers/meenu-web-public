"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { locales, localeNames, Locale } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('nav.language')}
        className="inline-flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                locale === loc ? 'text-orange-600 bg-orange-50' : 'text-gray-700'
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;