import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      dbName: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: +process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
    },
    postgres_url: process.env.DATABASE_URL,
    typeorm: {
      connection: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      logging: process.env.TYPEORM_SYNCHRONIZE === 'true',
      entities: process.env.TYPEORM_ENTITIES,
      migrations: process.env.TYPEORM_MIGRATIONS,
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
    },
    apiKey: process.env.API_KEY,
  };
});
