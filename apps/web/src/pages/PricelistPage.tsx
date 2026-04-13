import { useEffect, useMemo, useState } from 'react';
import type { ServiceCategory, ServiceItem } from '@salon/shared';
import { loadServices } from '@/services/api';

const labels: Record<ServiceCategory, string> = {
  face: 'Tretmani lica',
  body: 'Tijelo i wellness',
  nails: 'Manikura i pedikura',
  hair: 'Kosa',
  other: 'Depilacija i ostalo',
};

export function PricelistPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);

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

  return (
    <div className="db-shell db-page">
      <header className="db-page__head">
        <h1 className="db-page__title">Cjenik</h1>
        <p className="db-page__lead">
          Usluge usklađene s javnom ponudom salona. Cijene u eurima su{' '}
          <strong>okvirne (demo za klijenta)</strong> — službeni cjenik u grafičkom obliku na deepblue.hr.
        </p>
      </header>

      <div className="db-pricelist">
        {Array.from(grouped.entries()).map(([cat, items]) => (
          <section key={cat} className="db-pricelist__block">
            <h2 className="db-pricelist__cat">{labels[cat]}</h2>
            <ul className="db-pricelist__list">
              {items.map((s) => (
                <li key={s.id} className="db-pricelist__row">
                  <div>
                    <p className="db-pricelist__name">{s.name}</p>
                    <p className="db-pricelist__desc">{s.description}</p>
                  </div>
                  <div className="db-pricelist__meta">
                    <span>{s.durationMin} min</span>
                    <span className="db-pricelist__price">{s.priceEur} €</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
