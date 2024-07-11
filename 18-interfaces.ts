interface IUserMethods {
  update(name: string): Date;
  delete(): Date;
  properties(): object;
}

interface IUser {
  userId: number;
}

interface IAudit {
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

class User implements IUserMethods, IUser, IAudit {
  readonly userId: number;
  private name: string;
  private age: number;
  private email: string;
  readonly createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;

  constructor(name: string, age: number, email: string) {
    this.userId = new Date().getTime();
    this.name = name;
    this.age = age;
    this.email = email;
    this.createdAt = new Date();
  }

  update(name: string): Date {
    throw new Error("Method not implemented.");
  }
  delete(): Date {
    throw new Error("Method not implemented.");
  }
  properties(): object {
    throw new Error("Method not implemented.");
  }
}
