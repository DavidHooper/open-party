import 'dotenv/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { modules } from './app/modules';
import databases from './config/db/database';

const dbConfig = databases[process.env.NODE_ENV] || databases['development'];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      migrations: [],
      cli: {},
      entities: ['dist/**/*.model{.ts,.js}'],
      autoLoadEntities: true,
    }),
    ...modules,
    GraphQLModule.forRoot({
      path: '/api/graphql',
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [],
})
export class AppModule {}
