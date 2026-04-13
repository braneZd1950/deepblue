import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE_SUFFIX = 'DEEP BLUE — Zadar';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Početna',
  '/rezervacije': 'Rezervacije',
  '/cjenik': 'Cjenik',
  '/galerija': 'Galerija i recenzije',
  '/kontakt': 'Kontakt',
  '/profil': 'Profil',
  '/pravila-privatnosti': 'Politika privatnosti',
  '/uvjeti-koristenja': 'Uvjeti korištenja',
  '/kolacici': 'Politika kolačića',
};

export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const segment = ROUTE_TITLES[pathname] ?? 'Salon';
    document.title = `${segment} | ${TITLE_SUFFIX}`;
  }, [pathname]);

  return null;
}
