import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

import { TitleVO } from '../../../schedule/domain/value-objects/title.vo';
import { CourseAddedEvent } from '../events/course-added';
import { Course, CourseProps } from './course';

@Injectable()
export class CourseFactory {
  constructor(private readonly publisher: EventPublisher) {}

  create(props: CourseProps): Course {
    const courseId = props.courseId ?? uuidv4();
    const titleVO = new TitleVO(props.title, 3);

    const course = this.publisher.mergeObjectContext(
      new Course({ ...props, courseId }),
    );

    course.apply(
      new CourseAddedEvent(course.properties.courseId, course.properties.title),
    );

    return course;
  }
}
