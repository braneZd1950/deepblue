import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '@salon/shared';
import { loadServices } from '@/services/api';
import { brand } from '@/config/brand';
import { useLocale } from '@/i18n/LocaleContext';
import heroImage from '@/assets/images/DEEP BLUE.jpg';

export function HomePage() {
  const { L, locale } = useLocale();
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    void loadServices().then(setServices);
  }, []);

  const featured = services.slice(0, 3);

  return (
    <>
      <section className="db-hero db-shell">
        <div className="db-hero__grid">
          <div className="db-hero__copy">
            <p className="db-eyebrow">{brand.tagline}</p>
            <h1 className="db-hero__title">
              {L.home.titleLine1} <em>{L.home.titleEm}</em>
            </h1>
            <p className="db-hero__lead">
              {locale === 'hr' ? (
                <>
                  U toplom ambijentu salona {brand.name} u Zadru dočekat će vas vedar tim kozmetičarki i wellness
                  terapeuta — iskustvo stečeno u renomiranim salonima i luksuznim hotelima. Preporučujemo usluge i
                  preparate prilagođene vama. Za akcije pratite nas na društvenim mrežama.{' '}
                  {import.meta.env.PROD ? (
                    <>{L.home.leadProd}</>
                  ) : (
                    <>
                      <strong>demonstracijska verzija</strong> — {L.home.leadDev} {brand.domain}.
                    </>
                  )}
                </>
              ) : (
                <>
                  At {brand.name} in Zadar, a welcoming team of beauticians and wellness therapists awaits you —
                  experience from renowned salons and luxury hotels. We recommend tailored services and products. Follow
                  us on social media for promotions.{' '}
                  {import.meta.env.PROD ? (
                    <>{L.home.leadProd}</>
                  ) : (
                    <>
                      This is a <strong>demo website</strong> — {L.home.leadDev} {brand.domain}.
                    </>
                  )}
                </>
              )}
            </p>
            <div className="db-hero__actions">
              <Link to="/rezervacije" className="db-btn db-btn--accent">
                {L.home.ctaBook}
              </Link>
              <Link to="/cjenik" className="db-btn db-btn--ghost">
                {L.home.ctaPrice}
              </Link>
              <Link to="/kontakt" className="db-btn db-btn--ghost">
                {L.home.ctaContact}
              </Link>
            </div>
          </div>
          <div
            className="db-hero__panel"
            aria-hidden
            style={{
              backgroundImage: `linear-gradient(rgba(20, 40, 63, 0.25), rgba(20, 40, 63, 0.15)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="db-hero__orb" />
            <ul className="db-hero__chips">
              <li>{L.home.chipFace}</li>
              <li>{L.home.chipWax}</li>
              <li>{L.home.chipMassage}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="db-section db-shell">
        <div className="db-section__head">
          <h2 className="db-section__title">{L.home.sectionServices}</h2>
          <p className="db-section__sub">
            {L.home.featuredIntro}{' '}
            <Link to="/galerija">{L.nav.gallery}</Link> {L.home.featuredAfterGallery}{' '}
            <a href={`https://${brand.domain}`} target="_blank" rel="noopener noreferrer">
              {brand.domain}
            </a>
            .
          </p>
        </div>
        <div className="db-card-grid">
          {featured.map((s) => (
            <article key={s.id} className="db-card">
              <h3 className="db-card__title">{s.name}</h3>
              <p className="db-card__meta">
                {s.durationMin > 0 ? `${s.durationMin} ${L.home.featuredDuration} · ` : null}
                {s.priceEur} €
              </p>
              <p className="db-card__text">{s.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
