import { Field, ID, ObjectType, HideField } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('parties')
export class Party {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
