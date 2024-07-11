class Tranportation {
  type: string;
  capacity: number;
  engine: string;

  constructor(type: string, capacity: number, engine: string) {
    this.type = type;
    this.capacity = capacity;
    this.engine = engine;
  }

  isSafe(): boolean {
    if (this.capacity > 10 && this.engine === "diesel") return false;

    return true;
  }
}

class Bus extends Tranportation {
  isBusSafe() {
    return this.isSafe();
  }
}

class Bike extends Tranportation {
  override isSafe() {
    if (this.capacity > 2) return false;
    return true;
  }
}

const bus = new Bus("bus", 45, "diesel");
console.log("Is bus safe?", bus.isBusSafe());

const bike = new Bike("bike", 2, "human traction");
console.log("Is bike safe?", bike.isSafe());
