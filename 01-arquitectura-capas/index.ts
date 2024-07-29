import { LibraryPresentation } from "./presentation/library.presentation";

const libraryPresentation = new LibraryPresentation();

libraryPresentation.getAllBooksAvailable().then((books) => {
  console.log("Books available:", books);
});

libraryPresentation.getBookById(1).then((book) => {
  console.log("Book by id:", book);
});
