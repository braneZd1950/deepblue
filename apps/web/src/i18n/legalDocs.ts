import type { AppLocale } from './types';

export type LegalSection = {
  heading?: string;
  paragraphs: string[];
};

export type LegalDoc = {
  title: string;
  notice: string;
  back: string;
  sections: LegalSection[];
};

export const termsLegal: Record<AppLocale, LegalDoc> = {
  hr: {
    title: 'Uvjeti korištenja',
    notice:
      'Ovi uvjeti reguliraju korištenje ove web stranice kozmetičkog salona DEEP BLUE. Za pitanja o uslugama i terminima kontaktirajte salon izravno.',
    back: '← Natrag na početnu',
    sections: [
      {
        heading: '1. Opći podaci',
        paragraphs: [
          'Vlasnik i operator ove stranice je kozmetički salon DEEP BLUE, Zadar (u daljnjem tekstu: „salon”). Stranica služi informativnim svrhama (prezentacija usluga, cjenik, kontakt, galerija) te olakšanju upita za termin putem emaila ili WhatsAppa, ovisno o konfiguraciji stranice.',
        ],
      },
      {
        heading: '2. Prihvaćanje uvjeta',
        paragraphs: [
          'Korištenjem stranice potvrđujete da ste pročitali ove uvjete i politiku privatnosti. Ako se ne slažete, nemojte koristiti stranicu.',
        ],
      },
      {
        heading: '3. Informacije i točnost podataka',
        paragraphs: [
          'Salon nastoji održavati točne opise usluga i cijene. Cjenik na stranici može biti informativan; moguće su izmjene cijena, trajanja ili raspoloživosti usluga. Obvezujuće informacije potvrdite u salonu ili putem izravnog kontakta.',
        ],
      },
      {
        heading: '4. Rezervacije i komunikacija',
        paragraphs: [
          'Online obrazac ili poveznice (email, WhatsApp) služe za slanje upita. Upit ne predstavlja automatski potvrđen termin. Ugovor o pružanju usluge nastaje tek kada salon izričito potvrdi termin i uvjete (npr. odgovorom na poruku, telefonom ili na drugi dogovoren način).',
          'Klijent je odgovoran za točnost podataka koje navede u upitu (ime, kontakt, odabrana usluga, željeni termin).',
        ],
      },
      {
        heading: '5. Ponašanje korisnika',
        paragraphs: [
          'Zabranjeno je zloupotrebljavanje stranice (npr. slanje lažnih upita, pokušaji proboja sigurnosti, skupljanje podataka robotima u suprotnosti s pravilima). Salon zadržava pravo ograničiti pristup u slučaju zloupotrebe.',
        ],
      },
      {
        heading: '6. Intelektualno vlasništvo',
        paragraphs: [
          'Sadržaj stranice (tekstovi, logotip, fotografije u okviru dopuštenja, grafički elementi) zaštićen je propisima o autorskim pravima, osim ako je drukčije naznačeno. Nije dopuštena reprodukcija u komercijalne svrhe bez pisanog odobrenja salona.',
        ],
      },
      {
        heading: '7. Ograničenje odgovornosti',
        paragraphs: [
          'Stranica se pruža „kakva jest”. Salon ne jamči neprekidnu dostupnost niti da je stranica potpuno bez grešaka. Za štetu nastalu ovisno o korištenju stranice primjenjuju se propisi Republike Hrvatske, uz mogućnost ograničenja odgovornosti u zakonski dopuštenom opsegu.',
        ],
      },
      {
        heading: '8. Poveznice trećih strana',
        paragraphs: [
          'Stranica može sadržavati poveznice (npr. društvene mreže, karte). Salon nije odgovoran za sadržaj ili prakse privatnosti trećih strana; preporučujemo čitanje njihovih pravila.',
        ],
      },
      {
        heading: '9. Izmjene uvjeta',
        paragraphs: [
          'Salon može izmijeniti ove uvjete. Datum zadnje izmjene bit će naveden na stranici. Nastavkom korištenja nakon izmjene smatra se da prihvaćate ažurirane uvjete.',
        ],
      },
      {
        heading: '10. Mjerodavno pravo i nadležnost',
        paragraphs: [
          'Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za sporove nadležan je stvarno nadležan sud u Republici Hrvatskoj, osim ako obvezujući propisi ne određuju drukčije.',
        ],
      },
    ],
  },
  en: {
    title: 'Terms of use',
    notice:
      'These terms govern the use of the DEEP BLUE beauty salon website. For questions about services and appointments, please contact the salon directly.',
    back: '← Back to home',
    sections: [
      {
        heading: '1. General information',
        paragraphs: [
          'This website is operated by the DEEP BLUE beauty salon, Zadar, Croatia (“the salon”). The site is provided for information (services, price list, contact, gallery) and to help you send appointment enquiries via email or WhatsApp, depending on how the site is configured.',
        ],
      },
      {
        heading: '2. Acceptance',
        paragraphs: [
          'By using the site you confirm that you have read these terms and the privacy policy. If you do not agree, please do not use the site.',
        ],
      },
      {
        heading: '3. Accuracy of information',
        paragraphs: [
          'The salon aims to keep service descriptions and prices accurate. Online price information may be indicative; prices, durations or availability may change. Please confirm binding details with the salon or via direct contact.',
        ],
      },
      {
        heading: '4. Bookings and communication',
        paragraphs: [
          'Online forms or links (email, WhatsApp) are used to send enquiries. An enquiry does not automatically confirm an appointment. A contract for services is formed only when the salon expressly confirms the appointment and conditions (e.g. by reply, phone or another agreed method).',
          'You are responsible for the accuracy of the information you provide (name, contact, chosen service, preferred time).',
        ],
      },
      {
        heading: '5. Acceptable use',
        paragraphs: [
          'You must not misuse the site (e.g. fake enquiries, security attacks, scraping contrary to these rules). The salon may restrict access in case of abuse.',
        ],
      },
      {
        heading: '6. Intellectual property',
        paragraphs: [
          'Site content (texts, logo, photographs where permitted, design) is protected by copyright unless stated otherwise. Commercial reproduction without written permission is not allowed.',
        ],
      },
      {
        heading: '7. Limitation of liability',
        paragraphs: [
          'The site is provided “as is”. The salon does not guarantee uninterrupted availability or that the site is error-free. Liability is governed by applicable law in Croatia, within legally permitted limits.',
        ],
      },
      {
        heading: '8. Third-party links',
        paragraphs: [
          'The site may link to third parties (e.g. social networks, maps). The salon is not responsible for their content or privacy practices; please read their policies.',
        ],
      },
      {
        heading: '9. Changes',
        paragraphs: [
          'The salon may update these terms. The “last updated” date will be shown where applicable. Continued use after changes means you accept the updated terms.',
        ],
      },
      {
        heading: '10. Governing law and jurisdiction',
        paragraphs: [
          'These terms are governed by the laws of the Republic of Croatia. Disputes fall under the jurisdiction of the competent courts in Croatia, unless mandatory law provides otherwise.',
        ],
      },
    ],
  },
};

