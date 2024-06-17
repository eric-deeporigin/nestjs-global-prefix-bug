import { Module } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingResolver } from './testing.resolver';
import { Test } from './entities/test.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([Test])],
  providers: [TestingResolver, TestingService],
})
export class TestingModule {}
