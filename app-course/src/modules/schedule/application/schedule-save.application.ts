import { Inject, Injectable } from '@nestjs/common';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleSaveApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    return this.repository.save(schedule);
  }
}
