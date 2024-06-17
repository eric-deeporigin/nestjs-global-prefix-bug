import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { Test } from './test/entities/test.entity';

export default defineConfig({
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT'] || '5432'),
  user: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  dbName: process.env['POSTGRES_DB'],
  extensions: [Migrator],
  entities: [Test],
});
