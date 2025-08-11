"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, isValidLocale } from './i18n';
import { getTranslation, TranslationKey } from './translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      const browserLocale = navigator.language.split('-')[0];
      if (isValidLocale(browserLocale)) {
        setLocaleState(browserLocale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: TranslationKey) => getTranslation(locale, key);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}