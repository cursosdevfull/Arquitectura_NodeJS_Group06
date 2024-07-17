interface Repository<T, K> {
  insert(entity: T): void;
  update(entity: T, id: K): void;
  delete(id: K): void;
}

class UserData implements Repository<Entity<IUser>, number> {
  insert(entity: Entity<IUser>): void {
    console.log("user created");
  }
  update(entity: Entity<IUser>, id: number): void {
    console.log("user updated");
  }
  delete(id: number): void {
    console.log("user deleted");
  }
}

class MedicData implements Repository<Entity<IMedic>, string> {
  insert(entity: Entity<IMedic>): void {
    console.log("medic created");
  }
  update(entity: Entity<IMedic>, id: string): void {
    console.log("medic updated");
  }
  delete(id: string): void {
    console.log("medic deleted");
  }
}

class UserLogic {
  repository: Repository<Entity<IUser>, number>;

  constructor(repository: Repository<Entity<IUser>, number>) {
    this.repository = repository;
  }

  add(user: Entity<IUser>) {
    this.repository.insert(user);
  }
}

class MedicLogic {
  repository: Repository<Entity<IMedic>, string>;

  constructor(repository: Repository<Entity<IMedic>, string>) {
    this.repository = repository;
  }

  add(medic: Entity<IMedic>) {
    this.repository.insert(medic);
  }
}

interface IUser {
  userId: number;
  name: string;
  lastname: string;
}

interface IMedic {
  medicId: string;
  name: string;
  lastname: string;
  specialtyId: number;
  age: number;
}

type Options = "userId" | "name" | "lastname";

class Entity<T> {
  props: T;
  constructor(props: T) {
    this.props = props;
  }

  // keyof T ->   "userId" | "name" | "lastname"

  getProperty(propertyName: keyof T): T[keyof T] {
    return this.props[propertyName];
  }
}

const user = new Entity<IUser>({
  userId: 10,
  name: "Luis",
  lastname: "Jimenez",
});
const medic = new Entity<IMedic>({
  medicId: "3b511b98-675a-4565-84a5-c7893f40e329",
  name: "Martin",
  lastname: "Egaña",
  specialtyId: 20,
  age: 30,
});

console.log("user", typeof user.getProperty("userId"));
console.log("medic", typeof medic.getProperty("medicId"));

const userData: Repository<Entity<IUser>, number> = new UserData();
const medicData: Repository<Entity<IMedic>, string> = new MedicData();

const userLogic = new UserLogic(userData);
const medicLogic = new MedicLogic(medicData);

userLogic.add(user);
medicLogic.add(medic);
