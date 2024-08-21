import { v4 as uuidv4 } from "uuid";

import { DomainEvents } from "../../events/domain-event";
import { IEventDomain } from "../../events/event-domain";

export abstract class AggregateRoot {
  private _domainEvents: IEventDomain[] = [];
  private _id: string = uuidv4();

  addEventDomain(event: IEventDomain) {
    this._domainEvents.push(event);
    DomainEvents.markedAggregateToDispatch(this);
  }

  get domainEvents() {
    return this._domainEvents;
  }

  get id() {
    return this._id;
  }

  clear() {
    this._domainEvents.splice(0, this.domainEvents.length);
  }
}
