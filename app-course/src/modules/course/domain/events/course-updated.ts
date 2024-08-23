import { EventDetail } from '../../../core/domain/domain/events/event';

export class CourseUpdatedEvent extends EventDetail {
  constructor(
    public readonly courseId: string,
    public readonly title: string,
  ) {
    super();
  }
}
