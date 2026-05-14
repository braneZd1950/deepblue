import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';
import { mapsUrl, mailtoBooking, telHref } from '@/lib/contactLinks';
import { useLocale } from '@/i18n/LocaleContext';

export function ContactPage() {
  const { L } = useLocale();
  const wa = brand.social?.whatsapp;

  const bookingMail = useMemo(
    () =>
      mailtoBooking(brand, [
        L.contact.mailGreeting,
        '',
        L.contact.mailServicePrompt,
        L.contact.mailSlotPrompt,
        '',
        L.contact.mailSignoff,
      ]),
    [L.contact],
  );

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">{L.contact.title}</h1>
        <p className="db-page__lead">{import.meta.env.PROD ? L.contact.leadProd : L.contact.leadDev}</p>
      </header>

      <div className="db-contact">
        <section className="db-contact__card" aria-labelledby="contact-where">
          <h2 id="contact-where" className="db-contact__card-title">
            {L.contact.where}
          </h2>
          <p className="db-contact__text">
            {brand.contact.address}
            <br />
            {brand.contact.city}
          </p>
          <a className="db-btn db-btn--outline" href={mapsUrl(brand)} target="_blank" rel="noopener noreferrer">
            {L.contact.maps}
          </a>
        </section>

        <section className="db-contact__card" aria-labelledby="contact-direct">
          <h2 id="contact-direct" className="db-contact__card-title">
            {L.contact.direct}
          </h2>
          <ul className="db-contact__list">
            <li>
              <span className="db-contact__label">{L.contact.phone}</span>
              <a href={telHref(brand.contact.phone)} className="db-contact__link">
                {brand.contact.phone}
              </a>
            </li>
            <li>
              <span className="db-contact__label">{L.contact.email}</span>
              <a href={`mailto:${brand.contact.email}`} className="db-contact__link">
                {brand.contact.email}
              </a>
            </li>
            {wa && (
              <li>
                <span className="db-contact__label">{L.contact.whatsapp}</span>
                <a href={wa} className="db-contact__link" target="_blank" rel="noopener noreferrer">
                  {L.contact.sendMessage}
                </a>
              </li>
            )}
          </ul>
        </section>

        <section className="db-contact__card" aria-labelledby="contact-hours">
          <h2 id="contact-hours" className="db-contact__card-title">
            {L.contact.hours}
          </h2>
          <p className="db-contact__text">
            {L.contact.hoursBody}{' '}
            <a href={`https://${brand.domain}`} target="_blank" rel="noopener noreferrer">
              {brand.domain}
            </a>
            .
          </p>
        </section>

        <section className="db-contact__card db-contact__card--wide" aria-labelledby="contact-next">
          <h2 id="contact-next" className="db-contact__card-title">
            {L.contact.next}
          </h2>
          <p className="db-contact__text">{import.meta.env.PROD ? L.contact.nextProd : L.contact.nextDev}</p>
          <div className="db-contact__actions">
            <Link to="/rezervacije" className="db-btn db-btn--accent">
              {L.contact.bookingForm}
            </Link>
            <a href={bookingMail} className="db-btn db-btn--ghost">
              {L.contact.sendEmail}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
