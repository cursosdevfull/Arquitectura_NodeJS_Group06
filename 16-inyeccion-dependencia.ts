class Database {
  getConnectionDatabase(
    host: string,
    port: string,
    username: string,
    password: string,
    schema: string
  ) {
    return {
      create: () => "item created",
      update: () => "item updated",
      delete: () => "item deleted",
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
  orm: { create(): string; update(): string; delete(): string };
  database: Database;

  constructor(name: string, lastname: string, age: number, database: Database) {
    this.userId = new Date().getTime();
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.database = database;

    this.orm = this.database.getConnectionDatabase(
      "localhost",
      "3306",
      "userx",
      "12345",
      ""
    );
  }

  create() {
    console.log(this.orm.create());
  }

  update() {
    console.log(this.orm.update());
  }

  delete() {
    console.log(this.orm.delete());
  }
}

const database = new Database();
const user = new User("Carmen", "Tejada", 30, database);
user.create();
user.update();
user.delete();
