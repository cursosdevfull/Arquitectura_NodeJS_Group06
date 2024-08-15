import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/course/presentation/course.module';
import { ScheduleModule } from './modules/schedule/presentation/schedule.module';

@Module({
  imports: [CourseModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
