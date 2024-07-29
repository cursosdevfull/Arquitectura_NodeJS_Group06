import { Book } from "./book";
import { booksInMemory } from "./books-in-memory";

export class LibraryData {
  async getAllBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return Promise.resolve(booksInMemory);
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return Promise.resolve(
      booksInMemory.find((book) => book.bookId === bookId)
    );
  }
}
