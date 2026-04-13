export type ServiceCategory = 'face' | 'body' | 'nails' | 'hair' | 'other';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMin: number;
  priceEur: number;
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
}
