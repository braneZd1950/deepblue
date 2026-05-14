import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/i18n/LocaleContext';

const STORAGE_KEY = 'deepblue_cookie_consent';

export type CookieConsent = 'all' | 'essential';

export function getCookieConsent(): CookieConsent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'all' || v === 'essential') return v;
  } catch {
    /* ignore */
  }
  return null;
}

function shouldShowBanner(): boolean {
  if (typeof window === 'undefined') return false;
  return getCookieConsent() === null;
}

export function setCookieConsent(value: CookieConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
}

export function CookieBanner() {
  const { L } = useLocale();
  const [visible, setVisible] = useState(shouldShowBanner);

  useEffect(() => {
    document.documentElement.classList.toggle('db-has-cookie-banner', visible);
    return () => document.documentElement.classList.remove('db-has-cookie-banner');
  }, [visible]);

  function acceptAll() {
    setCookieConsent('all');
    setVisible(false);
  }

  function essentialOnly() {
    setCookieConsent('essential');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="db-cookie-banner" role="region" aria-label={L.cookieBanner.aria}>
      <div className="db-cookie-banner__inner db-shell">
        <div className="db-cookie-banner__text">
          <p className="db-cookie-banner__title">{L.cookieBanner.title}</p>
          <p className="db-cookie-banner__desc">
            {L.cookieBanner.desc}{' '}
            <Link to="/kolacici" className="db-cookie-banner__link">
              {L.cookieBanner.link}
            </Link>
            .
          </p>
        </div>
        <div className="db-cookie-banner__actions">
          <button type="button" className="db-cookie-banner__btn db-cookie-banner__btn--ghost" onClick={essentialOnly}>
            {L.cookieBanner.essential}
          </button>
          <button type="button" className="db-cookie-banner__btn db-cookie-banner__btn--primary" onClick={acceptAll}>
            {L.cookieBanner.all}
          </button>
        </div>
      </div>
    </div>
  );
}
