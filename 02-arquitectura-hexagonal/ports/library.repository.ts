import { IBook } from "./book";

export interface ILibraryRepository {
  getAllBooks(): Promise<IBook[]>;
  getBookById(bookId: number): Promise<IBook | undefined>;
}
