import { plainToClass } from 'class-transformer';

import { Course } from '../../domain/roots/course';
import { CourseEntity } from '../entities/course';

export class CourseDto {
  static fromDomainToData(course: Course): CourseEntity {
    const entity = plainToClass(CourseEntity, course.properties);
    return entity;
  }

  static fromDataToDomain(
    data: CourseEntity | CourseEntity[],
  ): Course | Course[] {
    if (Array.isArray(data)) {
      return data.map((entity) => new Course(entity));
    }

    return new Course(data);
  }
}
