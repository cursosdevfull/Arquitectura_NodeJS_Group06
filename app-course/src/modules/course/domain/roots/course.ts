import { BaseRoot } from '../../../core/domain/base-root';
import { Goal } from '../entities/goal';
import { GoalVO } from '../value-objects/goal.vo';
import { RequerimentVO } from '../value-objects/requeriment.vo';
import { SyllabusVO } from '../value-objects/syllabus.vo';
import { TitleVO } from '../value-objects/title.vo';

type CoursePropsEssentials = {
  title: string;
};

type CoursePropsOptionals = {
  courseId: string;
  level: string;
  requeriments: string[];
  goals: Goal[];
  syllabus: string[];
  isActive: boolean;
};

export type CourseProps = CoursePropsEssentials & Partial<CoursePropsOptionals>;
export type CoursePropsUpdate = Partial<
  CoursePropsEssentials & Omit<CoursePropsOptionals, 'courseId'>
>;

export class Course extends BaseRoot {
  courseId!: string;
  title!: string;
  level!: string;
  requeriments!: string[];
  goals!: Goal[];
  syllabus!: string[];

  constructor(props: CourseProps) {
    super();

    Object.assign(this, props);
    this.isActive = props.isActive ?? true;
    this.createdAt = new Date();
  }

  update(props: CoursePropsUpdate) {
    new GoalVO(props.goals, 1);
    new RequerimentVO(props.requeriments, 1);
    new SyllabusVO(props.syllabus, 1);
    new TitleVO(props.title, 3);

    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.isActive = false;
    this.deletedAt = new Date();
  }
}
