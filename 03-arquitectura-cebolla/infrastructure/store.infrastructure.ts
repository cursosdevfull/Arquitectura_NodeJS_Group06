export class StoreInfrastructure {
  async isBookAvailable(bookId: number): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
