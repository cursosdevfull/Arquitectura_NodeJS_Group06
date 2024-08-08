import { Course } from '../roots/course';

export type CourseRepository = {
  save(course: Course): Promise<void>;
  getById(id: string): Promise<Course | null>;
  get(): Promise<Course[]>;
  update(course: Course): Promise<void>;
  delete(id: string): Promise<Course>;
};