export const privacyLegal: Record<AppLocale, LegalDoc> = {
  hr: {
    title: 'Politika privatnosti',
    notice:
      'Ova politika opisuje kako DEEP BLUE postupa s osobnim podacima prilikom korištenja ove web stranice, u skladu s Općom uredbom o zaštiti podataka (GDPR) i Zakonom o provedbi Opće uredbe (NN 42/18).',
    back: '← Natrag na početnu',
    sections: [
      {
        heading: '1. Voditelj obrade',
        paragraphs: [
          'Voditelj obrade osobnih podataka je kozmetički salon DEEP BLUE, Zadar. Kontakt za pitanja o privatnosti: koristite email ili telefon naveden na stranici Kontakt.',
        ],
      },
      {
        heading: '2. Koje kategorije podataka možemo obrađivati',
        paragraphs: [
          'Ovisno o tome kako koristite stranicu, mogu se obrađivati: tehnički podaci (npr. IP adresa, tip preglednika, datum i vrijeme pristupa — putem hostinga ili sigurnosnih logova), podaci koje sami unesete u obrazac za upit/rezervaciju (ime, email, odabrana usluga, željeni termin, sadržaj poruke), te — uz suglasnost — podaci vezani uz kolačiće opisane u politici kolačića.',
        ],
      },
      {
        heading: '3. Svrhe i pravna osnova obrade',
        paragraphs: [
          'Obrada radi prikaza stranice i sigurnosti: legitimni interes voditelja obrade i/ili izvršenje tehničkih koraka potrebnih za pružanje usluge informiranja.',
          'Obrada radi odgovora na vaš upit (rezervacija, kontakt): izvršenje koraka na zahtjev ispitanika prije sklapanja ugovora ili dogovora o usluzi (čl. 6. st. 1. (b) GDPR) te, gdje je primjenjivo, legitimni interes za komunikaciju s potencijalnim klijentom.',
          'Analitika ili marketinški kolačići — samo uz vašu suglasnost (čl. 6. st. 1. (a) GDPR), ako budu uključeni u budućnosti.',
        ],
      },
      {
        heading: '4. Zadržavanje podataka',
        paragraphs: [
          'Podaci iz upita zadržavaju se onoliko dugo koliko je potrebno za dogovor termina i vođenje poslovanja salona, osim ako zakon ne zahtijeva duže čuvanje. Logovi hostinga zadržavaju se prema pravilima pružatelja usluge hostinga.',
        ],
      },
      {
        heading: '5. Prenos izvan EGP-a',
        paragraphs: [
          'Ako pružatelji usluga (npr. hosting, email, analitika) obrađuju podatke izvan Europskog gospodarskog prostora, primjenjivat će se odgovarajuće zaštitne mjere (npr. standardni ugovorni klauzuli EU-a), sukladno obvezujućim propisima.',
        ],
      },
      {
        heading: '6. Vaša prava',
        paragraphs: [
          'U okviru GDPR-a imate pravo na pristup, ispravak, brisanje, ograničenje obrade, prigovor te — gdje je obrada temeljena na suglasnosti — pravo na povlačenje suglasnosti bez utjecaja na zakonitost obrade prije povlačenja.',
          'Za ostvarenje prava kontaktirajte salon putem kontakta na stranici. Rok za odgovor je obično do 30 dana, osim složenijih zahtjeva.',
        ],
      },
      {
        heading: '7. Pritužba nadzornom tijelu',
        paragraphs: [
          'Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP), Zagreb, ako smatrate da je obrada povrijedila propise o zaštiti osobnih podataka.',
        ],
      },
      {
        heading: '8. Sigurnost',
        paragraphs: [
          'Salon poduzima razumne tehničke i organizacijske mjere kako bi smanjio rizik neovlaštenog pristupa ili gubitka podataka. Nijedan sustav nije apsolutno siguran; molimo koristite sigurne mreže i ažurirane preglednike.',
        ],
      },
      {
        heading: '9. Izmjene politike',
        paragraphs: [
          'Politika se može ažurirati (npr. zbog novih funkcija stranice). Ažurirana verzija bit će objavljena na ovoj stranici s datumom zadnje izmjene gdje je primjenjivo.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    notice:
      'This policy explains how DEEP BLUE processes personal data when you use this website, in line with the GDPR and applicable Croatian law.',
    back: '← Back to home',
    sections: [
      {
        heading: '1. Data controller',
        paragraphs: [
          'The controller of your personal data is the DEEP BLUE beauty salon, Zadar, Croatia. For privacy questions, use the email or phone shown on the Contact page.',
        ],
      },
      {
        heading: '2. Categories of data we may process',
        paragraphs: [
          'Depending on how you use the site, we may process: technical data (e.g. IP address, browser type, date/time of access — via hosting or security logs), data you enter in enquiry/booking forms (name, email, chosen service, preferred time, message content), and — where you consent — data related to cookies as described in the cookie policy.',
        ],
      },
      {
        heading: '3. Purposes and legal bases',
        paragraphs: [
          'Operating the site and security: legitimate interests and/or technical steps needed to provide information services.',
          'Responding to your enquiry: steps at your request prior to entering a contract or arranging a service (GDPR Art. 6(1)(b)), and where applicable legitimate interests in communicating with prospective clients.',
          'Analytics or marketing cookies — only with your consent (GDPR Art. 6(1)(a)), if such tools are added later.',
        ],
      },
      {
        heading: '4. Retention',
        paragraphs: [
          'Enquiry data is kept as long as needed to arrange appointments and run the salon’s business, unless law requires longer retention. Hosting logs follow the hosting provider’s retention rules.',
        ],
      },
      {
        heading: '5. Transfers outside the EEA',
        paragraphs: [
          'If providers (e.g. hosting, email, analytics) process data outside the European Economic Area, appropriate safeguards (e.g. EU Standard Contractual Clauses) will be used where required by law.',
        ],
      },
      {
        heading: '6. Your rights',
        paragraphs: [
          'Under the GDPR you may have the right of access, rectification, erasure, restriction, objection and — where processing is consent-based — withdrawal of consent without affecting lawfulness of processing before withdrawal.',
          'To exercise your rights, contact the salon via the Contact page. We usually respond within 30 days unless the request is complex.',
        ],
      },
      {
        heading: '7. Supervisory authority',
        paragraphs: [
          'You have the right to lodge a complaint with the Croatian Personal Data Protection Agency (AZOP), Zagreb, if you believe processing infringes data protection law.',
        ],
      },
      {
        heading: '8. Security',
        paragraphs: [
          'The salon applies reasonable technical and organisational measures to reduce the risk of unauthorised access or loss of data. No system is perfectly secure; please use secure networks and up-to-date browsers.',
        ],
      },
      {
        heading: '9. Changes',
        paragraphs: [
          'This policy may be updated (e.g. when new site features are added). The updated version will be published here with a “last updated” date where applicable.',
        ],
      },
    ],
  },
};

export const cookiesLegal: Record<AppLocale, LegalDoc> = {
  hr: {
    title: 'Politika kolačića',
    notice:
      'Ova politika objašnjava što su kolačići, koje vrste se mogu koristiti na ovoj stranici i kako možete upravljati svojim odabirom.',
    back: '← Natrag na početnu',
    sections: [
      {
        heading: '1. Što su kolačići',
        paragraphs: [
          'Kolačići su male tekstualne datoteke koje se mogu spremiti na vaš uređaj prilikom posjeta web stranici. Omogućuju osnovne funkcije (npr. pamćenje postavki) ili — uz suglasnost — analitiku i poboljšanje iskustva.',
        ],
      },
      {
        heading: '2. Vrste kolačića koje koristimo',
        paragraphs: [
          'Nužni / tehnički: potrebni za ispravan rad stranice ili za pamćenje važnih postavki (npr. jezik sučelja ili vaš odabir suglasnosti za kolačiće).',
          'Funkcionalni: poboljšavaju korisničko iskustvo (npr. odabrani jezik).',
          'Analitički ili marketinški: koriste se samo ako su uključeni u stranicu i ako ste dali suglasnost putem bannera ili postavki.',
        ],
      },
      {
        heading: '3. Treće strane',
        paragraphs: [
          'Ako se u budućnosti uključe alati trećih strana (npr. Google Analytics, ugrađene društvene mreže), ova politika bit će ažurirana s popisom pružatelja, svrhom i trajanjem kolačića. Trenutačno se naglašava da suglasnost za ne-esencijalne kolačiće ne smatra se danom ako ih ne aktivirate eksplicitno.',
        ],
      },
      {
        heading: '4. Trajanje',
        paragraphs: [
          'Sesijski kolačići brišu se nakon zatvaranja preglednika. Trajni kolačići ostaju do isteka roka ili do ručnog brisanja u postavkama preglednika.',
        ],
      },
      {
        heading: '5. Upravljanje i pohrana odabira',
        paragraphs: [
          'Vaš odabir na banneru za kolačiće može se pohraniti u lokalnu pohranu preglednika (localStorage, ključ deepblue_cookie_consent) s vrijednostima essential (samo nužni) ili all (prihvaćeni svi predviđeni ne-esencijalni kolačići, ako postoje).',
          'Odabir jezika stranice može se pohraniti odvojeno (deepblue_locale). To nije marketinški kolačić već postavka sučelja.',
        ],
      },
      {
        heading: '6. Kako isključiti kolačiće u pregledniku',
        paragraphs: [
          'Većinu kolačića možete blokirati ili obrisati u postavkama svog preglednika (Chrome, Firefox, Safari, Edge). Napominjemo da blokiranje nužnih kolačića može onemogućiti pojedine funkcije stranice.',
        ],
      },
      {
        heading: '7. Veza s politikom privatnosti',
        paragraphs: [
          'Ako kolačići uključuju osobne podatke (npr. jedinstveni identifikatori u analitici), primjenjuje se i Politika privatnosti.',
        ],
      },
      {
        heading: '8. Ažuriranje',
        paragraphs: [
          'Politika kolačića može se mijenjati sukladno promjenama na stranici ili zakonodavstvu. Preporučujemo povremeni pregled ove stranice.',
        ],
      },
    ],
  },
  en: {
    title: 'Cookie policy',
    notice:
      'This policy explains what cookies are, which types may be used on this site, and how you can manage your choices.',
    back: '← Back to home',
    sections: [
      {
        heading: '1. What cookies are',
        paragraphs: [
          'Cookies are small text files that may be stored on your device when you visit a website. They support core functionality (e.g. remembering settings) or — with consent — analytics and improved experience.',
        ],
      },
      {
        heading: '2. Types of cookies we use',
        paragraphs: [
          'Strictly necessary / technical: required for the site to work properly or to remember important settings (e.g. interface language or your cookie consent choice).',
          'Functional: improve usability (e.g. selected language).',
          'Analytics or marketing: used only if implemented on the site and only if you consent via the banner or settings.',
        ],
      },
      {
        heading: '3. Third parties',
        paragraphs: [
          'If third-party tools are added in the future (e.g. analytics, embedded social widgets), this policy will be updated with providers, purposes and retention. Non-essential cookies are not treated as accepted unless you explicitly opt in.',
        ],
      },
      {
        heading: '4. Retention',
        paragraphs: [
          'Session cookies are removed when you close the browser. Persistent cookies remain until they expire or you delete them in browser settings.',
        ],
      },
      {
        heading: '5. Storing your choice',
        paragraphs: [
          'Your banner choice may be stored in browser local storage (key deepblue_cookie_consent) as essential (necessary only) or all (accepting all planned non-essential cookies, if any exist).',
          'Your selected site language may be stored separately (deepblue_locale). That is a UI preference, not a marketing cookie.',
        ],
      },
      {
        heading: '6. Browser controls',
        paragraphs: [
          'You can block or delete most cookies in your browser settings (Chrome, Firefox, Safari, Edge). Blocking strictly necessary cookies may break some features.',
        ],
      },
      {
        heading: '7. Privacy policy',
        paragraphs: [
          'Where cookies involve personal data (e.g. analytics identifiers), the Privacy policy also applies.',
        ],
      },
      {
        heading: '8. Updates',
        paragraphs: [
          'This cookie policy may change when the site or legal requirements change. Please review this page periodically.',
        ],
      },
    ],
  },
};

export const legalLastUpdated = '2026-05-12';
