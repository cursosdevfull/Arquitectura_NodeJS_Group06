import { Inject, Injectable } from '@nestjs/common';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseGetByIdApplication {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async getById(courseId: string): Promise<Course | null> {
    return this.repository.getById(courseId);
  }
}
