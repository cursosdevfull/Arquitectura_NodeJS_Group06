import { LibraryApplication } from "./application/library.application";
import { LibraryInfrastructure } from "./infrastructure/library.infrastructure";
import { StoreInfrastructure } from "./infrastructure/store.infrastructure";

const libraryInfrastructure = new LibraryInfrastructure();
const storeInfrastructure = new StoreInfrastructure();
const libraryApplication = new LibraryApplication(
  libraryInfrastructure,
  storeInfrastructure
);

libraryApplication.getBooksAvailable().then((books) => {
  console.log("Books available", books);
});

libraryApplication.getBookById(1).then((book) => {
  console.log("Book by id", book);
});
