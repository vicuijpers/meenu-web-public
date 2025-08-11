import { Locale } from './i18n';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import frTranslations from './translations/fr.json';
import deTranslations from './translations/de.json';
import nlTranslations from './translations/nl.json';

type Translations = typeof enTranslations;

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  nl: nlTranslations,
};

export type TranslationKey = 
  | `common.${keyof typeof enTranslations.common}`
  | `nav.${keyof typeof enTranslations.nav}`
  | `home.${keyof typeof enTranslations.home}`
  | `chat.${keyof typeof enTranslations.chat}`
  | `footer.${keyof typeof enTranslations.footer}`;

export function getTranslation(locale: Locale, key: TranslationKey): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}