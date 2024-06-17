import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';
import ormConfig from './mikro-orm.config';
import { MikroORM } from '@mikro-orm/core';
import { TestingModule } from './testing/testing.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      bodyParserConfig: false,
    }),
    MikroOrmModule.forRoot(ormConfig),
    TestingModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  constructor(
    private readonly orm: MikroORM,
    private readonly logger: Logger,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
