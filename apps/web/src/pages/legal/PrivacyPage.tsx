import { LegalDocumentPage } from './LegalDocumentPage';

export function PrivacyPage() {
  return (
    <LegalDocumentPage title="Politika privatnosti">
      <p>
        Ovdje u produkciji unesite obradu osobnih podataka (GDPR): voditelj obrade, svrhe, pravna
        osnova, rokovi čuvanja, prava ispitanika, pritužbe AZOP-u, kontakt DPO-a ako postoji.
      </p>
      <p>
        Podaci s obrasca rezervacije (ime, e-mail, odabrana usluga i termin) tretiraju se isključivo
        u svrhu dogovora termina i komunikacije s klijentom, uz mogućnost povijesti rezervacija u
        korisničkom profilu nakon implementacije autentifikacije.
      </p>
    </LegalDocumentPage>
  );
}
