import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Test } from './entities/test.entity';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test) private readonly testRepo: EntityRepository<Test>,
  ) {}

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return this.testRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
