import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/course/presentation/course.module';
import { EventSourcingModule } from './modules/event-sourcing/presentation/event-sourcing.module';
import { ScheduleModule } from './modules/schedule/presentation/schedule.module';

@Module({
  imports: [
    CourseModule,
    ScheduleModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EventSourcingModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get<number>('PORT');
  }
}
