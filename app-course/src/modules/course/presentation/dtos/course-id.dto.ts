import { IsNotEmpty, IsUUID } from 'class-validator';

export class CourseIdDto {
  @IsNotEmpty()
  @IsUUID()
  courseId: string;
}
