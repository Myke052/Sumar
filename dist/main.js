'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@nestjs/core');
const app_module_1 = require('./app.module');
const path_1 = require('path');
const common_1 = require('@nestjs/common');

async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);

  // Habilita CORS para permitir acceso público
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });

  // Configura archivos estáticos
  app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
  app.useGlobalPipes(new common_1.ValidationPipe());

  // Escucha en el puerto definido por Vercel
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
