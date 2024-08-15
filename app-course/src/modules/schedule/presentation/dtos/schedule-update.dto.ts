import { IsNotEmpty, IsString } from 'class-validator';

export class ScheduleUpdateDto {
  @IsNotEmpty()
  @IsString()
  description!: string;
}
