import { Inject, Injectable } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseSaveApplication {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async save(course: Course): Promise<void> {
    await this.repository.save(course);
  }
}
