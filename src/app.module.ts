import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DrizzleModule,ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod':'.env',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
