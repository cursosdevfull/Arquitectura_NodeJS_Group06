import { v4 as uuidv4 } from 'uuid';

import { GoalVO } from '../value-objects/goal.vo';
import { RequerimentVO } from '../value-objects/requeriment.vo';
import { SyllabusVO } from '../value-objects/syllabus.vo';
import { TitleVO } from '../value-objects/title.vo';
import { Schedule, ScheduleProps } from './schedule';

export class ScheduleFactory {
  static create(props: ScheduleProps): Schedule {
    const scheduleId = props.scheduleId ?? uuidv4();
    const titleVO = new TitleVO(props.description, 3);
    const goalsVO = new GoalVO(props.goals, 1);
    const requerimentsVO = new RequerimentVO(props.requeriments, 1);
    const syllabusVO = new SyllabusVO(props.syllabus, 1);

    return new Schedule({
      ...props,
      description: titleVO.value,
      goals: goalsVO.value,
      requeriments: requerimentsVO.value,
      syllabus: syllabusVO.value,
      scheduleId,
    });
  }
}
