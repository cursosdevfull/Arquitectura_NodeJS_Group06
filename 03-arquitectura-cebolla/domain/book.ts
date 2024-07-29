export class Book {
  public readonly bookId: number;
  public readonly title: string;

  constructor(bookId: number, title: string) {
    if (bookId <= 0) throw new Error("Invalid bookId");
    if (title.trim() === "") throw new Error("Title is required");
    if (title.length > 100)
      throw new Error("Title cannot be longer than 100 characters");
    if (title.length < 5)
      throw new Error("Title cannot be shorter than 5 characters");

    this.bookId = bookId;
    this.title = title;
  }
}
