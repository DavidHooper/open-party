import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule as Console } from 'nestjs-console';
import { modules } from './app/modules';
import { modules as taskModules } from './tasks';
import databases from './config/db/database';

const dbConfig = databases[process.env.NODE_ENV] || databases['development'];

@Module({
  imports: [
    Console,
    TypeOrmModule.forRoot({
      ...dbConfig,
      migrations: [],
      cli: {},
      entities: ['dist/**/*.model{.ts,.js}'],
      autoLoadEntities: true,
      logging: ['error', 'warn'],
    }),
    ...modules,
  ],
  providers: [...taskModules],
})
export class ConsoleModule {}
