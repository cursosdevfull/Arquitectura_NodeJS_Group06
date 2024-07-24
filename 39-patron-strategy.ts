type STATE_BOOK = "NEW" | "GOOD" | "REGULAR";

interface IBook {
  id: number;
  title: string;
  state: STATE_BOOK;
  isAvailable: boolean;
}

class Stock {
  private static bookList: Array<IBook> = [
    { id: 1, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 2, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 3, title: "NodeJS", state: "GOOD", isAvailable: true },
    { id: 4, title: "NodeJS", state: "REGULAR", isAvailable: true },
    { id: 5, title: "Angular", state: "NEW", isAvailable: true },
    { id: 6, title: "Angular", state: "NEW", isAvailable: false },
    { id: 7, title: "Angular", state: "NEW", isAvailable: true },
    { id: 8, title: "Angular", state: "REGULAR", isAvailable: true },
    { id: 10, title: "Typescript", state: "NEW", isAvailable: true },
    { id: 11, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 12, title: "Typescript", state: "REGULAR", isAvailable: false },
    { id: 13, title: "Typescript", state: "REGULAR", isAvailable: true },
  ];

  static get books(): Array<IBook> {
    return [...this.bookList];
  }
}

abstract class SearchStrategy {
  private bookList: Array<IBook>;

  constructor() {
    this.bookList = Stock.books;
  }

  abstract findBook(title: string): IBook;

  private updateAvailability(id: number) {
    const bookFound = this.bookList.find((book: IBook) => book.id === id);
    if (bookFound) bookFound.isAvailable = false;
  }

  protected findBookByState(title: string, ...states: Array<STATE_BOOK>) {
    let position = 0;
    let bookFound: IBook | undefined;

    while (position < states.length) {
      bookFound = this.bookList.find(
        (book: IBook) =>
          book.title === title &&
          book.state === states[position] &&
          book.isAvailable
      );
      position++;

      if (bookFound) break;
    }

    if (bookFound) this.updateAvailability(bookFound.id);

    return bookFound;
  }
}

class Student extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBookByState(title, "REGULAR", "GOOD", "NEW")!;
  }
}

class Teacher extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBookByState(title, "GOOD", "NEW", "REGULAR")!;
  }
}

class Researcher extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBookByState(title, "NEW", "GOOD", "REGULAR")!;
  }
}

class Strategy {
  static findBookByRole(role: { new (): SearchStrategy }, title: string) {
    const instance = new role();
    return instance.findBook(title);
  }
}

const book3: IBook = Strategy.findBookByRole(Researcher, "NodeJS");
const book1: IBook = Strategy.findBookByRole(Student, "NodeJS");
const book2: IBook = Strategy.findBookByRole(Teacher, "NodeJS");

console.log("book1", book1);
console.log("book2", book2);
console.log("book3", book3);
