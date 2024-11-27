import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DrizzleModule,ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod':'.env',
  }), AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
