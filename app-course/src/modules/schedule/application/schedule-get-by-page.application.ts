import { Inject, Injectable } from '@nestjs/common';
import { ResultPage } from 'src/modules/core/domain/result-page';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleGetByPageApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async getByPage(page: number, limit: number): Promise<ResultPage<Schedule>> {
    return this.repository.getByPage(page, limit);
  }
}
