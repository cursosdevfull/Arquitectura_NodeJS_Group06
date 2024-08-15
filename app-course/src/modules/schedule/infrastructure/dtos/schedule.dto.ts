import { plainToClass } from 'class-transformer';

import { Schedule, ScheduleProps } from '../../domain/roots/schedule';
import { ScheduleEntity } from '../entities/schedule.entity';

export class ScheduleDto {
  static fromDomainToData(schedule: Schedule): ScheduleEntity {
    const entity = plainToClass(ScheduleEntity, schedule.properties);
    return entity;
  }

  static fromDataToDomain(
    data: ScheduleEntity | ScheduleEntity[],
  ): Schedule | Schedule[] {
    if (Array.isArray(data)) {
      return data.map((entity) => this.fromDataToDomain(entity)) as Schedule[];
    }

    const { course, ...schedule } = data;
    const props: ScheduleProps = { courseId: course.courseId, ...schedule };
    return new Schedule(props);
  }
}
