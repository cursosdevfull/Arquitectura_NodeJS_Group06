class Database {
  getConnectionDatabase(
    host: string,
    port: number,
    username: string,
    password: string,
    schema: string
  ) {
    return {
      create: () => "user created",
      update: () => "user updated",
      delete: () => "user deleted",
    };
  }
}

class User {
  userId: number;
  name: string;
  lastname: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  connection: { create(): string; update(): string; delete(): string };

  constructor(name: string, lastname: string, age: number) {
    this.userId = new Date().getTime();
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.connection = new Database().getConnectionDatabase(
      "localhost",
      3306,
      "user01",
      "12345",
      "x9837"
    );
  }

  create() {
    this.connection.create();
  }

  update(age: number) {
    this.age = age;
    this.updatedAt = new Date();
    this.connection.update();
  }

  delete() {
    this.deletedAt = new Date();
    this.connection.delete();
  }
}
