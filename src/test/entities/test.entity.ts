import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Test {
  @PrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property()
  description!: string;
}
