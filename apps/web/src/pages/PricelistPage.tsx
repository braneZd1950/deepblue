import { useEffect, useMemo, useState } from 'react';
import type { ServiceCategory, ServiceItem } from '@salon/shared';
import { loadServices } from '@/services/api';
import { useLocale } from '@/i18n/LocaleContext';

const CATEGORY_ORDER: ServiceCategory[] = [
  'waxing',
  'face',
  'derma',
  'madero',
  'massage',
  'body',
  'nails',
  'gift',
  'other',
];

function waxMenCell(priceEurMen: number | undefined, fmt: Intl.NumberFormat): string {
  return priceEurMen === undefined ? '—' : fmt.format(priceEurMen);
}

export function PricelistPage() {
  const { L, locale } = useLocale();
  const [services, setServices] = useState<ServiceItem[]>([]);

  const eurFmt = useMemo(
    () =>
      new Intl.NumberFormat(locale === 'en' ? 'en-GB' : 'hr-HR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [locale],
  );

  useEffect(() => {
    void loadServices().then(setServices);
  }, []);

  const grouped = useMemo(() => {
    const m = new Map<ServiceCategory, ServiceItem[]>();
    for (const s of services) {
      const list = m.get(s.category) ?? [];
      list.push(s);
      m.set(s.category, list);
    }
    return m;
  }, [services]);

  const formatEur = (amount: number) => eurFmt.format(amount);

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">{L.pricelist.title}</h1>
        <p className="db-page__lead">{L.pricelist.lead}</p>
      </header>

      <div className="db-pricelist">
        {CATEGORY_ORDER.map((cat) => {
          const items = grouped.get(cat);
          if (!items?.length) return null;
          const isWaxing = cat === 'waxing';

          return (
            <section key={cat} className="db-pricelist__block">
              <h2 className="db-pricelist__cat">{L.pricelist.categories[cat]}</h2>
              <ul className={`db-pricelist__list${isWaxing ? ' db-pricelist__list--wax' : ''}`}>
                {isWaxing && (
                  <li className="db-pricelist__row db-pricelist__row--wax db-pricelist__row--wax-head">
                    <span className="db-pricelist__wax-service">{L.pricelist.waxService}</span>
                    <span className="db-pricelist__wax-m">{L.pricelist.waxM}</span>
                    <span className="db-pricelist__wax-z">{L.pricelist.waxZ}</span>
                  </li>
                )}
                {items.map((s) => (
                  <li
                    key={s.id}
                    className={`db-pricelist__row${isWaxing ? ' db-pricelist__row--wax' : ''}${
                      s.category === 'gift' ? ' db-pricelist__row--gift' : ''
                    }`}
                  >
                    <div className="db-pricelist__main">
                      <p className="db-pricelist__name">{s.name}</p>
                      {s.description ? <p className="db-pricelist__desc">{s.description}</p> : null}
                    </div>
                    {isWaxing ? (
                      <>
                        <span className="db-pricelist__wax-m db-pricelist__wax-price">
                          {waxMenCell(s.priceEurMen, eurFmt)}
                        </span>
                        <span className="db-pricelist__wax-z db-pricelist__wax-price">{formatEur(s.priceEur)}</span>
                      </>
                    ) : (
                      <div className="db-pricelist__meta">
                        {s.durationMin > 0 ? (
                          <span>
                            {s.durationMin} {L.pricelist.minUnit}
                          </span>
                        ) : null}
                        <span className="db-pricelist__price">
                          {s.category === 'gift' && s.priceEur === 0 ? '—' : formatEur(s.priceEur)}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
