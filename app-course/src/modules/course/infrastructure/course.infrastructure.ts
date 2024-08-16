import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';
import { DatabaseInternalException } from 'src/modules/core/exceptions/database-internal.exception';
import { PageDto } from 'src/modules/core/infrastructure/dtos/page.dto';
import { QueryFailedError, Repository } from 'typeorm';

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
    try {
      const entity = CourseDto.fromDomainToData(course);
      await this.courseRepository.save(entity);
      return course;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError;
        throw new DatabaseInternalException(err.sqlMessage);
      } else if (error instanceof AggregateError) {
        const err = error.errors[0];
        throw new DatabaseInternalException(err.code);
      }

      throw new DatabaseInternalException(
        'An error occurred while saving the course',
      );
    }
  }
  async getById(id: string): Promise<Course | null> {
    try {
      const courseFound = await this.courseRepository.findOne({
        where: { courseId: id, isActive: true },
      });

      if (!courseFound) return null;

      return CourseDto.fromDataToDomain(courseFound) as Course;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError;
        throw new DatabaseInternalException(err.sqlMessage);
      } else if (error instanceof AggregateError) {
        const err = error.errors[0];
        throw new DatabaseInternalException(err.code);
      }

      throw new DatabaseInternalException(
        'An error occurred while saving the course',
      );
    }
  }

  async getByTitle(title: string): Promise<Course | null> {
    try {
      const courseFound = await this.courseRepository.findOne({
        where: { title, isActive: true },
      });

      if (!courseFound) return null;

      return CourseDto.fromDataToDomain(courseFound) as Course;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError;
        throw new DatabaseInternalException(err.sqlMessage);
      } else if (error instanceof AggregateError) {
        const err = error.errors[0];
        throw new DatabaseInternalException(err.code);
      }

      throw new DatabaseInternalException(
        'An error occurred while saving the course',
      );
    }
  }
  async get(): Promise<Course[]> {
    try {
      const course = await this.courseRepository.find({
        where: { isActive: true },
      });
      return CourseDto.fromDataToDomain(course) as Course[];
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError;
        throw new DatabaseInternalException(err.sqlMessage);
      } else if (error instanceof AggregateError) {
        const err = error.errors[0];
        throw new DatabaseInternalException(err.code);
      }

      throw new DatabaseInternalException(
        'An error occurred while saving the course',
      );
    }
  }

  async getByPage(page: number, limit: number): Promise<ResultPage<Course>> {
    try {
      const [data, total] = await this.courseRepository.findAndCount({
        where: { isActive: true },
        skip: (page - 1) * limit,
        take: limit,
      });

      const result = CourseDto.fromDataToDomain(data) as Course[];
      return PageDto.fromDomainToData(result, page, limit, total);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError;
        throw new DatabaseInternalException(err.sqlMessage);
      } else if (error instanceof AggregateError) {
        const err = error.errors[0];
        throw new DatabaseInternalException(err.code);
      }

      throw new DatabaseInternalException(
        'An error occurred while saving the course',
      );
    }
  }
}
