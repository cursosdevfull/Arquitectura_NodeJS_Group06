import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseGetByPageApplication {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async getByPage(page: number, limit: number): Promise<ResultPage<Course>> {
    return this.repository.getByPage(page, limit);
  }
}
