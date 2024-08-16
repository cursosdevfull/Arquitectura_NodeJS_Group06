import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../../domain/repositories/course.repository';
import { CourseInfrastructure } from '../../infrastructure/course.infrastructure';

export class GetByIdQuery {
  readonly courseId: string;

  constructor(courseId: string) {
    this.courseId = courseId;
  }
}

@QueryHandler(GetByIdQuery)
export class GetByIdHandler implements IQueryHandler<GetByIdQuery> {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async execute(query: GetByIdQuery): Promise<any> {
    console.log('GetByIdHandler -> query', query);
    return this.repository.getById(query.courseId);
  }
}
