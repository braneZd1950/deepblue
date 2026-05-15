import type { ServiceCategory } from '@salon/shared';
import type { AppLocale } from './types';

export type UiBundle = {
  lang: { hr: string; en: string; aria: string };
  nav: { home: string; booking: string; pricelist: string; gallery: string; contact: string; ariaMain: string };
  navToggle: { open: string; close: string; backdrop: string };
  footer: {
    contact: string;
    social: string;
    contactPage: string;
    privacy: string;
    terms: string;
    cookies: string;
    legalNav: string;
    copyProd: string;
    copyDev: string;
    developerLabel: string;
  };
  cookieBanner: {
    aria: string;
    title: string;
    desc: string;
    link: string;
    essential: string;
    all: string;
  };
  seo: Record<string, string>;
  home: {
    titleLine1: string;
    titleEm: string;
    leadProd: string;
    leadDev: string;
    ctaBook: string;
    ctaPrice: string;
    ctaContact: string;
    chipFace: string;
    chipWax: string;
    chipMassage: string;
    chipNails: string;
    chipGel: string;
    sectionServices: string;
    featuredDuration: string;
    featuredIntro: string;
    featuredAfterGallery: string;
  };
  contact: {
    title: string;
    leadProd: string;
    leadDev: string;
    where: string;
    maps: string;
    direct: string;
    phone: string;
    email: string;
    whatsapp: string;
    sendMessage: string;
    hours: string;
    hoursBody: string;
    next: string;
    nextProd: string;
    nextDev: string;
    bookingForm: string;
    sendEmail: string;
    mailGreeting: string;
    mailServicePrompt: string;
    mailSlotPrompt: string;
    mailSignoff: string;
  };
  booking: {
    title: string;
    leadProd: string;
    leadDev: string;
    freshaTitle: string;
    freshaNote: string;
    freshaCta: string;
    freshaOpens: string;
    altLead: string;
    service: string;
    slot: string;
    name: string;
    email: string;
    submitProd: string;
    submitDev: string;
    demoScreen: string;
    altTitle: string;
    successLeadProd: string;
    successLeadApi: string;
    successLeadDemo: string;
    thankYou: string;
    guest: string;
    serviceLabel: string;
    slotLabel: string;
    emailLabel: string;
    hintProd: string;
    hintDev: string;
    call: string;
    whatsapp: string;
    emailCta: string;
    contactPage: string;
    backForm: string;
    bookedLabel: string;
    altContact: string;
    phone: string;
    loading: string;
    errorGeneric: string;
    selectService: string;
    selectSlot: string;
    emailWithSlot: string;
    mailHello: string;
    mailService: string;
    mailSlot: string;
    mailContact: string;
    mailClosing: string;
    waIntro: string;
  };
  gallery: {
    title: string;
    leadProd: string;
    leadDev: string;
    reviews: string;
    demoBadge: string;
    imageAlt: string;
    openImage: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
  };
  pricelist: {
    title: string;
    lead: string;
    categories: Record<ServiceCategory, string>;
    waxService: string;
    waxM: string;
    waxZ: string;
    minUnit: string;
  };
  reviewForm: {
    title: string;
    hint: string;
    nameLabel: string;
    namePh: string;
    messageLabel: string;
    messageHint: string;
    messagePh: string;
    submit: string;
    thankYou: string;
    guestDefault: string;
  };
  common: {
    lastUpdated: string;
  };
};

const seoHr: Record<string, string> = {
  '/': 'Početna',
  '/rezervacije': 'Rezervacije',
  '/cjenik': 'Cjenik',
  '/galerija': 'Galerija',
  '/kontakt': 'Kontakt',
  '/pravila-privatnosti': 'Politika privatnosti',
  '/uvjeti-koristenja': 'Uvjeti korištenja',
  '/kolacici': 'Politika kolačića',
};

const seoEn: Record<string, string> = {
  '/': 'Home',
  '/rezervacije': 'Bookings',
  '/cjenik': 'Price list',
  '/galerija': 'Gallery',
  '/kontakt': 'Contact',
  '/pravila-privatnosti': 'Privacy policy',
  '/uvjeti-koristenja': 'Terms of use',
  '/kolacici': 'Cookie policy',
};

