import { AggregateRoot } from "../core/domain/aggregate-root";
import { IEventDomain } from "./event-domain";

export class DomainEvents {
  static markedAggregates: AggregateRoot[] = [];
  static handlerMap: any = {};

  static markedAggregateToDispatch(egg: AggregateRoot) {
    const found = !!this.findMarkedAggregateById(egg.id);
    if (!found) {
      this.markedAggregates.push(egg);
    }
  }

  static findMarkedAggregateById(id: string) {
    let found = null;
    for (let egg of this.markedAggregates) {
      if (egg.id === id) {
        found = egg;
      }
    }

    return found;
  }

  static register(cb: (evt: IEventDomain) => void, eventClassName: string) {
    if (!this.handlerMap.hasOwnProperty(eventClassName)) {
      this.handlerMap[eventClassName] = [];
    }

    this.handlerMap[eventClassName].push(cb);
  }

  static dispatchEventsForAggregate(id: string) {
    const aggregate = this.findMarkedAggregateById(id);
    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clear();
      this.removeAggregateFromMarkedDispatchList(aggregate);
    }
  }

  static dispatchAggregateEvents(aggregate: AggregateRoot) {
    aggregate.domainEvents.forEach((evt: any) => {
      this.dispatch(evt);
    });
  }

  static dispatch(evt: IEventDomain) {
    const eventClassName = evt.constructor.name;
    if (this.handlerMap.hasOwnProperty(eventClassName)) {
      this.handlerMap[eventClassName].forEach((cb: any) => {
        cb(evt);
      });
    }
  }

  static removeAggregateFromMarkedDispatchList(agg: AggregateRoot) {
    const index = this.markedAggregates.findIndex(
      (aggregate) => aggregate.id === agg.id
    );
    this.markedAggregates.splice(index, 1);
  }
}
