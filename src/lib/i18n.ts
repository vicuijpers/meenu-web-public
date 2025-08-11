export const locales = ["en", "es", "fr", "de", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
