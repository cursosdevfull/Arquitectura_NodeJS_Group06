type TypedDate = Date | undefined | null;

export abstract class BaseRoot {
  isActive: boolean = true;
  createdAt!: Date;
  updatedAt: TypedDate;
  deletedAt: TypedDate;
}
