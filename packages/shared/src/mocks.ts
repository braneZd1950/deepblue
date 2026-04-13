import type { BookingSlot, GalleryItem, Review, ServiceItem } from './types.js';

/**
 * Usluge prema kategorijama s deepblue.hr (tretmani lica, depilacija, masaže, maderoterapija,
 * manikura/pedikura, VACUSLIM). Cijene su okvirne — službeni cjenik na stranici je u grafičkom obliku;
 * zamijenite točnim iznosima iz salona.
 */
export const mockServices: ServiceItem[] = [
  {
    id: 'svc-face-classic',
    name: 'Klasični tretman lica',
    category: 'face',
    durationMin: 60,
    priceEur: 55,
    description:
      'Čišćenje, piling, masaža lica i njega — uz preporuku preparata prilagođenih tipu kože (kao u ponudi salona).',
  },
  {
    id: 'svc-face-antiage',
    name: 'Anti-age tretman lica',
    category: 'face',
    durationMin: 75,
    priceEur: 72,
    description: 'Protocol usmjeren na zrelu kožu i dojam svježine; u skladu s opisom anti-age ponude na deepblue.hr.',
  },
  {
    id: 'svc-face-uzv',
    name: 'Tretman lica ultrazvukom (UZV)',
    category: 'face',
    durationMin: 50,
    priceEur: 48,
    description: 'Dubinsko čišćenje i njega uz ultrazvuk — jedna od opcija tretmana lica navedenih na stranici salona.',
  },
  {
    id: 'svc-depil-legs',
    name: 'Depilacija cijelih nogu',
    category: 'other',
    durationMin: 45,
    priceEur: 35,
    description: 'Uklanjanje dlačica voskom na cijelim nogama, prema opisu usluge depilacije na deepblue.hr.',
  },
  {
    id: 'svc-madero',
    name: 'Maderoterapija — Anticellulite & Body shaping',
    category: 'body',
    durationMin: 50,
    priceEur: 50,
    description: 'Anticellulitni i oblikujući protokol — kao maderoterapija u ponudi DEEP BLUE (body shaping).',
  },
  {
    id: 'svc-massage-relax',
    name: 'Masaža tijela — Relax',
    category: 'body',
    durationMin: 50,
    priceEur: 45,
    description: 'Opuštajuća masaža tijela u sklopu wellness ponude salona.',
  },
  {
    id: 'svc-manicure-gel',
    name: 'Manikura — gel lak',
    category: 'nails',
    durationMin: 75,
    priceEur: 38,
    description: 'Manikura uz dugotrajan finish; manikura i pedikura u programu salona.',
  },
  {
    id: 'svc-vacuslim',
    name: 'VACUSLIM 48',
    category: 'body',
    durationMin: 45,
    priceEur: 55,
    description: 'Tretman tijela naveden na deepblue.hr; detalje i točan cjenik provjerite u salonu ili na službenoj stranici.',
  },
];

export const mockGallery: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Tretmani lica',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc7e012d4364?w=800&q=80',
    caption: 'Njega kože lica — uz mogućnost dijagnostike (npr. Wood lampa) prema ponudi salona.',
  },
  {
    id: 'g-2',
    title: 'Topao ambijent salona',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    caption: 'DEEP BLUE — Zadar, Bana Josipa Jelačića 10 D.',
  },
  {
    id: 'g-3',
    title: 'Manikura i pedikura',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    caption: 'Nega noktiju u sklopu kozmetičke ponude.',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r-1',
    author: 'Ana M.',
    rating: 5,
    text: 'Stručan i ljubazan tim, osjećaj kao u hotelu — preporuka za Zadar.',
    date: '2026-03-02',
  },
  {
    id: 'r-2',
    author: 'Petra K.',
    rating: 5,
    text: 'Tretman lica i depilacija bez žurbe, sve uredno objašnjeno.',
    date: '2026-02-18',
  },
  {
    id: 'r-3',
    author: 'Iva R.',
    rating: 5,
    text: 'Za akcije pratim njihovu Facebook stranicu — usklađeno s onim što salon i piše na deepblue.hr.',
    date: '2026-01-30',
  },
];

export const mockSlots: BookingSlot[] = [
  { id: 'b-1', date: '2026-04-15', time: '09:00', available: true },
  { id: 'b-2', date: '2026-04-15', time: '10:30', available: true },
  { id: 'b-3', date: '2026-04-15', time: '12:00', available: false },
  { id: 'b-4', date: '2026-04-16', time: '11:00', available: true },
  { id: 'b-5', date: '2026-04-16', time: '15:30', available: true },
];
