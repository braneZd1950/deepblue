import {
  mockGallery,
  mockReviews,
  mockServices,
  mockSlots,
  type GalleryItem,
  type Review,
  type ServiceItem,
  type BookingSlot,
} from '@salon/shared';

const base = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function safeJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${base}${path}`);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function loadServices(): Promise<ServiceItem[]> {
  const data = await safeJson<{ services: ServiceItem[] }>('/api/services');
  return data?.services ?? mockServices;
}

export async function loadGallery(): Promise<GalleryItem[]> {
  const data = await safeJson<{ items: GalleryItem[] }>('/api/gallery');
  return data?.items ?? mockGallery;
}

export async function loadReviews(): Promise<Review[]> {
  const data = await safeJson<{ reviews: Review[] }>('/api/reviews');
  return data?.reviews ?? mockReviews;
}

export async function loadSlots(): Promise<BookingSlot[]> {
  const data = await safeJson<{ slots: BookingSlot[] }>('/api/availability');
  return data?.slots ?? mockSlots;
}

export async function submitBooking(payload: {
  serviceId: string;
  slotId: string;
  name: string;
  email: string;
}): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`${base}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, message: body.error ?? 'Greška pri rezervaciji' };
    return { ok: true, message: body.message as string | undefined };
  } catch {
    return { ok: false, message: 'API nedostupan — koristite mock termin u dev okruženju.' };
  }
}
