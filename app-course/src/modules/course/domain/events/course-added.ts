import { EventDetail } from '../../../core/domain/domain/events/event';

export class CourseAddedEvent extends EventDetail {
  constructor(
    public readonly courseId: string,
    public readonly title: string,
  ) {
    super();
  }
}
