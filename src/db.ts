import postgres from 'postgres';
import { env } from './env.js';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: true });

export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
