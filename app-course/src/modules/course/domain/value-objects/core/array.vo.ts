export class ArrayVO<TypeArray> {
  private readonly val: TypeArray[] | undefined;

  constructor(
    value: TypeArray[] | undefined,
    minLength: number,
    elementName: string,
  ) {
    if (value) {
      if (value.length < minLength)
        throw new Error(
          `Array ${elementName} must have at least ${minLength} items`,
        );

      this.val = value;
    }
  }

  get value(): TypeArray[] | undefined {
    return this.val;
  }
}
