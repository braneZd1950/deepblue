import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';
import { telHref } from '@/lib/contactLinks';
import { useLocale } from '@/i18n/LocaleContext';

export function BookingPage() {
  const { L } = useLocale();
  const bookingUrl = brand.onlineBooking?.url;
  const wa = brand.social?.whatsapp;

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">{L.booking.title}</h1>
        <p className="db-page__lead">{L.booking.leadProd}</p>
      </header>

      {bookingUrl ? (
        <section className="db-booking-fresha" aria-labelledby="booking-fresha-title">
          <h2 id="booking-fresha-title" className="db-booking-fresha__title">
            {L.booking.freshaTitle}
          </h2>
          <p className="db-booking-fresha__text">{L.booking.freshaNote}</p>
          <a
            href={bookingUrl}
            className="db-btn db-btn--accent db-booking-fresha__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {L.booking.freshaCta}
          </a>
          <p className="db-booking-fresha__hint">{L.booking.freshaOpens}</p>
        </section>
      ) : null}

      <section className="db-booking__alt" aria-labelledby="booking-alt-title">
        <h2 id="booking-alt-title" className="db-booking__alt-title">
          {L.booking.altContact}
        </h2>
        <p className="db-booking-fresha__text">{L.booking.altLead}</p>
        <div className="db-booking__alt-actions">
          <a href={telHref(brand.contact.phone)} className="db-btn db-btn--ghost">
            {L.booking.phone}
          </a>
          {wa && (
            <a href={wa} className="db-btn db-btn--ghost" target="_blank" rel="noopener noreferrer">
              {L.booking.whatsapp}
            </a>
          )}
          <a href={`mailto:${brand.contact.email}`} className="db-btn db-btn--ghost">
            {L.booking.emailCta}
          </a>
          <Link to="/kontakt" className="db-btn db-btn--ghost">
            {L.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
