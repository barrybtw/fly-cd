import 'dotenv/config';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PGHOST: z.string(),
    PGDATABASE: z.string(),
    PGUSER: z.string(),
    PGPASSWORD: z.string(),
    ENDPOINT_ID: z.string(),
  },
  runtimeEnv: process.env,
});
