import { EventDetail } from '../../../core/domain/domain/events/event';

export class CourseDeletedEvent extends EventDetail {
  constructor(public readonly courseId: string) {
    super();
  }
}
