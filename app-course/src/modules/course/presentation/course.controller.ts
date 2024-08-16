import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { ClientException } from '../../core/exceptions/client.exception';
import { DatabaseInternalException } from '../../core/exceptions/database-internal.exception';
import { LogCommand } from '../application/commands/log.command';
import { CourseGetByIdApplication } from '../application/course-get-by-id.application';
import { CourseGetByPageApplication } from '../application/course-get-by-page.application';
import { CourseGetApplication } from '../application/course-get.application';
import { CourseSaveApplication } from '../application/course-save.application';
import { GetByIdQuery } from '../application/queries/get-by-id.query';
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
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  async insert(@Body() data: CourseInsertDto) {
    try {
      const course = CourseFactory.create({ title: data.title });
      await this.courseSave.save(course);

      const command = new LogCommand('Course created');
      const response = await this.commandBus.execute(command);
      console.log('CourseController -> response', response);

      return CourseGetResponseDto.fromDomainToResponse(course);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Get('page')
  async getByPage(@Query() query: CourseQueryPageDto) {
    try {
      const { page, limit } = query;
      const pageResult = await this.courseGetByPage.getByPage(page, limit);
      return {
        data: CourseGetResponseDto.fromDomainToResponse(pageResult.data),
        total: pageResult.total,
        page: pageResult.page,
        limit: pageResult.limit,
      };
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Get()
  async getAll() {
    try {
      const courses = await this.courseGet.get();
      return CourseGetResponseDto.fromDomainToResponse(courses);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Get(':courseId')
  async getOne(@Param() param: CourseIdDto) {
    try {
      const getByIdQuery = new GetByIdQuery(param.courseId);
      const course = await this.queryBus.execute(getByIdQuery);

      //const course = await this.courseGetId.getById(param.courseId);
      if (!course) {
        return { message: 'Course not found', statusCode: 200 };
      }

      return CourseGetResponseDto.fromDomainToResponse(course);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Put(':courseId')
  async update(@Body() data: CourseUpdateDto, @Param() param: CourseIdDto) {
    try {
      const course = await this.courseGetId.getById(param.courseId);
      if (!course) {
        return { message: 'Course not found', statusCode: 200 };
      }

      course.update(data);
      await this.courseSave.save(course);
      return CourseGetResponseDto.fromDomainToResponse(course);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Put(':courseId')
  @Version('2')
  async updateV2(@Body() data: CourseUpdateDto, @Param() param: CourseIdDto) {
    try {
      const course = await this.courseGetId.getById(param.courseId);
      if (!course) {
        return { message: 'Not found', statusCode: 200 };
      }

      course.update(data);
      await this.courseSave.save(course);
      return CourseGetResponseDto.fromDomainToResponse(course);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }

  @Delete(':courseId')
  async delete(@Param() param: CourseIdDto) {
    try {
      const course = await this.courseGetId.getById(param.courseId);
      if (!course) {
        return { message: 'Course not found', statusCode: 200 };
      }

      course.delete();
      await this.courseSave.save(course);
      return CourseGetResponseDto.fromDomainToResponse(course);
    } catch (error) {
      if (error instanceof DatabaseInternalException) {
        throw new InternalServerErrorException(error.message, error.name);
      } else if (error instanceof ClientException) {
        throw new BadRequestException(error.message, error.name);
      }
    }
  }
}
