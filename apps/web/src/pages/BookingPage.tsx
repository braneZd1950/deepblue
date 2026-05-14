import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import type { BookingSlot, ServiceItem } from '@salon/shared';
import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';
import { mailtoBooking, telHref } from '@/lib/contactLinks';
import { loadServices, loadSlots, submitBooking } from '@/services/api';
import { Button } from '@/components/ui/Button';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { useLocale } from '@/i18n/LocaleContext';

type Panel = 'form' | 'success';

const isProdBuild = import.meta.env.PROD;

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
  const { L, locale } = useLocale();
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
    const dash = '—';
    return [
      L.booking.mailHello,
      '',
      `${L.booking.mailService} ${service?.name ?? dash}`,
      `${L.booking.mailSlot} ${slot ? `${slot.date} ${slot.time}` : dash}`,
      `${L.booking.mailContact} ${name}, ${email}`,
      '',
      L.booking.mailClosing,
    ];
  }, [L.booking, service, slot, name, email]);

  const mailHref = useMemo(() => mailtoBooking(brand, summaryLines), [brand, summaryLines]);

  const waHref = useMemo(() => {
    if (!brand.social?.whatsapp) return null;
    const body = `${L.booking.waIntro} ${service?.name ?? '—'}${slot ? `, ${slot.date} ${slot.time}` : ''}. ${name}`;
    return waWithText(brand.social.whatsapp, body);
  }, [brand.social?.whatsapp, service, slot, name, L.booking]);

  function resetFlow() {
    setPanel('form');
    setSuccessFromApi(false);
    setMessage(null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (isProdBuild) {
      setSuccessFromApi(false);
      setPanel('success');
      return;
    }
    setLoading(true);
    const res = await submitBooking({ serviceId, slotId, name, email });
    setLoading(false);
    if (res.ok) {
      setSuccessFromApi(true);
      setPanel('success');
      setMessage(null);
      return;
    }
    setMessage(res.message ?? L.booking.errorGeneric);
  }

  function showDemoSuccess() {
    setSuccessFromApi(false);
    setPanel('success');
    setMessage(null);
  }

  const namePh = locale === 'en' ? 'Jane Doe' : 'Ana Anić';
  const emailPh = locale === 'en' ? 'jane@example.com' : 'ana@primjer.hr';

  if (panel === 'success') {
    return (
      <div className="db-shell db-page">
        <header className="db-page__head">
          <h1 className="db-page__title">{L.booking.altTitle}</h1>
          <p className="db-page__lead">
            {isProdBuild
              ? L.booking.successLeadProd
              : successFromApi
                ? L.booking.successLeadApi
                : L.booking.successLeadDemo}
          </p>
        </header>

        <div className="db-booking-success">
          <p className="db-booking-success__greet">
            {L.booking.thankYou}, {name || L.booking.guest}.
          </p>
          <ul className="db-booking-success__list">
            <li>
              <strong>{L.booking.serviceLabel}</strong> {service?.name}
            </li>
            <li>
              <strong>{L.booking.slotLabel}</strong> {slot ? `${slot.date} ${slot.time}` : '—'}
            </li>
            <li>
              <strong>{L.booking.emailLabel}</strong> {email}
            </li>
          </ul>
          <p className="db-booking-success__hint">{isProdBuild ? L.booking.hintProd : L.booking.hintDev}</p>
          <div className="db-booking-success__actions">
            <a href={telHref(brand.contact.phone)} className="db-btn db-btn--accent">
              {L.booking.call} {brand.contact.phone}
            </a>
            {waHref && (
              <a href={waHref} className="db-btn db-btn--ghost" target="_blank" rel="noopener noreferrer">
                {L.booking.whatsapp}
              </a>
            )}
            <a href={mailHref} className="db-btn db-btn--ghost">
              {L.booking.emailCta}
            </a>
            <Link to="/kontakt" className="db-btn db-btn--outline">
              {L.booking.contactPage}
            </Link>
          </div>
          <Button type="button" variant="ghost" onClick={resetFlow}>
            {L.booking.backForm}
          </Button>
        </div>
      </div>
    );
  }

  const msgErr =
    message &&
    (message.includes('Greška') ||
      message.includes('nedostupan') ||
      message.toLowerCase().includes('error') ||
      message === L.booking.errorGeneric);

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">{L.booking.title}</h1>
        <p className="db-page__lead">{isProdBuild ? L.booking.leadProd : L.booking.leadDev}</p>
      </header>

      <form className="db-form" onSubmit={onSubmit}>
        <div className="db-field">
          <CustomSelect
            label={L.booking.service}
            value={serviceId}
            required
            placeholder={L.booking.selectService}
            options={services.map((s) => ({
              value: s.id,
              label: `${s.name} — ${s.priceEur} €`,
            }))}
            onChange={setServiceId}
          />
        </div>

        <div className="db-field">
          <CustomSelect
            label={L.booking.slot}
            value={slotId}
            required
            placeholder={L.booking.selectSlot}
            options={slots.map((b) => ({
              value: b.id,
              label: `${b.date} ${b.time}${b.available ? '' : ` ${L.booking.bookedLabel}`}`,
              disabled: !b.available,
            }))}
            onChange={setSlotId}
          />
        </div>

        <label className="db-field">
          <span>{L.booking.name}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required placeholder={namePh} />
        </label>

        <label className="db-field">
          <span>{L.booking.email}</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder={emailPh} />
        </label>

        {message && (
          <p className={`db-form__msg${msgErr ? ' db-form__msg--err' : ''}`}>{message}</p>
        )}

        <div className="db-booking__submit-row">
          <Button type="submit" variant="accent" disabled={loading}>
            {loading ? L.booking.loading : isProdBuild ? L.booking.submitProd : L.booking.submitDev}
          </Button>
          {!isProdBuild && (
            <Button type="button" variant="outline" onClick={showDemoSuccess}>
              {L.booking.demoScreen}
            </Button>
          )}
        </div>
      </form>

      <section className="db-booking__alt" aria-labelledby="booking-alt-title">
        <h2 id="booking-alt-title" className="db-booking__alt-title">
          {L.booking.altContact}
        </h2>
        <div className="db-booking__alt-actions">
          <a href={telHref(brand.contact.phone)} className="db-btn db-btn--ghost">
            {L.booking.phone}
          </a>
          {waHref && (
            <a href={waHref} className="db-btn db-btn--ghost" target="_blank" rel="noopener noreferrer">
              {L.booking.whatsapp}
            </a>
          )}
          <a href={mailHref} className="db-btn db-btn--ghost">
            {L.booking.emailWithSlot}
          </a>
          <Link to="/kontakt" className="db-btn db-btn--ghost">
            {L.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
