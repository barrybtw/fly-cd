import express, { type Request, type Response } from 'express';
const app = express();

// import { sql } from './db.js';

import { lib } from '@/lib.js';
import { getPgVersion } from './db.js';
import { env } from './env.js';

const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  const thing = env.ENDPOINT_ID + lib();
  res.send(thing);
});

app.listen(port, () => {
  console.log(`Node Application listening on port ${port}`);
  getPgVersion();
});