const pricelistCatsHr: Record<ServiceCategory, string> = {
  waxing: 'Uklanjanje dlačica / Waxing',
  face: 'Tretmani lica / Facials',
  derma: 'Tretmani dermarollerom / Dermaroller treatments',
  madero: 'Madero-terapija / Madero-therapy',
  massage: 'Masaže tijela / Massages',
  body: 'Tretmani za tijelo / Body treatments',
  nails: 'Nokti / Nails',
  gift: 'Poklon bonovi / Gift cards',
  other: 'Ostalo',
};

const pricelistCatsEn: Record<ServiceCategory, string> = {
  waxing: 'Hair removal / Waxing',
  face: 'Facial treatments',
  derma: 'Dermaroller treatments',
  madero: 'Madero therapy',
  massage: 'Body massages',
  body: 'Body treatments',
  nails: 'Nails',
  gift: 'Gift cards',
  other: 'Other',
};

export const UI: Record<AppLocale, UiBundle> = {
  hr: {
    lang: { hr: 'HR', en: 'EN', aria: 'Jezik stranice: hrvatski ili engleski' },
    nav: {
      home: 'Početna',
      booking: 'Rezervacije',
      pricelist: 'Cjenik',
      gallery: 'Galerija',
      contact: 'Kontakt',
      ariaMain: 'Glavna navigacija',
    },
    navToggle: {
      open: 'Otvori izbornik',
      close: 'Zatvori izbornik',
      backdrop: 'Zatvori izbornik',
    },
    footer: {
      contact: 'Kontakt',
      social: 'Društvene mreže',
      contactPage: 'Stranica kontakt i karta →',
      privacy: 'Politika privatnosti',
      terms: 'Uvjeti korištenja',
      cookies: 'Politika kolačića',
      legalNav: 'Pravne informacije',
      copyProd: 'informacijska stranica salona.',
      copyDev: 'demonstracijska verzija (mock podaci, bez produkcijskog API-ja).',
      developerLabel: 'Izradio:',
    },
    cookieBanner: {
      aria: 'Obavijest o kolačićima',
      title: 'Kolačići',
      desc:
        'Koristimo kolačiće radi osnovnog rada stranice i — uz vašu suglasnost — za analitiku i poboljšanje iskustva. Više u',
      link: 'politici kolačića',
      essential: 'Samo nužni',
      all: 'Prihvati sve',
    },
    seo: seoHr,
    home: {
      titleLine1: 'Topao ambijent,',
      titleEm: 'stručan tim',
      leadProd:
        'Termine rezervirate online putem Fresha aplikacije — odaberite uslugu, dostupan termin i potvrdite rezervaciju. Cjenik na stranici je informativan.',
      leadDev:
        'Ova je demonstracijska verzija stranice: rezervacije, recenzije i cjenik koriste demo podatke; točne cijene i termine potvrdite u salonu ili na',
      ctaBook: 'Rezerviraj termin',
      ctaPrice: 'Pogledaj cjenik',
      ctaContact: 'Kontakt i lokacija',
      chipFace: 'Tretmani lica',
      chipWax: 'Depilacija',
      chipMassage: 'Masaže i maderoterapija',
      chipNails: 'Manikura i pedikura',
      chipGel: 'Gel i trajni lak',
      sectionServices: 'Istaknute usluge',
      featuredDuration: 'min',
      featuredIntro: 'Izdvojeno iz ponude salona. Na stranici',
      featuredAfterGallery:
        'možete ostaviti ocjenu i recenziju (u razvoju sprema se lokalno u pregledniku). Cijene su informativne — službeni grafički cjenik na',
    },
    contact: {
      title: 'Kontakt',
      leadProd: 'Svi podaci dolaze iz konfiguracije salona. Za termin najbrže koristite WhatsApp, email ili telefon.',
      leadDev:
        'Svi podaci dolaze iz konfiguracije brenda (white-label). Za demo možete odmah otvoriti kartu, poziv ili WhatsApp.',
      where: 'Lokacija',
      maps: 'Otvori u Google kartama',
      direct: 'Izravno',
      phone: 'Telefon',
      email: 'Email',
      whatsapp: 'WhatsApp',
      sendMessage: 'Pošalji poruku',
      hours: 'Radno vrijeme (informativno)',
      hoursBody: 'Pon–pet 9–20 h, sub 9–14 h (primjer). Točno radno vrijeme potvrdite u salonu ili na',
      next: 'Sljedeći koraci',
      nextProd:
        'Online rezervacija ide putem Fresha sustava — gumb Rezervacije vodi na stranicu za odabir usluge i termina.',
      nextDev:
        'Online rezervacija u demo verziji može koristiti mock termine; za stvarni termin najbrže je nazvati ili napisati na WhatsApp.',
      bookingForm: 'Rezerviraj na Fresha',
      sendEmail: 'Pošalji email',
      mailGreeting: 'Poštovani,',
      mailServicePrompt: 'Željena usluga:',
      mailSlotPrompt: 'Željeni termin:',
      mailSignoff: 'Lijep pozdrav',
    },
    booking: {
      title: 'Rezervacije',
      leadProd:
        'Online rezervacija termina odvija se putem Fresha sustava salona. Odaberite uslugu, slobodan termin i dovršite rezervaciju na Fresha stranici.',
      leadDev:
        'Online rezervacija termina odvija se putem Fresha sustava salona. Odaberite uslugu, slobodan termin i dovršite rezervaciju na Fresha stranici.',
      freshaTitle: 'Online rezervacija',
      freshaNote:
        'Kliknite gumb ispod — otvorit će se Fresha stranica salona DEEP BLUE gdje možete odabrati tretman, datum i vrijeme te potvrditi termin.',
      freshaCta: 'Rezerviraj na Fresha',
      freshaOpens: 'Otvara se u novoj kartici preglednika.',
      altLead: 'Za pitanja ili hitne upite možete nazvati salon ili poslati poruku.',
      service: 'Usluga',
      slot: 'Termin',
      name: 'Ime i prezime',
      email: 'Email',
      submitProd: 'Nastavi na kontakt',
      submitDev: 'Pošalji zahtjev',
      demoScreen: 'Demo: ekran potvrde',
      altTitle: 'Rezervacija — potvrda',
      successLeadProd:
        'Sljedeći korak: pošaljite iste podatke putem WhatsAppa ili emaila kako bi salon potvrdio termin.',
      successLeadApi: 'Zahtjev je zaprimljen (API u demo okruženju). U produkciji slijedi email ili SMS potvrda.',
      successLeadDemo: 'Ovo je ekran potvrde za prezentaciju klijenta (bez slanja na server).',
      thankYou: 'Hvala',
      guest: 'goste',
      serviceLabel: 'Usluga:',
      slotLabel: 'Termin:',
      emailLabel: 'Email:',
      hintProd: 'Termin nije rezerviran dok ga salon ne potvrdi odgovorom na vašu poruku ili pozivom.',
      hintDev: 'Za stvarnu potvrdu termina najčešće je najbrže nazvati salon ili poslati poruku na WhatsApp.',
      call: 'Nazovi',
      whatsapp: 'WhatsApp',
      emailCta: 'Email upit',
      contactPage: 'Stranica kontakt',
      backForm: 'Natrag na formu',
      bookedLabel: '(zauzeto)',
      altContact: 'Ili odmah kontaktirajte salon',
      phone: 'Telefon',
      loading: 'Slanje…',
      errorGeneric: 'Greška',
      selectService: 'Odaberite uslugu',
      selectSlot: 'Odaberite termin',
      emailWithSlot: 'Email s odabranim terminom',
      mailHello: 'Poštovani,',
      mailService: 'Željena usluga:',
      mailSlot: 'Termin:',
      mailContact: 'Kontakt:',
      mailClosing: 'Molim potvrdu termina.',
      waIntro: 'Bok, želim rezervirati:',
    },
    gallery: {
      title: 'Galerija',
      leadProd: 'Pregled stvarnih fotografija salona i tretmana.',
      leadDev: 'Pregled stvarnih fotografija salona i tretmana. Ispod možete ostaviti ocjenu i tekstualnu recenziju.',
      reviews: 'Recenzije',
      demoBadge: 'Vaša (demo)',
      imageAlt: 'Fotografija iz galerije salona DEEP BLUE, Zadar.',
      openImage: 'Otvori fotografiju u punoj veličini',
      lightboxClose: 'Zatvori',
      lightboxPrev: 'Prethodna slika',
      lightboxNext: 'Sljedeća slika',
    },
    pricelist: {
      title: 'Cjenik',
      lead:
        'DEEP BLUE — cijene u eurima prema službenom cjeniku salona. Za točne termine i akcije kontaktirajte nas putem WhatsAppa, emaila ili telefona.',
      categories: pricelistCatsHr,
      waxService: 'Usluga',
      waxM: 'M',
      waxZ: 'Ž',
      minUnit: 'min',
    },
    reviewForm: {
      title: 'Vaša recenzija',
      hint: 'U demo modu recenzija se sprema u vaš preglednik (localStorage) i prikazuje se zajedno s ostalim recenzijama. U produkciji bi se slala na server.',
      nameLabel: 'Ime ili inicijali',
      namePh: 'npr. Ana M.',
      messageLabel: 'Vaše iskustvo',
      messageHint:
        'Napišite nekoliko rečenica — što vas je posebno impresioniralo? Duljina {{min}}–{{max}} znakova (razmak se broji).',
      messagePh: 'Primjer: Njega je bila pažljiva, ambijent opuštajući, osoblje strpljivo i profesionalno…',
      submit: 'Objavi recenziju',
      thankYou: 'Hvala — recenzija je dodana.',
      guestDefault: 'Gost',
    },
    common: { lastUpdated: 'Posljednje ažuriranje:' },
  },
  en: {
    lang: { hr: 'HR', en: 'EN', aria: 'Site language: Croatian or English' },
    nav: {
      home: 'Home',
      booking: 'Bookings',
      pricelist: 'Price list',
      gallery: 'Gallery',
      contact: 'Contact',
      ariaMain: 'Main navigation',
    },
    navToggle: {
      open: 'Open menu',
      close: 'Close menu',
      backdrop: 'Close menu',
    },
    footer: {
      contact: 'Contact',
      social: 'Social media',
      contactPage: 'Contact page and map →',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      cookies: 'Cookie policy',
      legalNav: 'Legal information',
      copyProd: 'salon information website.',
      copyDev: 'demo build (mock data, no production API).',
      developerLabel: 'Developed by',
    },
    cookieBanner: {
      aria: 'Cookie notice',
      title: 'Cookies',
      desc:
        'We use cookies for basic site operation and — with your consent — for analytics and a better experience. Read more in our',
      link: 'cookie policy',
      essential: 'Essential only',
      all: 'Accept all',
    },
    seo: seoEn,
    home: {
      titleLine1: 'A warm setting,',
      titleEm: 'an expert team',
      leadProd:
        'Book appointments online via the salon’s Fresha booking page. Choose a service, time slot, and confirm your booking. The price list on this site is indicative.',
      leadDev:
        'This is a demo website: bookings, reviews and the price list use sample data; confirm prices and appointments with the salon or at',
      ctaBook: 'Book an appointment',
      ctaPrice: 'View price list',
      ctaContact: 'Contact and location',
      chipFace: 'Facial treatments',
      chipWax: 'Waxing',
      chipMassage: 'Massages and madero therapy',
      chipNails: 'Manicure and pedicure',
      chipGel: 'Gel and permanent polish',
      sectionServices: 'Featured services',
      featuredDuration: 'min',
      featuredIntro: 'A selection from the salon offer. On the',
      featuredAfterGallery:
        'page you can leave a rating and review (in development this may be stored locally in your browser). Prices are indicative — see the official graphic price list at',
    },
    contact: {
      title: 'Contact',
      leadProd: 'All details come from the salon configuration. For appointments, WhatsApp, email or phone is fastest.',
      leadDev:
        'All details come from the brand configuration (white-label). In demo mode you can open the map, call or WhatsApp right away.',
      where: 'Location',
      maps: 'Open in Google Maps',
      direct: 'Direct',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      sendMessage: 'Send a message',
      hours: 'Opening hours (indicative)',
      hoursBody: 'Mon–Fri 9 a.m.–8 p.m., Sat 9 a.m.–2 p.m. (example). Confirm actual hours with the salon or at',
      next: 'Next steps',
      nextProd:
        'Online booking is handled via Fresha — use the Bookings button to open the salon’s booking page.',
      nextDev:
        'Online booking in demo mode may use mock slots; for a real appointment calling or WhatsApp is usually quickest.',
      bookingForm: 'Book on Fresha',
      sendEmail: 'Send email',
      mailGreeting: 'Hello,',
      mailServicePrompt: 'Desired service:',
      mailSlotPrompt: 'Preferred time:',
      mailSignoff: 'Kind regards',
    },
    booking: {
      title: 'Bookings',
      leadProd:
        'Appointments are booked online through the salon’s Fresha system. Choose a service, available time, and complete your booking on Fresha.',
      leadDev:
        'Appointments are booked online through the salon’s Fresha system. Choose a service, available time, and complete your booking on Fresha.',
      freshaTitle: 'Online booking',
      freshaNote:
        'Click the button below to open the DEEP BLUE Fresha page, where you can choose a treatment, date, and time and confirm your appointment.',
      freshaCta: 'Book on Fresha',
      freshaOpens: 'Opens in a new browser tab.',
      altLead: 'For questions or urgent enquiries, call or message the salon.',
      service: 'Service',
      slot: 'Time slot',
      name: 'Full name',
      email: 'Email',
      submitProd: 'Continue to contact',
      submitDev: 'Send request',
      demoScreen: 'Demo: confirmation screen',
      altTitle: 'Booking — confirmation',
      successLeadProd: 'Next step: send the same details via WhatsApp or email so the salon can confirm your appointment.',
      successLeadApi: 'Request received (API in demo). In production you would get email or SMS confirmation.',
      successLeadDemo: 'This confirmation screen is for client presentation (no data sent to a server).',
      thankYou: 'Thank you',
      guest: 'guest',
      serviceLabel: 'Service:',
      slotLabel: 'Appointment:',
      emailLabel: 'Email:',
      hintProd: 'The appointment is not booked until the salon confirms by message or phone.',
      hintDev: 'For a real confirmation, calling the salon or WhatsApp is usually the fastest option.',
      call: 'Call',
      whatsapp: 'WhatsApp',
      emailCta: 'Email enquiry',
      contactPage: 'Contact page',
      backForm: 'Back to form',
      bookedLabel: '(unavailable)',
      altContact: 'Or contact the salon now',
      phone: 'Phone',
      loading: 'Sending…',
      errorGeneric: 'Error',
      selectService: 'Select a service',
      selectSlot: 'Select a time slot',
      emailWithSlot: 'Email with selected slot',
      mailHello: 'Hello,',
      mailService: 'Requested service:',
      mailSlot: 'Time slot:',
      mailContact: 'Contact:',
      mailClosing: 'Please confirm the appointment.',
      waIntro: 'Hi, I would like to book:',
    },
    gallery: {
      title: 'Gallery',
      leadProd: 'Photos of the salon and treatments.',
      leadDev: 'Photos of the salon and treatments. Below you can leave a rating and a short review.',
      reviews: 'Reviews',
      demoBadge: 'Yours (demo)',
      imageAlt: 'Photo from the DEEP BLUE salon gallery, Zadar.',
      openImage: 'Open photo full size',
      lightboxClose: 'Close',
      lightboxPrev: 'Previous image',
      lightboxNext: 'Next image',
    },
    pricelist: {
      title: 'Price list',
      lead:
        'DEEP BLUE — prices in euros according to the salon official list. For appointments and promotions contact us via WhatsApp, email or phone.',
      categories: pricelistCatsEn,
      waxService: 'Service',
      waxM: 'M',
      waxZ: 'W',
      minUnit: 'min',
    },
    reviewForm: {
      title: 'Your review',
      hint: 'In demo mode your review is stored in your browser (localStorage) and shown together with other reviews. In production it would be sent to a server.',
      nameLabel: 'Name or initials',
      namePh: 'e.g. A. M.',
      messageLabel: 'Your experience',
      messageHint:
        'Write a few sentences — what impressed you most? Length {{min}}–{{max}} characters (spaces count).',
      messagePh: 'Example: The treatment was thorough, the atmosphere relaxing, the staff patient and professional…',
      submit: 'Post review',
      thankYou: 'Thank you — your review was added.',
      guestDefault: 'Guest',
    },
    common: { lastUpdated: 'Last updated:' },
  },
};
