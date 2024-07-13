// Domain
interface ProviderRepository {
  doTransaction(products: string[], total: number): string;
}

// Infrastructure
class PayU {
  products: string[] = [];
  total: number = 0;

  /*doTransaction(products: string[], total: number): string {
        return this.generateTransaction(products, total)
    }*/

  generateTransaction(products: string[], total: number) {
    return "transaction completed";
  }
}

class TwoCheckOut {
  products: string[] = [];
  total: number = 0;

  /*doTransaction(products: string[], total: number): string {
        return this.makePayment(products, total)
    }*/

  makePayment(products: string[], total: number) {
    return "payment done";
  }
}

// Application

class Payment {
  provider: ProviderRepository;

  constructor(provider: ProviderRepository) {
    this.provider = provider;
  }

  checkout(products: [], total: number) {
    return this.provider.doTransaction(products, total);
  }
}
