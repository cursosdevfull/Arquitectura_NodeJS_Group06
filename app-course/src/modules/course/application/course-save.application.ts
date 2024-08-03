import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';

export class CourseSaveApplication {
  constructor(private readonly repository: CourseRepository) {}

  async save(course: Course): Promise<void> {
    await this.repository.save(course);
  }
}
