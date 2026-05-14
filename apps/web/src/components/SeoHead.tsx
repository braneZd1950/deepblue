import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '@/i18n/LocaleContext';

const TITLE_SUFFIX = 'DEEP BLUE — Zadar';

export function SeoHead() {
  const { pathname } = useLocation();
  const { L, locale } = useLocale();

  useEffect(() => {
    const segment = L.seo[pathname] ?? (locale === 'en' ? 'Site' : 'Stranica');
    document.title = `${segment} | ${TITLE_SUFFIX}`;
  }, [pathname, L, locale]);

  return null;
}
