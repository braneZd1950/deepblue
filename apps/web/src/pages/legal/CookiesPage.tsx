import { LegalDocumentPage } from './LegalDocumentPage';

export function CookiesPage() {
  return (
    <LegalDocumentPage title="Politika kolačića">
      <p>
        Predložak: koje kolačiće koristite (nužni / funkcionalni / analitički / marketinški), treće
        strane (npr. analitika), trajanje, kako upravljati postavkama u pregledniku i poveznica na
        politiku privatnosti.
      </p>
      <p>
        U ovom razvojnom predlošku mogu se koristiti isključivo tehnički nužni kolačići (npr. sesija
        ili preferencije sučelja). Nakon dodavanja alata trećih strana ažurirajte ovu stranicu i
        banner za suglasnost ako je potrebno.
      </p>
      <p>
        Vaš odabir na banneru sprema se u pregledniku (localStorage, ključ{' '}
        <code>deepblue_cookie_consent</code>) kao vrijednost <code>essential</code> (samo nužni) ili{' '}
        <code>all</code> (prihvaćeni svi predviđeni kolačići). Za promjenu odabira obrišite podatke
        stranice ili dodajte u postavkama „Upravljanje kolačićima” kasnije.
      </p>
    </LegalDocumentPage>
  );
}
