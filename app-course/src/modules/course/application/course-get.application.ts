import { Inject, Injectable } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseGetApplication {
  constructor(
    @Inject(CourseInfrastructure) public instance: CourseRepository,
  ) {}

  async get(): Promise<Course[]> {
    const result = await this.instance.get();
    return result;
  }
}
