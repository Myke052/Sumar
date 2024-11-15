import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configura CORS para permitir acceso público
  app.enableCors({
    origin: '*', // Permite todas las solicitudes desde cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: false, // No permite el uso de cookies
  });

  // Configuración de archivos estáticos y tuberías de validación
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalPipes(new ValidationPipe());

  // Iniciar la aplicación en el puerto de Vercel o en el 3000 localmente
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
