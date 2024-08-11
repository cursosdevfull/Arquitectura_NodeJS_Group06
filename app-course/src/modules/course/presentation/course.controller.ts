import { Body, Controller, Get, Post } from '@nestjs/common';

import { CourseGetApplication } from '../application/course-get.application';
import { CourseSaveApplication } from '../application/course-save.application';
import { CourseFactory } from '../domain/roots/course.factory';
import { CourseDto } from './dtos/course-insert.dto';

@Controller('course')
export class CourseController {
  constructor(
    private readonly courseSave: CourseSaveApplication,
    private readonly courseGet: CourseGetApplication,
  ) {}

  @Post('v1')
  async insert(@Body() data: CourseDto) {
    console.log('insert', data);
    const course = CourseFactory.create({ title: data.title });
    await this.courseSave.save(course);
    return 'Curso creado';
  }

  @Get('v1')
  async getAll() {
    return await this.courseGet.get();
  }
}
