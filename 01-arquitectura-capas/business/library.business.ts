import { Book } from "../data/book";
import { LibraryData } from "../data/library";
import { StoreData } from "../data/store";

export class LibraryBusiness {
  libraryData = new LibraryData();
  storeData = new StoreData();

  async getAllBooksAvailable(): Promise<Book[]> {
    const books = await this.libraryData.getAllBooks();

    const processBooksAvailable = books.map(async (book) => {
      const isAvailable = await this.storeData.isBookAvailable(book.bookId);

      return isAvailable ? book : null;
    });

    const booksAvailable = await Promise.all(processBooksAvailable); // [Book, null, Book, null, ...]
    const results = booksAvailable.filter((book) => book !== null);
    return results as Book[];
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    if (bookId < 1) throw new Error("Invalid bookId");

    return this.libraryData.getBookById(bookId);
  }
}
