import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(env.DATABASE_URL);
const db = drizzle(queryClient);
const result = await db.execute('select 1');
console.log(result);
