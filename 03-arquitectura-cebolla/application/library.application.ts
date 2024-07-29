import { Book } from "../domain/book";
import { LibraryInfrastructure } from "../infrastructure/library.infrastructure";
import { StoreInfrastructure } from "../infrastructure/store.infrastructure";

export class LibraryApplication {
  constructor(
    private library: LibraryInfrastructure,
    private store: StoreInfrastructure
  ) {}

  async getBooksAvailable(): Promise<Book[]> {
    const books = await this.library.queryBooks();

    const processBooksAvailable = books.map(async (book) => {
      const isAvailable = await this.store.isBookAvailable(book.bookId);
      return isAvailable ? book : null;
    });

    const booksAvailable = await Promise.all(processBooksAvailable);
    return booksAvailable.filter((book) => book !== null) as Book[];
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    return this.library.getBookById(bookId);
  }
}
