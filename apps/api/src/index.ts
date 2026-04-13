import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { bookingRouter } from './routes/booking.js';
import { authRouter } from './routes/auth.js';
import { contentRouter } from './routes/content.js';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    mockApi: config.mockApi,
    mongoConfigured: Boolean(config.mongoUri),
  });
});

app.use('/api/auth', authRouter);
app.use('/api', bookingRouter);
app.use('/api', contentRouter);

app.listen(config.port, () => {
  console.log(`API http://localhost:${config.port}  (MOCK_API=${config.mockApi})`);
});
