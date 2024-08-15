import { DataSource } from 'typeorm';

import { GoalEntity } from '../entities/goal.entity';
import { ScheduleEntity } from '../entities/schedule.entity';

export const scheduleProviders = [
  {
    provide: 'ScheduleRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ScheduleEntity),
    inject: ['DataSource'],
  },
  {
    provide: 'GoalRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(GoalEntity),
    inject: ['DataSource'],
  },
];
