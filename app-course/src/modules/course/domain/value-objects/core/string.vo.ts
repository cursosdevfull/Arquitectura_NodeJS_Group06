export class StringVO {
  private readonly val: string;

  constructor(value: string | undefined, minLength: number) {
    if (!value) throw new Error('String is required');

    if (value.trim() === '' || value.length < minLength)
      throw new Error(`String must have at least ${minLength} characters`);

    this.val = value;
  }

  get value(): string {
    return this.val;
  }
}
