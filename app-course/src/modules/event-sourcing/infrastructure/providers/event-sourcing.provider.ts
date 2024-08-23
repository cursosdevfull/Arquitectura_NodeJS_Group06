import { DataSource } from 'typeorm';

import { EventSourcingEntity } from '../entities/event-sourcing.entity';

export const eventsourcingProviders = [
  {
    provide: 'EventSourcingRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EventSourcingEntity),
    inject: ['DataSource'],
  },
];
