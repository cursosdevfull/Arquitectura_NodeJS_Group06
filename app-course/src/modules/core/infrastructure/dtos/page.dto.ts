import { ResultPage } from '../../domain/result-page';

export class PageDto<T> {
  static fromDomainToData<T>(
    data: T[],
    page: number,
    limit: number,
    total: number,
  ): ResultPage<T> {
    return {
      data,
      total,
      page,
      limit,
    };
  }
}
