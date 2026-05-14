import { Link } from 'react-router-dom';
import type { LegalDoc } from '@/i18n/legalDocs';
import { legalLastUpdated } from '@/i18n/legalDocs';
import { useLocale } from '@/i18n/LocaleContext';

type Props = {
  doc: LegalDoc;
};

export function LegalArticle({ doc }: Props) {
  const { L } = useLocale();

  return (
    <div className="db-shell db-page db-legal">
      <Link to="/" className="db-legal__back">
        {doc.back}
      </Link>
      <header className="db-legal__head">
        <h1 className="db-page__title">{doc.title}</h1>
        <p className="db-legal__notice">{doc.notice}</p>
        <p className="db-legal__updated" role="note">
          {L.common.lastUpdated} {legalLastUpdated}
        </p>
      </header>
      <div className="db-legal__content">
        {doc.sections.map((sec, i) => (
          <section key={i} className="db-legal__section">
            {sec.heading ? <h2 className="db-legal__h2">{sec.heading}</h2> : null}
            {sec.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
