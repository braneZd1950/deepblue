import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { brand } from '@/config/brand';
import { useLocale } from '@/i18n/LocaleContext';
import { LanguageToggle } from '@/components/LanguageToggle';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `db-nav__link${isActive ? ' db-nav__link--active' : ''}`;

const MQ_MOBILE = '(max-width: 768px)';

function isMobileNav(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(MQ_MOBILE).matches;
}

export function Header() {
  const { pathname } = useLocation();
  const { L } = useLocale();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { to: '/', label: L.nav.home },
      { to: '/rezervacije', label: L.nav.booking },
      { to: '/cjenik', label: L.nav.pricelist },
      { to: '/galerija', label: L.nav.gallery },
      { to: '/kontakt', label: L.nav.contact },
    ],
    [L],
  );

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    function setHeaderBottomVar() {
      const bottom = Math.ceil(header.getBoundingClientRect().bottom);
      header.style.setProperty('--db-header-bottom', `${bottom}px`);
    }

    setHeaderBottomVar();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(setHeaderBottomVar);
    });
    ro.observe(header);
    window.addEventListener('resize', setHeaderBottomVar);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', setHeaderBottomVar);
    };
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header || !menuOpen) return;
    requestAnimationFrame(() => {
      const bottom = Math.ceil(header.getBoundingClientRect().bottom);
      header.style.setProperty('--db-header-bottom', `${bottom}px`);
    });
  }, [menuOpen]);

  useLayoutEffect(() => {
    setMenuOpen(false);
    document.documentElement.classList.remove('db-nav-open');
  }, [pathname]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia('(min-width: 769px)').matches) {
        setMenuOpen(false);
        document.documentElement.classList.remove('db-nav-open');
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobileNav()) {
      document.documentElement.classList.add('db-nav-open');
    } else {
      document.documentElement.classList.remove('db-nav-open');
    }
    return () => document.documentElement.classList.remove('db-nav-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        document.documentElement.classList.remove('db-nav-open');
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenuAndFocusToggle = useCallback(() => {
    setMenuOpen(false);
    document.documentElement.classList.remove('db-nav-open');
    requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  return (
    <header ref={headerRef} className={`db-header${menuOpen ? ' db-header--menu-open' : ''}`}>
      <div className="db-shell db-header__inner">
        <div className="db-header__bar">
          <NavLink
            to="/"
            className="db-brand"
            end
            onClick={() => {
              setMenuOpen(false);
              document.documentElement.classList.remove('db-nav-open');
            }}
          >
            <img
              src={brand.logoUrl}
              alt={`${brand.name} — logo`}
              width={44}
              height={44}
              className="db-brand__mark"
            />
            <span className="db-brand__text">
              <span className="db-brand__name">{brand.name}</span>
              <span className="db-brand__tag">{brand.tagline}</span>
            </span>
          </NavLink>
          <div className="db-header__toolbar">
            <LanguageToggle />
            <button
              ref={toggleRef}
              type="button"
              className="db-nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="db-main-nav"
              aria-label={menuOpen ? L.navToggle.close : L.navToggle.open}
              onClick={() => {
                setMenuOpen((o) => {
                  const next = !o;
                  if (!next) document.documentElement.classList.remove('db-nav-open');
                  return next;
                });
              }}
            >
              <span className="db-nav-toggle__bars" aria-hidden="true" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <button
            type="button"
            className="db-header__backdrop"
            aria-label={L.navToggle.backdrop}
            tabIndex={-1}
            onClick={closeMenuAndFocusToggle}
          />
        )}

        <nav
          id="db-main-nav"
          className="db-nav"
          aria-label={L.nav.ariaMain}
          aria-hidden={isMobileNav() ? !menuOpen : undefined}
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
              end={to === '/'}
              onClick={() => {
                setMenuOpen(false);
                document.documentElement.classList.remove('db-nav-open');
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
