import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CourseAddedEvent } from 'src/modules/course/domain/events/course-added';
import { CourseDeletedEvent } from 'src/modules/course/domain/events/course-deleted';
import { CourseUpdatedEvent } from 'src/modules/course/domain/events/course-updated';

import { EventSourcingRepository } from '../../domain/repositories/event-sourcing.repository';
import { EventSourcingInfrastructure } from '../../infrastructure/event-sourcing.infrastructure';

@EventsHandler(CourseAddedEvent, CourseDeletedEvent, CourseUpdatedEvent)
export class EventSourcingEventHandler implements IEventHandler {
  constructor(
    @Inject(EventSourcingInfrastructure)
    private readonly repository: EventSourcingRepository,
  ) {}

  handle(event: any) {
    this.repository.add(event);
    console.log('EventSourcing', event);
  }
}
