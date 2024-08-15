import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';
import { PageDto } from 'src/modules/core/infrastructure/dtos/page.dto';
import { Repository } from 'typeorm';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CourseInfrastructure implements CourseRepository {
  constructor(
    @Inject('CourseRepository')
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  async save(course: Course): Promise<Course> {
    const entity = CourseDto.fromDomainToData(course);
    await this.courseRepository.save(entity);
    return course;
  }
  async getById(id: string): Promise<Course | null> {
    const courseFound = await this.courseRepository.findOne({
      where: { courseId: id, isActive: true },
    });

    if (!courseFound) return null;

    return CourseDto.fromDataToDomain(courseFound) as Course;
  }
  async get(): Promise<Course[]> {
    const course = await this.courseRepository.find({
      where: { isActive: true },
    });
    return CourseDto.fromDataToDomain(course) as Course[];
  }

  async getByPage(page: number, limit: number): Promise<ResultPage<Course>> {
    const [data, total] = await this.courseRepository.findAndCount({
      where: { isActive: true },
      skip: (page - 1) * limit,
      take: limit,
    });

    const result = CourseDto.fromDataToDomain(data) as Course[];
    return PageDto.fromDomainToData(result, page, limit, total);
  }
}
