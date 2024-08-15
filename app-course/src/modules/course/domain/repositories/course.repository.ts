import { BaseRepository } from '../../../../modules/core/domain/repositories/base-repository';
import { Course } from '../roots/course';

type CourseRepositoryAddionals = {};

export type CourseRepository = CourseRepositoryAddionals &
  BaseRepository<Course>;
