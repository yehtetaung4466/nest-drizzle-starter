import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({
    path: process.cwd() + (process.env.NODE_ENV === 'production' ? '.env.prod':'.env')
}); // Load environment variables from .env file

export default defineConfig({
    schema: './src/drizzle/schema', // Path to your schema file
    out: './src/drizzle/migrations', // Path to store migrations
    // driver: 'pglite', // Database driver (for PostgreSQL
    dbCredentials: {
        url: process.env.DATABASE_URL!, // Connection string from environment variables
    },
    dialect: 'postgresql',
});
