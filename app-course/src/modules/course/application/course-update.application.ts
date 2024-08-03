import { CourseRepository } from '../domain/repositories/course.repository';

export class CourseDeleteApplication {
  constructor(private readonly repository: CourseRepository) {}

  async delete(courseId: string): Promise<void> {
    const course = await this.repository.getById(courseId);
    if (course) {
      course.delete();
      this.repository.delete(courseId);
    }
  }
}
