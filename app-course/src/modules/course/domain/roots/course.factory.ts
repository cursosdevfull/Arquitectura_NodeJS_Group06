import { v4 as uuidv4 } from 'uuid';

import { Goal } from '../entities/goal';
import { GoalVO } from '../value-objects/goal.vo';
import { RequerimentVO } from '../value-objects/requeriment.vo';
import { SyllabusVO } from '../value-objects/syllabus.vo';
import { TitleVO } from '../value-objects/title.vo';
import { Course, CourseProps } from './course';

export class CourseFactory {
  static create(props: CourseProps): Course {
    if (props.syllabus && props.syllabus.length < 1)
      throw new Error('Course must have at least one syllabus');

    const goalsVO = new GoalVO(props.goals, 1);
    const requerimentsVO = new RequerimentVO(props.requeriments, 1);
    const syllabusVO = new SyllabusVO(props.syllabus, 1);
    const titleVO = new TitleVO(props.title, 3);

    const courseId = props.courseId ?? uuidv4();

    return new Course({
      ...props,
      title: titleVO.value,
      goals: goalsVO.value,
      requeriments: requerimentsVO.value,
      syllabus: syllabusVO.value,
      courseId,
    });
  }
}

const props: CourseProps = {
  title: 'NestJS',
  level: 'Intermediate',
  goals: [new Goal('Learn how to use NestJS')],
};

const course = CourseFactory.create(props);

console.log(course);

course.update({ title: 'Lerna' });

console.log(course);
