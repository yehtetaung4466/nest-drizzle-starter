import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema  from './schema';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const DRIZZLE = 'drizzle';

// Define a type that includes all your schema tables
type Schema = typeof schema;


// Use this type for DrizzleInstance
export type DrizzleInstance = NodePgDatabase<Schema>;

export const drizzleProvider: Provider[] = [
  {
    provide: DRIZZLE,
    useFactory: async (configService: ConfigService) => {
      const connectionString = configService.get<string>('DATABASE_URL');
      const pool = new Pool({
        connectionString,
      });
      console.log(connectionString);
      
      await pool.connect();
      return drizzle(pool, { schema,logger:true});
    },
    inject: [ConfigService],
  },
];