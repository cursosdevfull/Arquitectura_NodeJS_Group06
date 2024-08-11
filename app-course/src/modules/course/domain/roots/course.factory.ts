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
    /*     if (props.syllabus && props.syllabus.length < 1)
      throw new Error('Course must have at least one syllabus');

    const goalsVO = new GoalVO(props.goals, 1);
    const requerimentsVO = new RequerimentVO(props.requeriments, 1);
    const syllabusVO = new SyllabusVO(props.syllabus, 1);


    

    return new Course({
      ...props,
      title: titleVO.value,
      goals: goalsVO.value,
      requeriments: requerimentsVO.value,
      syllabus: syllabusVO.value,
      courseId,
    }); */
  }
}
