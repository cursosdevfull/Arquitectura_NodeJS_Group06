import { Controller, Get } from '@nestjs/common';

import { CourseGetApplication } from './modules/course/application/course-get.application';

@Controller('course')
export class AppController {
  constructor(private readonly miClass: CourseGetApplication) {}

  @Get()
  async list(): Promise<any> {
    try {
      const courses = await this.miClass.get();

      return courses;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }

      return 'An error occurred';
    }
  }

  @Get('/all')
  async allCourse(): Promise<any> {
    /*     try {
      const repository: CourseRepository = new CourseInfrastructure();
      const application = new CourseGetApplication(repository);

      const courses = await application.get();

      return courses;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }

      return 'An error occurred';
    } */
  }
}
