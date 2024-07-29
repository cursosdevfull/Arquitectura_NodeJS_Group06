import { Book } from '../domain/book';
import { LibraryRepository } from '../domain/repositories/library.repository';
import { StoreRepository } from '../domain/repositories/store.repository';

export class LibraryApplication {
  constructor(
    private library: LibraryRepository,
    private store: StoreRepository
  ) {}

  async getBooksAvailable(): Promise<Book[]> {
    const books = await this.library.getAllBooks();

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
