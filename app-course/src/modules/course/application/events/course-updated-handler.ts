import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseUpdatedEvent } from '../../domain/events/course-updated';

@EventsHandler(CourseUpdatedEvent)
export class CourseUpdatedHandler implements IEventHandler {
  handle(event: CourseUpdatedEvent) {
    console.log('CourseUpdatedEvent handled', event);
  }

  /* handle(event: any) {
    throw new Error('Method not implemented.');
  } */
}
