import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';
import { PageDto } from 'src/modules/core/infrastructure/dtos/page.dto';
import { Repository } from 'typeorm';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleDto } from './dtos/schedule.dto';
import { ScheduleEntity } from './entities/schedule.entity';

@Injectable()
export class ScheduleInfrastructure implements ScheduleRepository {
  constructor(
    @Inject('ScheduleRepository')
    private readonly scheduleRepository: Repository<ScheduleEntity>,
    /*     @Inject('GoalRepository')
    private readonly goalRepository: Repository<GoalEntity>, */
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    const entity = ScheduleDto.fromDomainToData(schedule);
    await this.scheduleRepository.save(entity);
    /*     for (const goal of schedule.goals) {
      const goalEntity = new GoalEntity();
      goalEntity.schedule = entity;
      goalEntity.description = goal.description;
      await this.goalRepository.save(goalEntity);
    } */
    return schedule;
  }
  async getById(id: string): Promise<Schedule | null> {
    const scheduleFound = await this.scheduleRepository.findOne({
      where: { scheduleId: id, isActive: true },
    });

    if (!scheduleFound) return null;

    return ScheduleDto.fromDataToDomain(scheduleFound) as Schedule;
  }
  async get(): Promise<Schedule[]> {
    const schedule = await this.scheduleRepository.find({
      where: { isActive: true },
    });
    return ScheduleDto.fromDataToDomain(schedule) as Schedule[];
  }

  async getByPage(page: number, limit: number): Promise<ResultPage<Schedule>> {
    const [data, total] = await this.scheduleRepository.findAndCount({
      where: { isActive: true },
      skip: (page - 1) * limit,
      take: limit,
    });

    const result = ScheduleDto.fromDataToDomain(data) as Schedule[];
    return PageDto.fromDomainToData(result, page, limit, total);
  }
}
