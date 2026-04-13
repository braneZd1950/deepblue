import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons/SocialIcons';
import { brand } from '@/config/brand';

export function Footer() {
  return (
    <footer className="db-footer">
      <div className="db-shell db-footer__grid">
        <div>
          <p className="db-footer__title">{brand.name}</p>
          <p className="db-footer__muted">{brand.tagline}</p>
        </div>
        <div>
          <p className="db-footer__label">Kontakt</p>
          <p>{brand.contact.phone}</p>
          <p>{brand.contact.email}</p>
          <p>
            {brand.contact.address}, {brand.contact.city}
          </p>
          <p className="db-footer__kontakt-link">
            <Link to="/kontakt" className="db-footer__link">
              Stranica kontakt i karta →
            </Link>
          </p>
        </div>
        <div>
          <p className="db-footer__label">Društvene mreže</p>
          <div className="db-footer__social">
            {brand.social?.instagram && (
              <a
                href={brand.social.instagram}
                className="db-footer__link db-footer__link--social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="db-footer__icon" />
                <span>Instagram</span>
              </a>
            )}
            {brand.social?.facebook && (
              <a
                href={brand.social.facebook}
                className="db-footer__link db-footer__link--social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="db-footer__icon" />
                <span>Facebook</span>
              </a>
            )}
            {brand.social?.whatsapp && (
              <a
                href={brand.social.whatsapp}
                className="db-footer__link db-footer__link--social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="db-footer__icon" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="db-shell db-footer__bottom">
        <div className="db-footer__bottom-inner">
          <nav className="db-footer__legal" aria-label="Pravne informacije">
            <Link to="/pravila-privatnosti" className="db-footer__legal-link">
              Politika privatnosti
            </Link>
            <span className="db-footer__legal-sep" aria-hidden="true">
              ·
            </span>
            <Link to="/uvjeti-koristenja" className="db-footer__legal-link">
              Uvjeti korištenja
            </Link>
            <span className="db-footer__legal-sep" aria-hidden="true">
              ·
            </span>
            <Link to="/kolacici" className="db-footer__legal-link">
              Politika kolačića
            </Link>
          </nav>
          <span className="db-footer__copy">
            © {new Date().getFullYear()} {brand.domain} — demonstracijska verzija (mock podaci, bez produkcijskog API-ja).
          </span>
        </div>
      </div>
    </footer>
  );
}
