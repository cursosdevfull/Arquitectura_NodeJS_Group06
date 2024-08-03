import { CourseRepository } from '../domain/repositories/course.repository';
import { CoursePropsUpdate } from '../domain/roots/course';

export class CourseUpdateApplication {
  constructor(private readonly repository: CourseRepository) {}

  async update(props: CoursePropsUpdate, courseId: string): Promise<void> {
    const course = await this.repository.getById(courseId);
    if (course) {
      course.update(props);
      return this.repository.update(course);
    }
  }
}
