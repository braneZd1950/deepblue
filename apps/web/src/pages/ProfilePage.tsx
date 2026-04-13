import { Link } from 'react-router-dom';
import { brand } from '@/config/brand';

type DemoBooking = {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'potvrđeno' | 'na čekanju' | 'završeno';
  note?: string;
};

const demoUser = {
  displayName: 'Ana Anić',
  email: 'ana@primjer.hr',
  phone: '+385 91 234 5678',
  memberSince: '2025-09-12',
  preferredContact: 'WhatsApp',
};

const upcomingBookings: DemoBooking[] = [
  {
    id: 'b-demo-1',
    serviceName: 'Klasični tretman lica',
    date: '2026-04-22',
    time: '10:30',
    status: 'potvrđeno',
    note: 'Molimo doći 5 min ranije.',
  },
  {
    id: 'b-demo-2',
    serviceName: 'Manikura — gel lak',
    date: '2026-05-03',
    time: '15:00',
    status: 'na čekanju',
  },
];

const pastBookings: DemoBooking[] = [
  {
    id: 'b-demo-p1',
    serviceName: 'Depilacija cijelih nogu',
    date: '2026-03-08',
    time: '11:00',
    status: 'završeno',
  },
  {
    id: 'b-demo-p2',
    serviceName: 'Masaža tijela — Relax',
    date: '2026-02-19',
    time: '17:30',
    status: 'završeno',
  },
];

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('hr-HR', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function statusClass(status: DemoBooking['status']) {
  if (status === 'potvrđeno') return 'db-profile__status db-profile__status--ok';
  if (status === 'na čekanju') return 'db-profile__status db-profile__status--pending';
  return 'db-profile__status db-profile__status--done';
}

export function ProfilePage() {
  return (
    <div className="db-shell db-page db-profile">
      <header className="db-page__head">
        <h1 className="db-page__title">Profil</h1>
        <p className="db-page__lead">
          Pregled podataka i termina u <strong>demo modu</strong> — prijava i spremanje u bazu dolaze u sljedećoj fazi.
          Prikaz je primjer onoga što klijent vidi nakon prijave.
        </p>
      </header>

      <p className="db-profile__demo-banner" role="status">
        Demonstracijski podaci · nisu povezani s pravim korisničkim računom
      </p>

      <section className="db-profile__section" aria-labelledby="profile-account">
        <h2 id="profile-account" className="db-profile__section-title">
          Podaci o računu
        </h2>
        <div className="db-card db-profile__card">
          <dl className="db-profile__dl">
            <div>
              <dt>Ime i prezime</dt>
              <dd>{demoUser.displayName}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${demoUser.email}`}>{demoUser.email}</a>
              </dd>
            </div>
            <div>
              <dt>Mobitel</dt>
              <dd>
                <a href={`tel:${demoUser.phone.replace(/\s/g, '')}`}>{demoUser.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Korisnik od</dt>
              <dd>{formatDate(demoUser.memberSince)}</dd>
            </div>
            <div>
              <dt>Preferirani kontakt</dt>
              <dd>{demoUser.preferredContact}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="db-profile__section" aria-labelledby="profile-upcoming">
        <div className="db-profile__section-head">
          <h2 id="profile-upcoming" className="db-profile__section-title">
            Nadolazeći termini
          </h2>
          <Link to="/rezervacije" className="db-profile__link-all">
            Novi termin →
          </Link>
        </div>
        <ul className="db-profile__booking-list">
          {upcomingBookings.map((b) => (
            <li key={b.id}>
              <article className="db-card db-profile__booking">
                <div className="db-profile__booking-top">
                  <h3 className="db-profile__booking-title">{b.serviceName}</h3>
                  <span className={statusClass(b.status)}>{b.status}</span>
                </div>
                <p className="db-profile__booking-meta">
                  {formatDate(b.date)} · {b.time} h · {brand.name}
                </p>
                {b.note && <p className="db-profile__booking-note">{b.note}</p>}
                <div className="db-profile__booking-actions">
                  <Link to="/kontakt" className="db-profile__text-link">
                    Promijeni termin (kontakt)
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="db-profile__section" aria-labelledby="profile-past">
        <h2 id="profile-past" className="db-profile__section-title">
          Zadnje posjete
        </h2>
        <ul className="db-profile__booking-list">
          {pastBookings.map((b) => (
            <li key={b.id}>
              <article className="db-card db-profile__booking db-profile__booking--past">
                <div className="db-profile__booking-top">
                  <h3 className="db-profile__booking-title">{b.serviceName}</h3>
                  <span className={statusClass(b.status)}>{b.status}</span>
                </div>
                <p className="db-profile__booking-meta">
                  {formatDate(b.date)} · {b.time} h
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="db-profile__section" aria-labelledby="profile-prefs">
        <h2 id="profile-prefs" className="db-profile__section-title">
          Obavijesti i privatnost (demo)
        </h2>
        <div className="db-card db-profile__card db-profile__card--muted">
          <ul className="db-profile__checklist">
            <li>Podsjetnik na termin (SMS / email) — uključeno u demo prikazu</li>
            <li>Marketing i akcije salona — isključeno</li>
            <li>
              <Link to="/pravila-privatnosti">Politika privatnosti</Link>
              {' · '}
              <Link to="/kolacici">Kolačići</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="db-profile__section" aria-labelledby="profile-actions">
        <h2 id="profile-actions" className="db-profile__section-title">
          Brze akcije
        </h2>
        <div className="db-profile__actions">
          <Link to="/rezervacije" className="db-btn db-btn--accent">
            Rezerviraj termin
          </Link>
          <Link to="/cjenik" className="db-btn db-btn--ghost">
            Cjenik
          </Link>
          <Link to="/kontakt" className="db-btn db-btn--ghost">
            Kontakt
          </Link>
          <Link to="/galerija" className="db-btn db-btn--outline">
            Recenzije i galerija
          </Link>
        </div>
      </section>
    </div>
  );
}
