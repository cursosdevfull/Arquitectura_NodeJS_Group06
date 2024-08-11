import { DataSource } from 'typeorm';

import { CourseEntity } from '../entities/course';

export const courseProviders = [
  {
    provide: 'CourseRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CourseEntity),
    inject: ['DataSource'],
  },
];
