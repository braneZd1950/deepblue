import type { SalonBrand } from '@salon/shared';

export function telHref(phone: string): string {
  let cleaned = phone.replace(/[^\d+]/g, '');
  if (!cleaned.startsWith('+')) cleaned = `+${cleaned}`;
  return `tel:${cleaned}`;
}

export function mapsUrl(brand: SalonBrand): string {
  const q = encodeURIComponent(`${brand.contact.address}, ${brand.contact.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function mailtoBooking(brand: SalonBrand, bodyLines: string[]): string {
  const subject = encodeURIComponent(`Upit / rezervacija — ${brand.name}`);
  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:${brand.contact.email}?subject=${subject}&body=${body}`;
}
