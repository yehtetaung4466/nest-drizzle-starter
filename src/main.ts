import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GeneralErrorException, GeneralHttpException } from './shared/exceptions';

async function tailwind() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalFilters(
    new GeneralErrorException(),
    new GeneralHttpException(),
    // new DatabaseException(),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
tailwind();