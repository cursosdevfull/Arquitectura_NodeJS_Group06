import { Inject } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

export class CourseGetApplication {
  constructor(
    @Inject(CourseInfrastructure) public instance: CourseRepository,
  ) {}

  async get() /* : Promise<Course[]> */ {
    return this.instance.get();
    //return this.repository.get();
  }
}
