import { CourseAddedEvent } from '../../../course/domain/events/course-added';
import { CourseDeletedEvent } from '../../../course/domain/events/course-deleted';
import { CourseUpdatedEvent } from '../../../course/domain/events/course-updated';

export type EventSourcingRepository = {
  add(evt: CourseAddedEvent | CourseUpdatedEvent | CourseDeletedEvent): void;
};
