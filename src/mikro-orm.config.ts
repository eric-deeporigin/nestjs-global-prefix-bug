import 'ts-morph';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

import {
  defineConfig,
  LoadStrategy,
  Platform,
  TextType,
  Type,
} from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { Test } from './testing/entities/test.entity';

export default defineConfig({
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT'] || '5432'),
  user: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  dbName: process.env['POSTGRES_DB'],
  extensions: [Migrator],
  entities: [Test],
  loadStrategy: LoadStrategy.JOINED,
  forceUtcTimezone: true,
  metadataProvider: TsMorphMetadataProvider,
  discovery: {
    disableDynamicFileAccess: true,
    getMappedType(type: string, platform: Platform) {
      // override the mapping for string properties only, make the 'text' columns
      if (type === 'string') {
        return Type.getType(TextType);
      }

      return platform.getDefaultMappedType(type);
    },
  },
});
