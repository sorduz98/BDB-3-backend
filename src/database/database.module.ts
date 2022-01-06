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
        const { synchronize, logging } = configService.typeorm;

        return {
          type: 'postgres',
          host: host,
          port: port,
          username: user,
          password: password,
          database: dbName,
          autoLoadEntities: true,
          synchronize: synchronize,
          // logging: logging as LoggerOptions,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
