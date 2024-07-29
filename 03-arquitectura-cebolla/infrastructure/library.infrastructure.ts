import { Book } from "../domain/book";
import { booksInMemory } from "./books-in-memory";

export class LibraryInfrastructure {
  async getAllBooks(): Promise<Book[]> {
    return this.queryBooks();
  }

  async queryBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Promise.resolve(booksInMemory);
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Promise.resolve(
      booksInMemory.find((book) => book.bookId === bookId)
    );
  }
}
