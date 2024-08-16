import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';
import { PageDto } from 'src/modules/core/infrastructure/dtos/page.dto';
import { QueryFailedError, Repository } from 'typeorm';

import { DatabaseInternalException } from '../../core/exceptions/database-internal.exception';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleDto } from './dtos/schedule.dto';
import { ScheduleEntity } from './entities/schedule.entity';

@Injectable()
export class ScheduleInfrastructure implements ScheduleRepository {
  constructor(
    @Inject('ScheduleRepository')
    private readonly scheduleRepository: Repository<ScheduleEntity>,
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    try {
      const entity = ScheduleDto.fromDomainToData(schedule);
      await this.scheduleRepository.save(entity);
      return schedule;
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
  async getById(id: string): Promise<Schedule | null> {
    try {
      const scheduleFound = await this.scheduleRepository.findOne({
        where: { scheduleId: id, isActive: true },
      });

      if (!scheduleFound) return null;

      return ScheduleDto.fromDataToDomain(scheduleFound) as Schedule;
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
  async get(): Promise<Schedule[]> {
    try {
      const schedule = await this.scheduleRepository.find({
        where: { isActive: true },
      });
      return ScheduleDto.fromDataToDomain(schedule) as Schedule[];
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

  async getByPage(page: number, limit: number): Promise<ResultPage<Schedule>> {
    try {
      const [data, total] = await this.scheduleRepository.findAndCount({
        where: { isActive: true },
        skip: (page - 1) * limit,
        take: limit,
      });

      const result = ScheduleDto.fromDataToDomain(data) as Schedule[];
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
