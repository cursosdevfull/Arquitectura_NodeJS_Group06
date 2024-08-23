import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseAddedEvent } from '../../domain/events/course-added';

@EventsHandler(CourseAddedEvent)
export class CourseAddedHandler implements IEventHandler {
  handle(event: CourseAddedEvent) {
    console.log('CourseAdded event handled', event);
  }

  /* handle(event: any) {
    throw new Error('Method not implemented.');
  } */
}
