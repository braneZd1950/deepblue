import { Router } from 'express';
import { mockStore } from '../data/mockStore.js';
import { randomUUID } from 'crypto';

export const bookingRouter = Router();

bookingRouter.get('/availability', (_req, res) => {
  res.json({ slots: mockStore.slots });
});

bookingRouter.post('/bookings', (req, res) => {
  const { serviceId, slotId, name, email } = req.body ?? {};
  if (!serviceId || !slotId || !name || !email) {
    res.status(400).json({ error: 'Nedostaju polja: serviceId, slotId, name, email' });
    return;
  }
  const slot = mockStore.slots.find((s) => s.id === slotId && s.available);
  if (!slot) {
    res.status(409).json({ error: 'Termin nije dostupan' });
    return;
  }
  slot.available = false;
  const booking = {
    id: randomUUID(),
    serviceId,
    slotId,
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  mockStore.bookings.push(booking);
  res.status(201).json({ booking, message: 'Mock potvrda — u produkciji: email/SMS' });
});

bookingRouter.get('/bookings/me', (_req, res) => {
  res.json({ bookings: mockStore.bookings });
});
