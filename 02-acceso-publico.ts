class Animal {
  raza: string;
  color: string;

  getDescription() {
    //return "Raza: " + this.raza + " Color: " + this.color
    return `Raza: ${this.raza}. Color: ${this.color}`;
  }
}

const animal = new Animal();
animal.raza = "Samoyedo";
animal.color = "Blanco";

console.log("raza", animal.raza);
console.log("color", animal.color);
console.log("description", animal.getDescription());
