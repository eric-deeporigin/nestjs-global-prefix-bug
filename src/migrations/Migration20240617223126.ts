import { Migration } from '@mikro-orm/migrations';

export class Migration20240617223126 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "test" ("id" varchar(255) not null, "name" varchar(255) not null, "description" varchar(255) not null, constraint "test_pkey" primary key ("id"));',
    );
  }
}
