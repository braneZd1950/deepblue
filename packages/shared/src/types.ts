export type ServiceCategory =
  | 'waxing'
  | 'face'
  | 'derma'
  | 'madero'
  | 'massage'
  | 'body'
  | 'nails'
  | 'gift'
  | 'other';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMin: number;
  /** Žene / jedinstvena cijena (kad nema stupca M). */
  priceEur: number;
  /** Muškarci — samo za depilaciju (stupac M u cjeniku). */
  priceEurMen?: number;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface SalonBrand {
  salonId: string;
  name: string;
  tagline: string;
  domain: string;
  logoUrl: string;
  accentColor: string;
  deepAccent: string;
  surfaceColor: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
  };
  social?: { instagram?: string; facebook?: string; whatsapp?: string };
  /** Online rezervacija (npr. Fresha). */
  onlineBooking?: { provider: 'fresha'; url: string };
}
