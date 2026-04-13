import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';
import { mapsUrl, mailtoBooking, telHref } from '@/lib/contactLinks';

export function ContactPage() {
  const wa = brand.social?.whatsapp;
  const bookingMail = mailtoBooking(brand, [
    'Poštovani,',
    '',
    'Željena usluga:',
    'Željeni termin:',
    '',
    'Lijep pozdrav',
  ]);

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">Kontakt</h1>
        <p className="db-page__lead">
          Svi podaci dolaze iz konfiguracije brenda (white-label). Za demo možete odmah otvoriti kartu, poziv ili
          WhatsApp.
        </p>
      </header>

      <div className="db-contact">
        <section className="db-contact__card" aria-labelledby="contact-where">
          <h2 id="contact-where" className="db-contact__card-title">
            Lokacija
          </h2>
          <p className="db-contact__text">
            {brand.contact.address}
            <br />
            {brand.contact.city}
          </p>
          <a className="db-btn db-btn--outline" href={mapsUrl(brand)} target="_blank" rel="noopener noreferrer">
            Otvori u Google kartama
          </a>
        </section>

        <section className="db-contact__card" aria-labelledby="contact-direct">
          <h2 id="contact-direct" className="db-contact__card-title">
            Izravno
          </h2>
          <ul className="db-contact__list">
            <li>
              <span className="db-contact__label">Telefon</span>
              <a href={telHref(brand.contact.phone)} className="db-contact__link">
                {brand.contact.phone}
              </a>
            </li>
            <li>
              <span className="db-contact__label">Email</span>
              <a href={`mailto:${brand.contact.email}`} className="db-contact__link">
                {brand.contact.email}
              </a>
            </li>
            {wa && (
              <li>
                <span className="db-contact__label">WhatsApp</span>
                <a href={wa} className="db-contact__link" target="_blank" rel="noopener noreferrer">
                  Pošalji poruku
                </a>
              </li>
            )}
          </ul>
        </section>

        <section className="db-contact__card" aria-labelledby="contact-hours">
          <h2 id="contact-hours" className="db-contact__card-title">
            Radno vrijeme (demo)
          </h2>
          <p className="db-contact__text">
            Pon–pet 9–20 h, sub 9–14 h (primjer za prezentaciju). Točno radno vrijeme potvrdite u salonu ili na{' '}
            <a href={`https://${brand.domain}`} target="_blank" rel="noopener noreferrer">
              {brand.domain}
            </a>
            .
          </p>
        </section>

        <section className="db-contact__card db-contact__card--wide" aria-labelledby="contact-next">
          <h2 id="contact-next" className="db-contact__card-title">
            Sljedeći koraci
          </h2>
          <p className="db-contact__text">
            Online rezervacija u demo verziji može koristiti mock termine; za stvarni termin najbrže je nazvati ili
            napisati na WhatsApp.
          </p>
          <div className="db-contact__actions">
            <Link to="/rezervacije" className="db-btn db-btn--accent">
              Forma za rezervaciju
            </Link>
            <a href={bookingMail} className="db-btn db-btn--ghost">
              Pošalji email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
