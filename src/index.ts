/* eslint-disable no-unused-vars */
import express, { Router, Response, Request } from 'express';
import { createServer } from 'http';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { createConnection } from 'typeorm';

import { register } from './repo/user';
import { isEmailValid } from './utils/middleware/emailValidator';
import { isPasswordValid } from './utils/middleware/passwordValidator';

require('dotenv').config();

async function main() {
  try {
    await createConnection();
  } catch (error) {
    console.log('database connection', error);
    return;
  }

  const app = express();
  app.use(express.json());
  const server = createServer(app);
  const router = Router();

  const RedisStoreWithSession = connectRedis(session);
  const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  });
  const redisStoreInstance = new RedisStoreWithSession({ client: redis });

  app.use(session({
    store: redisStoreInstance,
    name: process.env.COOKIE_NAME,
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }));
  app.use(router);

  router.post('/register', isEmailValid, isPasswordValid, async (req: Request, res: Response) => {
    const result = await register({ ...req.body });
    return res.status(200).json(result);
  });

  server.listen({ port: process.env.SERVER_PORT }, () => console.log(`Yai, our server is up and running on port ${process.env.SERVER_PORT}`));
}

main();
