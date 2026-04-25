import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '@salon/shared';
import { loadServices } from '@/services/api';
import { brand } from '@/config/brand';
import heroImage from '@/assets/images/DEEP BLUE.jpg';

export function HomePage() {
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
              Topao ambijent, <em>stručan tim</em>
            </h1>
            <p className="db-hero__lead">
              U toplom ambijentu salona {brand.name} u Zadru dočekat će vas vedar tim kozmetičarki i wellness
              terapeuta — iskustvo stečeno u renomiranim salonima i luksuznim hotelima. Preporučujemo usluge i
              preparate prilagođene vama. Za akcije pratite nas na društvenim mrežama. Ova je{' '}
              <strong>demonstracijska verzija</strong> stranice: rezervacije, recenzije i cjenik koriste demo podatke;
              točne cijene i termine potvrdite u salonu ili na {brand.domain}.
            </p>
            <div className="db-hero__actions">
              <Link to="/rezervacije" className="db-btn db-btn--accent">
                Rezerviraj termin
              </Link>
              <Link to="/cjenik" className="db-btn db-btn--ghost">
                Pogledaj cjenik
              </Link>
              <Link to="/kontakt" className="db-btn db-btn--ghost">
                Kontakt i lokacija
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
              <li>Tretmani lica</li>
              <li>Depilacija</li>
              <li>Masaže & maderoterapija</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="db-section db-shell">
        <div className="db-section__head">
          <h2 className="db-section__title">Istaknute usluge</h2>
          <p className="db-section__sub">
            Izdvojeno iz ponude salona. Na stranici <Link to="/galerija">Galerija</Link> možete ostaviti ocjenu i
            recenziju (sprema se u pregledniku za demo). Cijene su okvirne — službeni cjenik na {brand.domain} je u
            grafičkom obliku.
          </p>
        </div>
        <div className="db-card-grid">
          {featured.map((s) => (
            <article key={s.id} className="db-card">
              <h3 className="db-card__title">{s.name}</h3>
              <p className="db-card__meta">
                {s.durationMin} min · {s.priceEur} €
              </p>
              <p className="db-card__text">{s.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
