import { DomainEvents } from "../events/domain-event";

export class Log {
  constructor() {
    DomainEvents.register(this.showMessage, "UserCreated");
  }

  showMessage(message: any) {
    console.log(message);
  }
}
