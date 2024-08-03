import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';

export class CourseGetByIdApplication {
  constructor(private readonly repository: CourseRepository) {}

  async getById(courseId: string): Promise<Course | null> {
    return this.repository.getById(courseId);
  }
}
