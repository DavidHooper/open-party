import { EntityManager, Repository } from 'typeorm';
import { Query, Resolver } from '@nestjs/graphql';
import { Party } from '../models';

@Resolver(() => Party)
export class PartyResolver {
  private partyRepository: Repository<Party>;

  constructor(entityManager: EntityManager) {
    this.partyRepository = entityManager.getRepository(Party);
  }

  @Query(() => [Party])
  async parties() {
    return this.partyRepository.find();
  }
}
