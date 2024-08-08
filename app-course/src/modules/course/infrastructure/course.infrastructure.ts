import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';

export class CourseInfrastructure implements CourseRepository {
  save(course: Course): Promise<void> {
    return Promise.resolve();
  }
  getById(id: string): Promise<Course | null> {
    return Promise.resolve(null);
  }
  get(): Promise<Course[]> {
    throw new Error('Method not implemented.');
  }
  update(course: Course): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
