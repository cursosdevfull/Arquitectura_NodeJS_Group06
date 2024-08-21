import { Log } from "./entities/log";
import { Notification } from "./entities/notification";
import { User, UserProperties } from "./entities/user";
import { DomainEvents } from "./events/domain-event";

const log = new Log();
const notification = new Notification();

const props: UserProperties = {
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@email.com",
  password: "password",
};

const user = User.create(props);
/* console.log(user.properties);
console.log(DomainEvents.markedAggregates); */
//console.log("user.id", user.id);
DomainEvents.dispatchEventsForAggregate(user.id);
