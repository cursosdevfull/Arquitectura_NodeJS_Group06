import { ClientException } from '../../exceptions/client.exception';

export class StringVO {
  private readonly val: string;

  constructor(value: string | undefined, minLength: number) {
    if (!value) throw new Error('String is required');

    if (value.trim() === '' || value.length < minLength)
      throw new ClientException(
        `String must have at least ${minLength} characters`,
      );

    this.val = value;
  }

  get value(): string {
    return this.val;
  }
}
