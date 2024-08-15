import { Schedule } from '../../../domain/roots/schedule';

export class ScheduleGetResponse {
  scheduleId: string;
  title: string;
}

export class ScheduleGetResponseDto {
  static fromDomainToResponse(
    data: Schedule | Schedule[],
  ): ScheduleGetResponse | ScheduleGetResponse[] {
    if (Array.isArray(data)) {
      return data.map(
        (schedule: Schedule) =>
          this.fromDomainToResponse(schedule) as ScheduleGetResponse,
      );
    }

    const response = new ScheduleGetResponse();
    response.scheduleId = data.scheduleId;
    response.title = data.description;

    return response;
  }
}
