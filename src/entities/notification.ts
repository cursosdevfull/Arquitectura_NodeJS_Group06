import { DomainEvents } from "../events/domain-event";

export class Notification {
  constructor() {
    DomainEvents.register(this.sentEmail, "UserCreated");
  }

  sentEmail(message: any) {
    console.log("Email sent!", message);
  }
}
