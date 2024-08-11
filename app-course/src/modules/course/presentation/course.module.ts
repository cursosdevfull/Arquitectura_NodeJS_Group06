import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';

import { CourseGetApplication } from '../application/course-get.application';
import { CourseSaveApplication } from '../application/course-save.application';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';
import { courseProviders } from '../infrastructure/providers/course.provider';
import { CourseController } from './course.controller';

const infraProviders = [CourseInfrastructure];
const applicationProviders = [CourseGetApplication, CourseSaveApplication];

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [...infraProviders, ...applicationProviders, ...courseProviders],
})
export class CourseModule {}
