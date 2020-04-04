import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { settings } from './config/settings';
import * as cluster from 'cluster';
import { cpus } from 'os';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(settings.server.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

if (cluster.isMaster && process.env['NODE_ENV'] !== 'development') {
  // Fork workers.
  for (var i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died with code ${code}`);
  });
} else {
  bootstrap();
}
