import { BaseRepository } from '../../../../modules/core/domain/repositories/base-repository';
import { Course } from '../roots/course';

type CourseRepositoryAdditionals = {
  getByTitle(title: string): Promise<Course | null>;
};

export type CourseRepository = CourseRepositoryAdditionals &
  BaseRepository<Course>;
