import { IsNotEmpty, IsUUID } from 'class-validator';

export class ScheduleIdDto {
  @IsNotEmpty()
  @IsUUID()
  scheduleId: string;
}
