import { Body, Controller, Delete, Get, Param, Post, Put, Query, Version } from '@nestjs/common';

import { CourseGetByIdApplication } from '../application/course-get-by-id.application';
import { CourseGetByPageApplication } from '../application/course-get-by-page.application';
import { CourseGetApplication } from '../application/course-get.application';
import { CourseSaveApplication } from '../application/course-save.application';
import { CourseFactory } from '../domain/roots/course.factory';
import { CourseIdDto } from './dtos/course-id.dto';
import { CourseInsertDto } from './dtos/course-insert.dto';
import { CourseQueryPageDto } from './dtos/course-query-page.dto';
import { CourseUpdateDto } from './dtos/course-update.dto';
import { CourseGetResponseDto } from './dtos/response/course.response';

@Controller('course')
export class CourseController {
  constructor(
    private readonly courseSave: CourseSaveApplication,
    private readonly courseGet: CourseGetApplication,
    private readonly courseGetId: CourseGetByIdApplication,
    private readonly courseGetByPage: CourseGetByPageApplication,
  ) {}

  @Post()
  async insert(@Body() data: CourseInsertDto) {
    const course = CourseFactory.create({ title: data.title });
    await this.courseSave.save(course);
    return CourseGetResponseDto.fromDomainToResponse(course);
  }

  @Get('page')
  async getByPage(@Query() query: CourseQueryPageDto) {
    const { page, limit } = query;
    const pageResult = await this.courseGetByPage.getByPage(page, limit);
    return {
      data: CourseGetResponseDto.fromDomainToResponse(pageResult.data),
      total: pageResult.total,
      page: pageResult.page,
      limit: pageResult.limit,
    };
  }

  @Get()
  async getAll() {
    const courses = await this.courseGet.get();
    return CourseGetResponseDto.fromDomainToResponse(courses);
  }

  @Get(':courseId')
  async getOne(@Param() param: CourseIdDto) {
    const course = await this.courseGetId.getById(param.courseId);
    if (!course) {
      return { message: 'Course not found', statusCode: 200 };
    }

    return CourseGetResponseDto.fromDomainToResponse(course);
  }

  @Put(':courseId')
  async update(@Body() data: CourseUpdateDto, @Param() param: CourseIdDto) {
    const course = await this.courseGetId.getById(param.courseId);
    if (!course) {
      return { message: 'Course not found', statusCode: 200 };
    }

    course.update(data);
    await this.courseSave.save(course);
    return CourseGetResponseDto.fromDomainToResponse(course);
  }

  @Put(':courseId')
  @Version('2')
  async updateV2(@Body() data: CourseUpdateDto, @Param() param: CourseIdDto) {
    const course = await this.courseGetId.getById(param.courseId);
    if (!course) {
      return { message: 'Not found', statusCode: 200 };
    }

    course.update(data);
    await this.courseSave.save(course);
    return CourseGetResponseDto.fromDomainToResponse(course);
  }

  @Delete(':courseId')
  async delete(@Param() param: CourseIdDto) {
    const course = await this.courseGetId.getById(param.courseId);
    if (!course) {
      return { message: 'Course not found', statusCode: 200 };
    }

    course.delete();
    await this.courseSave.save(course);
    return CourseGetResponseDto.fromDomainToResponse(course);
  }
}
