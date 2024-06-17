import { Injectable } from '@nestjs/common';
import { CreateTestingInput } from './dto/create-testing.input';
import { UpdateTestingInput } from './dto/update-testing.input';
import { MikroORM, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Test } from './entities/test.entity';

@Injectable()
export class TestingService {
  constructor(
    private readonly orm: MikroORM,
    @InjectRepository(Test) private readonly testRepo: EntityRepository<Test>,
  ) {}
  create(createTestingInput: CreateTestingInput) {
    return 'This action adds a new testing';
  }

  findAll() {
    return `This action returns all testing`;
  }

  findOne(id: number) {
    return this.testRepo.findOneOrFail({ id: `${id}` });
  }

  update(id: number, updateTestingInput: UpdateTestingInput) {
    return `This action updates a #${id} testing`;
  }

  remove(id: number) {
    return `This action removes a #${id} testing`;
  }
}
