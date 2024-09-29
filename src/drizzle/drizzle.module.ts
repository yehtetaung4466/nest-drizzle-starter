import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule to enable environment variables
import { drizzleProvider } from './drizzle.provider';

@Module({
  imports: [ConfigModule], // Import ConfigModule to use ConfigService
  providers: [...drizzleProvider],
  exports: [...drizzleProvider], // Export the provider to be used in other modules
})
export class DrizzleModule {}
