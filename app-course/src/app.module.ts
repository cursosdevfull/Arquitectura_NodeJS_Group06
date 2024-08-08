import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseGetApplication } from './modules/course/application/course-get.application';
import { CourseInfrastructure } from './modules/course/infrastructure/course.infrastructure';

const infraProviders = [CourseInfrastructure];
const applicationProviders = [CourseGetApplication];

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...infraProviders, ...applicationProviders],
})
export class AppModule {}
