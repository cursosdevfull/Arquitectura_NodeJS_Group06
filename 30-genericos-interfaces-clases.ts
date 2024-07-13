// domain
class User {
  userId: string;
  name: string;
  lastname: string;
}

class Medic {
  medicId: string;
  name: string;
  lastname: string;
  age: number;
  cmp: string;
}

class Student {
  studentId: string;
  name: string;
  lastname: string;
}

interface ICreate<Entity> {
  add(entity: Entity): void;
  getReport(): void;
  update(entity: Entity): void;
}

interface ICreateUser extends ICreate<User> {
  delete(user: User): void;
}

// infrastructure
class Infrastructure<Entity> implements ICreate<Entity> {
  add(entity: Entity) {
    console.log("record inserted");
  }
  getReport(): void {
    throw new Error("Method not implemented.");
  }

  update(entity: Entity) {
    console.log("updated");
  }
}

class InfrastructureUser extends Infrastructure<User> implements ICreateUser {
  delete(user: User) {}
}

// application

class Application<Entity> {
  constructor(protected readonly service: ICreate<Entity>) {}

  insert(entity: Entity) {
    this.service.add(entity);
  }
}

class ApplicationUser extends Application<User> {
  constructor(protected readonly service: ICreateUser) {
    super(service);
  }

  delete(user: User) {
    console.log("User deleted");
  }
}

const user = new User();
const infrastructure: ICreateUser = new InfrastructureUser();
const application: ApplicationUser = new ApplicationUser(infrastructure);

application.insert(user);
application.delete(user);

const medic = new Medic();
const infrastructureMedic: Infrastructure<Medic> = new Infrastructure<Medic>();
const applicationMedic: Application<Medic> = new Application(
  infrastructureMedic
);

applicationMedic.insert(medic);

const student = new Student();
const infrastructureStudent: Infrastructure<Student> =
  new Infrastructure<Student>();
const applicationStudent: Application<Student> = new Application(
  infrastructureStudent
);

applicationStudent.insert(student);
