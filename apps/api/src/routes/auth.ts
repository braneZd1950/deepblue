import { Router } from 'express';

export const authRouter = Router();

/** Stub: zamijenite JWT + User modelom */
authRouter.post('/register', (_req, res) => {
  res.status(501).json({
    message: 'Mock API — registracija nije implementirana. Koristite MOCK_API i statičke podatke na webu.',
  });
});

authRouter.post('/login', (_req, res) => {
  res.status(501).json({
    message: 'Mock API — prijava nije implementirana.',
  });
});
