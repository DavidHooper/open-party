import { Module } from '@nestjs/common';
import { PartyResolver } from './resolvers/party.resolver';

@Module({
  providers: [PartyResolver],
  controllers: [],
})
export class PartyModule {}
