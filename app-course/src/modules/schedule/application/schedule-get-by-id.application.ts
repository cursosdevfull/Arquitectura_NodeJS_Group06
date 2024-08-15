import { Inject, Injectable } from '@nestjs/common';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleGetByIdApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async getById(scheduleId: string): Promise<Schedule | null> {
    return this.repository.getById(scheduleId);
  }
}
