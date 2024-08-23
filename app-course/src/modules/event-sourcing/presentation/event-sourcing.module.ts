import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database/database.module';

import { EventSourcingEventHandler } from '../application/events/event';
import { EventSourcingInfrastructure } from '../infrastructure/event-sourcing.infrastructure';
import { eventsourcingProviders } from '../infrastructure/providers/event-sourcing.provider';

const providersApplication = [EventSourcingEventHandler];

const providersInfrastructure = [EventSourcingInfrastructure];

@Module({
  imports: [DatabaseModule],
  providers: [
    ...eventsourcingProviders,
    ...providersApplication,
    ...providersInfrastructure,
  ],
  exports: [...providersInfrastructure],
})
export class EventSourcingModule {}
