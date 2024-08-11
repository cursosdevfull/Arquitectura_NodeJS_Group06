import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entities/course';

@Injectable()
export class CourseInfrastructure implements CourseRepository {
  constructor(
    @Inject('CourseRepository')
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  save(course: Course): Promise<void> {
    const entity = CourseDto.fromDomainToData(course);
    this.courseRepository.save(entity);
    return Promise.resolve();
  }
  getById(id: string): Promise<Course | null> {
    return Promise.resolve(null);
  }
  async get(): Promise<Course[]> {
    const course = await this.courseRepository.find();
    return CourseDto.fromDataToDomain(course) as Course[];
  }
  update(course: Course): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
