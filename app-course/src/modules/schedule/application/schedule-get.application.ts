import { Inject, Injectable } from '@nestjs/common';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleGetApplication {
  constructor(
    @Inject(ScheduleInfrastructure) public instance: ScheduleRepository,
  ) {}

  async get(): Promise<Schedule[]> {
    const result = await this.instance.get();
    return result;
  }
}
