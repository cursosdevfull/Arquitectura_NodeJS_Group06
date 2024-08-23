import { Inject, Injectable } from '@nestjs/common';
import { CourseDeletedEvent } from 'src/modules/course/domain/events/course-deleted';
import { CourseUpdatedEvent } from 'src/modules/course/domain/events/course-updated';
import { Repository } from 'typeorm';

import { CourseAddedEvent } from '../../course/domain/events/course-added';
import { EventSourcingRepository } from '../domain/repositories/event-sourcing.repository';
import { EventSourcingEntity } from './entities/event-sourcing.entity';

@Injectable()
export class EventSourcingInfrastructure implements EventSourcingRepository {
  constructor(
    @Inject('EventSourcingRepository')
    private readonly eventSourcingRepository: Repository<EventSourcingEntity>,
  ) {}

  async add(
    evt: CourseAddedEvent | CourseUpdatedEvent | CourseDeletedEvent,
  ): Promise<void> {
    const obj = new EventSourcingEntity();
    obj.table = 'Course';
    obj.id = evt.courseId;

    if (evt instanceof CourseAddedEvent) {
      (obj.action = 'ADD'), (obj.detail = { title: evt.title });
    } else if (evt instanceof CourseUpdatedEvent) {
      obj.action = 'UPDATE';
      obj.detail = { title: evt.title };
    } else if (evt instanceof CourseDeletedEvent) {
      obj.action = 'DELETE';
      obj.detail = {};
    }
    await this.eventSourcingRepository.save(obj);
  }
}
