import { Book, LibraryData } from "../data/library.data";
import { StoreData } from "../data/storage.data";

export class LibraryBusiness {
  libraryData = new LibraryData();
  storeData = new StoreData();

  async getAllBooksAvailable(): Promise<Book[]> {
    const books = await this.libraryData.getAllBooks();

    const listPromises = books.map(async (book) => {
      const isAvailable = await this.storeData.isBookAvailable(book.bookId);
      return isAvailable ? book : undefined;
    });

    const booksAvailable = await Promise.all(listPromises);
    return (booksAvailable as Book[]).filter((book) => book !== null);
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    if (bookId < 1) throw new Error("Invalid bookedIK");
    return this.libraryData.getBookById(bookId);
  }
}
