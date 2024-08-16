import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from '../../database/database.module';
import { LogHandler } from '../application/commands/log.command';
import { CourseGetByIdApplication } from '../application/course-get-by-id.application';
import { CourseGetByPageApplication } from '../application/course-get-by-page.application';
import { CourseGetApplication } from '../application/course-get.application';
import { CourseSaveApplication } from '../application/course-save.application';
import { GetByIdHandler } from '../application/queries/get-by-id.query';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';
import { courseProviders } from '../infrastructure/providers/course.provider';
import { CourseController } from './course.controller';

const infraProviders = [CourseInfrastructure];
const applicationProviders = [
  CourseGetApplication,
  CourseSaveApplication,
  CourseGetByIdApplication,
  CourseGetByPageApplication,
  GetByIdHandler,
  LogHandler,
];

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [CourseController],
  providers: [...infraProviders, ...applicationProviders, ...courseProviders],
})
export class CourseModule {}
