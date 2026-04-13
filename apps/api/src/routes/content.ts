import { Router } from 'express';
import { mockStore } from '../data/mockStore.js';

export const contentRouter = Router();

contentRouter.get('/services', (_req, res) => {
  res.json({ services: mockStore.services });
});

contentRouter.get('/gallery', (_req, res) => {
  res.json({ items: mockStore.gallery });
});

contentRouter.get('/reviews', (_req, res) => {
  res.json({ reviews: mockStore.reviews });
});
