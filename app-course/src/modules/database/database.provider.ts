import { ConfigService } from '@nestjs/config';
import * as path from 'node:path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DataSource',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT')
          ? Number(configService.get('DB_PORT'))
          : 3306,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [
          path.resolve(path.join(__dirname, '../', '/**/*.entity{.ts,.js}')),
        ],
        synchronize: configService.get('DB_SYNC') === 'true' ? true : false,
        logging: configService.get('DB_LOGG') === 'true' ? true : false,
      });

      return dataSource.initialize();
    },
  },
];
