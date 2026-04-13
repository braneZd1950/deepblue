import type { SalonBrand } from './types.js';

/** Podaci usklađeni sa sadržajem s https://deepblue.hr / https://www.deepblue.hr (kontakt, radno vrijeme u opisu). */
export const deepblueBrand: SalonBrand = {
  salonId: 'deepblue-hr',
  name: 'DEEP BLUE',
  tagline: 'Kozmetički salon — Zadar',
  domain: 'deepblue.hr',
  logoUrl: '/brand/logo.jpg',
  accentColor: '#0f6e56',
  deepAccent: '#085041',
  surfaceColor: '#e1f5ee',
  contact: {
    phone: '+385 99 620 0337',
    email: 'info@deepblue.hr',
    address: 'Bana Josipa Jelačića 10 D',
    city: '23000 Zadar, Hrvatska',
  },
  social: {
    instagram: 'https://www.instagram.com/kozmetickisalondeepblue/',
    facebook: 'https://www.facebook.com/kozmetickisalondeepblue/',
    whatsapp: 'https://wa.me/385996200337',
  },
};
