import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';

export class CourseGetApplication {
  constructor(private readonly repository: CourseRepository) {}

  async get(): Promise<Course[]> {
    return this.repository.get();
  }
}
