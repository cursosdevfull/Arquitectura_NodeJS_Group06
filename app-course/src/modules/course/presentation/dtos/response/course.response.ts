import { Course } from 'src/modules/course/domain/roots/course';

export class CourseGetResponse {
  courseId: string;
  title: string;
}

export class CourseGetResponseDto {
  static fromDomainToResponse(
    data: Course | Course[],
  ): CourseGetResponse | CourseGetResponse[] {
    if (Array.isArray(data)) {
      return data.map(
        (course: Course) =>
          this.fromDomainToResponse(course) as CourseGetResponse,
      );
    }

    const response = new CourseGetResponse();
    response.courseId = data.courseId;
    response.title = data.title;

    return response;
  }
}
