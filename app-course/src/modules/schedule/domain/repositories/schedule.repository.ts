import { BaseRepository } from '../../../../modules/core/domain/repositories/base-repository';
import { Schedule } from '../roots/schedule';

type ScheduleRepositoryAddionals = {};

export type ScheduleRepository = ScheduleRepositoryAddionals &
  BaseRepository<Schedule>;
