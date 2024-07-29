import { IBook } from "../ports/book";
import { ILibraryRepository } from "../ports/library.repository";
import { booksInMemory } from "./books-in-memory";

export class LibraryAdapter implements ILibraryRepository {
  getAllBooks(): Promise<IBook[]> {
    return this.queryAllBooks();
  }

  async queryAllBooks(): Promise<IBook[]> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return Promise.resolve(booksInMemory);
  }

  async getBookById(bookId: number): Promise<IBook | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return Promise.resolve(
      booksInMemory.find((book) => book.bookId === bookId)
    );
  }
}
