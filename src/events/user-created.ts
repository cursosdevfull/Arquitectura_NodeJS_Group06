import { User } from "src/entities/user";

import { IEventDomain } from "./event-domain";

export class UserCreated implements IEventDomain {
  dateTimeOcurred: Date;
  user: User;

  constructor(user: User) {
    this.dateTimeOcurred = new Date();
    this.user = user;
  }

  getAggregateId(): string {
    return this.user.properties.userId;
  }
}
