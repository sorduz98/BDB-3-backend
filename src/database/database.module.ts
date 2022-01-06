import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';
import { LoggerOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        const {
          entities,
          synchronize,
          logging,
          migrations,
          migrationsDir,
          migrationsTableName,
        } = configService.typeorm;

        return {
          type: 'postgres',
          host: host,
          port: port,
          username: user,
          password: password,
          database: dbName,
          entities: [entities],
          synchronize: synchronize,
          logging: logging as LoggerOptions,
          migrations: [migrations],
          migrationsDir: migrationsDir,
          migrationsTableName: migrationsTableName,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
