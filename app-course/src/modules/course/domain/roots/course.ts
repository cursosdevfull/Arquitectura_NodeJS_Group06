import { BaseRoot } from '../../../core/domain/base-root';
import { TitleVO } from '../../../schedule/domain/value-objects/title.vo';

type CoursePropsEssentials = {
  title: string;
};

type CoursePropsOptionals = {
  courseId: string;
  /*   level: string;
  requeriments: string[];
  goals: Goal[];
  syllabus: string[]; */
  isActive: boolean;
};

export type CourseProps = CoursePropsEssentials & Partial<CoursePropsOptionals>;
export type CoursePropsUpdate = Partial<
  CoursePropsEssentials & Omit<CoursePropsOptionals, 'courseId'>
>;

export class Course extends BaseRoot {
  courseId!: string;
  title!: string;

  /*   level!: string;
  requeriments!: string[];
  goals!: Goal[];
  syllabus!: string[]; */

  constructor(props: CourseProps) {
    super();

    Object.assign(this, props);
    this.isActive = props.isActive ?? true;
    this.createdAt = new Date();
  }

  get properties() {
    return {
      courseId: this.courseId,
      title: this.title,
      /*       level: this.level,
      requeriments: this.requeriments,
      goals: this.goals,
      syllabus: this.syllabus, */
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(props: CoursePropsUpdate) {
    /*     new GoalVO(props.goals, 1);
    new RequerimentVO(props.requeriments, 1);
    new SyllabusVO(props.syllabus, 1); */
    new TitleVO(props.title, 3);

    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.isActive = false;
    this.deletedAt = new Date();
  }
}
