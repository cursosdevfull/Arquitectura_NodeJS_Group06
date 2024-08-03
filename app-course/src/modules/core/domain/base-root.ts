type TypedDate = Date | undefined;

export abstract class BaseRoot {
  isActive: boolean = true;
  createdAt!: Date;
  updatedAt: TypedDate;
  deletedAt: TypedDate;
}
