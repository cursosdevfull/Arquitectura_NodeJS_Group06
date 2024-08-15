import { ResultPage } from '../result-page';

export type BaseRepository<T> = {
  save(course: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  get(): Promise<T[]>;
  getByPage(page: number, limit: number): Promise<ResultPage<T>>;
};
