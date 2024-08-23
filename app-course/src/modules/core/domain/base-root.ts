import { AggregateRoot } from '@nestjs/cqrs';

type TypedDate = Date | undefined | null;

export abstract class BaseRoot extends AggregateRoot {
  isActive: boolean = true;
  createdAt!: Date;
  updatedAt: TypedDate;
  deletedAt: TypedDate;
}
