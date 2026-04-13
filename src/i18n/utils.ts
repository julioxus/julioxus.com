import en from './en';
import es from './es';

type TranslationKey = keyof typeof en;

const translations = { en, es } as const;
type Locale = keyof typeof translations;

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function t(key: TranslationKey, locale: Locale): string {
  return translations[locale][key] ?? translations.en[key] ?? key;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(es\/)?/, '/');
  if (locale === 'en') return cleanPath;
  return `/es${cleanPath}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export const locales: Locale[] = ['en', 'es'];
export type { Locale, TranslationKey };
