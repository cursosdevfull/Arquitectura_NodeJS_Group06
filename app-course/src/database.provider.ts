import { DataSource } from 'typeorm';

import { CourseEntity } from './modules/course/infrastructure/entities/course';

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
        entities: [CourseEntity],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
