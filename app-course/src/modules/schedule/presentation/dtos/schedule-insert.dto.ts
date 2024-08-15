import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';

export class ScheduleGoal {
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class ScheduleInsertDto {
  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsUUID()
  courseId: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  requirements: string[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  syllabus: string[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ScheduleGoal)
  goals: ScheduleGoal[];
}
