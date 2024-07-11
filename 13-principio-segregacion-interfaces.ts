interface IComputer {
  processor: string;
  memory: string;
  brand: string;
  getProcessor(): string;
  getMemory(): string;
  getBrand(): string;
}

interface IPortableComputer {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;
  getProcessor(): string;
  getMemory(): string;
  getBrand(): string;
  getScreenSize(): string;
}

class Desktop implements IComputer {
  processor: string;
  memory: string;
  brand: string;

  constructor(processor: string, memory: string, brand: string) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
  }

  getProcessor(): string {
    return this.processor;
  }
  getMemory(): string {
    return this.memory;
  }
  getBrand(): string {
    return this.brand;
  }
}
