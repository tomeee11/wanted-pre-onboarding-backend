import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  autoLoadEntities: true,
  timezone: 'UTC',
};
