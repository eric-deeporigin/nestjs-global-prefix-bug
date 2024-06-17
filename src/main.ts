import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.use(express.json());
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
