import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001);
  const config = new DocumentBuilder()
  .setTitle('PUZZ PRAC')
  .setDescription("PUZZ PRAC API's Documentation")
  .setVersion('1.0')
  .addTag('Puzzles')
  .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
}
bootstrap();
