import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT) || 4000,
  mockApi: process.env.MOCK_API !== 'false',
  mongoUri: process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'dev-only-secret',
};
