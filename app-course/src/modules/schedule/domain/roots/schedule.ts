import { v4 as uuidv4 } from 'uuid';

import { BaseRoot } from '../../../core/domain/base-root';
import { Goal } from '../entities/goal';
import { GoalVO } from '../value-objects/goal.vo';
import { RequerimentVO } from '../value-objects/requeriment.vo';
import { SyllabusVO } from '../value-objects/syllabus.vo';

type SchedulePropsEssentials = {
  description: string;
  courseId: string;
};

type SchedulePropsOptionals = {
  scheduleId: string;
  level: string;
  requeriments: string[];
  goals: Goal[];
  syllabus: string[];
  isActive: boolean;
};

export type ScheduleProps = SchedulePropsEssentials &
  Partial<SchedulePropsOptionals>;
export type SchedulePropsUpdate = Partial<
  SchedulePropsEssentials & Omit<SchedulePropsOptionals, 'scheduleId'>
>;

export class Schedule extends BaseRoot {
  scheduleId!: string;
  courseId!: string;
  description!: string;
  level!: string;
  requeriments!: string[];
  goals!: Goal[];
  syllabus!: string[];

  constructor(props: ScheduleProps) {
    super();

    Object.assign(this, props);
    this.isActive = props.isActive ?? true;
    this.createdAt = new Date();
  }

  get properties() {
    return {
      scheduleId: this.scheduleId,
      courseId: this.courseId,
      level: this.level,
      requeriments: this.requeriments,
      goals: this.goals,
      syllabus: this.syllabus,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      description: this.description,
    };
  }

  update(props: SchedulePropsUpdate) {
    new GoalVO(props.goals, 1);
    new RequerimentVO(props.requeriments, 1);
    new SyllabusVO(props.syllabus, 1);

    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.isActive = false;
    this.deletedAt = new Date();
  }

  clone(): Schedule {
    const clone = Object.create(this);
    Object.assign(clone, this);

    const courseId = this.courseId ?? uuidv4();
    Object.assign(clone, {
      courseId,
      scheduleId: uuidv4(),
      isActive: false,
      createdAt: new Date(),
      updateAt: null,
      deletedAt: null,
    });

    return clone;
  }
}
