import { BaseRoot } from '../../../core/domain/base-root';
import { TitleVO } from '../../../schedule/domain/value-objects/title.vo';

type CoursePropsEssentials = {
  title: string;
};

type CoursePropsOptionals = {
  courseId: string;
  isActive: boolean;
};

export type CourseProps = CoursePropsEssentials & Partial<CoursePropsOptionals>;
export type CoursePropsUpdate = Partial<CoursePropsEssentials>;

export class Course extends BaseRoot {
  courseId!: string;
  title!: string;

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
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(props: CoursePropsUpdate) {
    new TitleVO(props.title, 3);

    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.isActive = false;
    this.deletedAt = new Date();
  }
}
