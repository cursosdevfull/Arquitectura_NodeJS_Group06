import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { CourseDeletedEvent } from '../../domain/events/course-deleted';

@EventsHandler(CourseDeletedEvent)
export class CourseDeletedHandler implements IEventHandler {
  handle(event: CourseDeletedEvent) {
    console.log('CourseDeletedEvent handled', event);
  }

  /* handle(event: any) {
    throw new Error('Method not implemented.');
  } */
}
