import { v4 as uuidv4 } from "uuid";

import { AggregateRoot } from "../core/domain/aggregate-root";
import { UserCreated } from "../events/user-created";

type UserRequired = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

type UserOptional = {
  userId: string;
};

export type UserProperties = UserRequired & Partial<UserOptional>;

export class User extends AggregateRoot {
  private readonly userId: string;
  private readonly firstname: string;
  private readonly lastname: string;
  private readonly email: string;
  private readonly password: string;

  private constructor(properties: UserProperties) {
    super();
    this.userId = properties.userId || uuidv4();
    this.firstname = properties.firstname;
    this.lastname = properties.lastname;
    this.email = properties.email;
    this.password = properties.password;

    this.addEventDomain(new UserCreated(this));
  }

  static create(properties: UserProperties) {
    return new User(properties);
  }

  get properties() {
    return {
      userId: this.userId,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    };
  }
}
