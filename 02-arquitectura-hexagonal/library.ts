import { ILibraryRepository } from "./ports/library.repository";
import { IStoreRepository } from "./ports/store.repository";

export class Library {
  constructor(
    private readonly libraryRepository: ILibraryRepository,
    private storeRepository: IStoreRepository
  ) {}

  async getAllBooksAvailable() {
    const books = await this.libraryRepository.getAllBooks();

    const processBooksAvailable = books.map(async (book) => {
      const isAvailable = await this.storeRepository.isBookAvailable(
        book.bookId
      );

      return isAvailable ? book : null;
    });

    const booksAvailable = await Promise.all(processBooksAvailable);
    return booksAvailable.filter((book) => book !== null);
  }

  async getBookById(bookId: number) {
    return await this.libraryRepository.getBookById(bookId);
  }
}
