import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div
      className="db-cookie-banner"
      role="region"
      aria-label="Obavijest o kolačićima"
    >
      <div className="db-cookie-banner__inner db-shell">
        <div className="db-cookie-banner__text">
          <p className="db-cookie-banner__title">Kolačići</p>
          <p className="db-cookie-banner__desc">
            Koristimo kolačiće radi osnovnog rada stranice i — uz vašu suglasnost — za analitiku i
            poboljšanje iskustva. Više u{' '}
            <Link to="/kolacici" className="db-cookie-banner__link">
              politici kolačića
            </Link>
            .
          </p>
        </div>
        <div className="db-cookie-banner__actions">
          <button type="button" className="db-cookie-banner__btn db-cookie-banner__btn--ghost" onClick={essentialOnly}>
            Samo nužni
          </button>
          <button type="button" className="db-cookie-banner__btn db-cookie-banner__btn--primary" onClick={acceptAll}>
            Prihvati sve
          </button>
        </div>
      </div>
    </div>
  );
}
