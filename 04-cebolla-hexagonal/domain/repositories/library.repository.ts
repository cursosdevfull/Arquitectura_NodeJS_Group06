import { Book } from '../book';

export interface LibraryRepository {
  getAllBooks(): Promise<Book[]>;
  getBookById(bookId: number): Promise<Book | undefined>;
}
