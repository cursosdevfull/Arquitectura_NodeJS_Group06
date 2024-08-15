import { v4 as uuidv4 } from 'uuid';

import { TitleVO } from '../../../schedule/domain/value-objects/title.vo';
import { Course, CourseProps } from './course';

export class CourseFactory {
  static create(props: CourseProps): Course {
    const courseId = props.courseId ?? uuidv4();
    const titleVO = new TitleVO(props.title, 3);

    return new Course({
      ...props,
      title: titleVO.value,
      courseId,
    });
  }
}
