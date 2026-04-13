import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  children: ReactNode;
};

export function LegalDocumentPage({ title, children }: Props) {
  return (
    <div className="db-shell db-page db-legal">
      <Link to="/" className="db-legal__back">
        ← Natrag na početnu
      </Link>
      <header className="db-legal__head">
        <h1 className="db-page__title">{title}</h1>
        <p className="db-legal__notice">
          Informativni predložak za razvoj. Zamijenite pravnim tekstom prilagođenim vašem salonu i
          hrvatskom pravu prije produkcije.
        </p>
      </header>
      <div className="db-legal__content">{children}</div>
    </div>
  );
}
