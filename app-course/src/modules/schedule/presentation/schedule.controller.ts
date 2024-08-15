import { Body, Controller, Delete, Get, Param, Post, Put, Query, Version } from '@nestjs/common';

import { ScheduleGetByIdApplication } from '../application/schedule-get-by-id.application';
import { ScheduleGetByPageApplication } from '../application/schedule-get-by-page.application';
import { ScheduleGetApplication } from '../application/schedule-get.application';
import { ScheduleSaveApplication } from '../application/schedule-save.application';
import { ScheduleFactory } from '../domain/roots/schedule.factory';
import { ScheduleGetResponseDto } from './dtos/response/schedule.response';
import { ScheduleIdDto } from './dtos/schedule-id.dto';
import { ScheduleInsertDto } from './dtos/schedule-insert.dto';
import { ScheduleQueryPageDto } from './dtos/schedule-query-page.dto';
import { ScheduleUpdateDto } from './dtos/schedule-update.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleSave: ScheduleSaveApplication,
    private readonly scheduleGet: ScheduleGetApplication,
    private readonly scheduleGetId: ScheduleGetByIdApplication,
    private readonly scheduleGetByPage: ScheduleGetByPageApplication,
  ) {}

  @Post()
  async insert(@Body() data: ScheduleInsertDto) {
    const schedule = ScheduleFactory.create({
      description: data.description,
      courseId: data.courseId,
      requeriments: data.requirements,
      syllabus: data.syllabus,
      goals: data.goals,
    });
    await this.scheduleSave.save(schedule);
    return ScheduleGetResponseDto.fromDomainToResponse(schedule);
  }

  @Get('page')
  async getByPage(@Query() query: ScheduleQueryPageDto) {
    const { page, limit } = query;
    const pageResult = await this.scheduleGetByPage.getByPage(page, limit);
    return {
      data: ScheduleGetResponseDto.fromDomainToResponse(pageResult.data),
      total: pageResult.total,
      page: pageResult.page,
      limit: pageResult.limit,
    };
  }

  @Get()
  async getAll() {
    const schedules = await this.scheduleGet.get();
    return ScheduleGetResponseDto.fromDomainToResponse(schedules);
  }

  @Get(':scheduleId')
  async getOne(@Param() param: ScheduleIdDto) {
    const schedule = await this.scheduleGetId.getById(param.scheduleId);
    if (!schedule) {
      return { message: 'Schedule not found', statusCode: 200 };
    }

    return ScheduleGetResponseDto.fromDomainToResponse(schedule);
  }

  @Put(':scheduleId')
  async update(@Body() data: ScheduleUpdateDto, @Param() param: ScheduleIdDto) {
    const schedule = await this.scheduleGetId.getById(param.scheduleId);
    if (!schedule) {
      return { message: 'Schedule not found', statusCode: 200 };
    }

    schedule.update(data);
    await this.scheduleSave.save(schedule);
    return ScheduleGetResponseDto.fromDomainToResponse(schedule);
  }

  @Put(':scheduleId')
  @Version('2')
  async updateV2(
    @Body() data: ScheduleUpdateDto,
    @Param() param: ScheduleIdDto,
  ) {
    const schedule = await this.scheduleGetId.getById(param.scheduleId);
    if (!schedule) {
      return { message: 'Not found', statusCode: 200 };
    }

    schedule.update(data);
    await this.scheduleSave.save(schedule);
    return ScheduleGetResponseDto.fromDomainToResponse(schedule);
  }

  @Delete(':scheduleId')
  async delete(@Param() param: ScheduleIdDto) {
    const schedule = await this.scheduleGetId.getById(param.scheduleId);
    if (!schedule) {
      return { message: 'Schedule not found', statusCode: 200 };
    }

    schedule.delete();
    await this.scheduleSave.save(schedule);
    return ScheduleGetResponseDto.fromDomainToResponse(schedule);
  }
}
