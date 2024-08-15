import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { ScheduleGetByIdApplication } from '../application/schedule-get-by-id.application';
import { ScheduleGetByPageApplication } from '../application/schedule-get-by-page.application';
import { ScheduleGetApplication } from '../application/schedule-get.application';
import { ScheduleSaveApplication } from '../application/schedule-save.application';
import { scheduleProviders } from '../infrastructure/providers/schedule.provider';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';
import { ScheduleController } from './schedule.controller';

const infraProviders = [ScheduleInfrastructure];
const applicationProviders = [
  ScheduleGetApplication,
  ScheduleSaveApplication,
  ScheduleGetByIdApplication,
  ScheduleGetByPageApplication,
];

@Module({
  imports: [DatabaseModule],
  controllers: [ScheduleController],
  providers: [...infraProviders, ...applicationProviders, ...scheduleProviders],
})
export class ScheduleModule {}
