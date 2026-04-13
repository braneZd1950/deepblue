import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import type { BookingSlot, ServiceItem } from '@salon/shared';
import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';
import { mailtoBooking, telHref } from '@/lib/contactLinks';
import { loadServices, loadSlots, submitBooking } from '@/services/api';
import { Button } from '@/components/ui/Button';
import { CustomSelect } from '@/components/ui/CustomSelect';

type Panel = 'form' | 'success';

function waWithText(baseUrl: string, text: string): string {
  try {
    const u = new URL(baseUrl);
    u.searchParams.set('text', text);
    return u.toString();
  } catch {
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}text=${encodeURIComponent(text)}`;
  }
}

export function BookingPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [slots, setSlots] = useState<BookingSlot[]>([]);
  const [serviceId, setServiceId] = useState('');
  const [slotId, setSlotId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [panel, setPanel] = useState<Panel>('form');
  const [successFromApi, setSuccessFromApi] = useState(false);

  useEffect(() => {
    void Promise.all([loadServices(), loadSlots()]).then(([s, sl]) => {
      setServices(s);
      setSlots(sl);
      if (s[0]) setServiceId(s[0].id);
      const firstFree = sl.find((x) => x.available);
      if (firstFree) setSlotId(firstFree.id);
    });
  }, []);

  const service = useMemo(() => services.find((s) => s.id === serviceId), [services, serviceId]);
  const slot = useMemo(() => slots.find((b) => b.id === slotId), [slots, slotId]);

  const summaryLines = useMemo(() => {
    const lines = [
      'Poštovani,',
      '',
      `Željena usluga: ${service?.name ?? '—'}`,
      `Termin: ${slot ? `${slot.date} ${slot.time}` : '—'}`,
      `Kontakt: ${name}, ${email}`,
      '',
      'Molim potvrdu termina.',
    ];
    return lines;
  }, [service, slot, name, email]);

  const mailHref = useMemo(() => mailtoBooking(brand, summaryLines), [summaryLines]);

  const waHref = useMemo(() => {
    if (!brand.social?.whatsapp) return null;
    return waWithText(
      brand.social.whatsapp,
      `Bok, želim rezervirati: ${service?.name ?? 'usluga'}, termin ${slot ? `${slot.date} ${slot.time}` : '—'}. ${name}`,
    );
  }, [service, slot, name]);

  function resetFlow() {
    setPanel('form');
    setSuccessFromApi(false);
    setMessage(null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const res = await submitBooking({ serviceId, slotId, name, email });
    setLoading(false);
    if (res.ok) {
      setSuccessFromApi(true);
      setPanel('success');
      setMessage(null);
      return;
    }
    setMessage(res.message ?? 'Greška');
  }

  function showDemoSuccess() {
    setSuccessFromApi(false);
    setPanel('success');
    setMessage(null);
  }

  if (panel === 'success') {
    return (
      <div className="db-shell db-page">
        <header className="db-page__head">
          <h1 className="db-page__title">Rezervacija — potvrda</h1>
          <p className="db-page__lead">
            {successFromApi
              ? 'Zahtjev je zaprimljen (API u demo okruženju). U produkciji slijedi email ili SMS potvrda.'
              : 'Ovo je ekran potvrde za prezentaciju klijenta (bez slanja na server).'}
          </p>
        </header>

        <div className="db-booking-success">
          <p className="db-booking-success__greet">Hvala, {name || 'goste'}.</p>
          <ul className="db-booking-success__list">
            <li>
              <strong>Usluga:</strong> {service?.name}
            </li>
            <li>
              <strong>Termin:</strong> {slot ? `${slot.date} ${slot.time}` : '—'}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
          </ul>
          <p className="db-booking-success__hint">
            Za stvarnu potvrdu termina najčešće je najbrže nazvati salon ili poslati poruku na WhatsApp.
          </p>
          <div className="db-booking-success__actions">
            <a href={telHref(brand.contact.phone)} className="db-btn db-btn--accent">
              Nazovi {brand.contact.phone}
            </a>
            {waHref && (
              <a href={waHref} className="db-btn db-btn--ghost" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
            <a href={mailHref} className="db-btn db-btn--ghost">
              Email upit
            </a>
            <Link to="/kontakt" className="db-btn db-btn--outline">
              Stranica kontakt
            </Link>
          </div>
          <Button type="button" variant="ghost" onClick={resetFlow}>
            Natrag na formu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">Rezervacije</h1>
        <p className="db-page__lead">
          Odaberite uslugu i termin iz demo liste. Ako backend nije pokrenut, slanje na API neće uspjeti — u tom
          slučaju koristite kontakt ili gumb za prikaz ekrana potvrde (demo).
        </p>
      </header>

      <form className="db-form" onSubmit={onSubmit}>
        <div className="db-field">
          <CustomSelect
            label="Usluga"
            value={serviceId}
            required
            placeholder="Odaberite uslugu"
            options={services.map((s) => ({
              value: s.id,
              label: `${s.name} — ${s.priceEur} €`,
            }))}
            onChange={setServiceId}
          />
        </div>

        <div className="db-field">
          <CustomSelect
            label="Termin"
            value={slotId}
            required
            placeholder="Odaberite termin"
            options={slots.map((b) => ({
              value: b.id,
              label: `${b.date} ${b.time}${b.available ? '' : ' (zauzeto)'}`,
              disabled: !b.available,
            }))}
            onChange={setSlotId}
          />
        </div>

        <label className="db-field">
          <span>Ime i prezime</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Ana Anić" />
        </label>

        <label className="db-field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ana@primjer.hr"
          />
        </label>

        {message && (
          <p
            className={`db-form__msg${
              message.includes('Greška') || message.includes('nedostupan') ? ' db-form__msg--err' : ''
            }`}
          >
            {message}
          </p>
        )}

        <div className="db-booking__submit-row">
          <Button type="submit" variant="accent" disabled={loading}>
            {loading ? 'Slanje…' : 'Pošalji zahtjev'}
          </Button>
          <Button type="button" variant="outline" onClick={showDemoSuccess}>
            Demo: ekran potvrde
          </Button>
        </div>
      </form>

      <section className="db-booking__alt" aria-labelledby="booking-alt-title">
        <h2 id="booking-alt-title" className="db-booking__alt-title">
          Ili odmah kontaktirajte salon
        </h2>
        <div className="db-booking__alt-actions">
          <a href={telHref(brand.contact.phone)} className="db-btn db-btn--ghost">
            Telefon
          </a>
          {waHref && (
            <a href={waHref} className="db-btn db-btn--ghost" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          <a href={mailHref} className="db-btn db-btn--ghost">
            Email s odabranim terminom
          </a>
          <Link to="/kontakt" className="db-btn db-btn--ghost">
            Kontakt
          </Link>
        </div>
      </section>
    </div>
  );
}
