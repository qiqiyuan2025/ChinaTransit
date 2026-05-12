import { translations, type Locale, locales } from './translations';

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export function getLocalePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return clean;
  return `/${locale}${clean}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment && locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return 'en';
}

export function getPathWithoutLocale(url: URL): string {
  const locale = getLocaleFromUrl(url);
  if (locale === 'en') return url.pathname;
  return url.pathname.replace(`/${locale}`, '') || '/';
}
