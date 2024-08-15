import * as path from 'node:path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DataSource',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'user',
        password: '12345',
        database: 'db',
        entities: [
          path.resolve(path.join(__dirname, '../', '/**/*.entity{.ts,.js}')),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
