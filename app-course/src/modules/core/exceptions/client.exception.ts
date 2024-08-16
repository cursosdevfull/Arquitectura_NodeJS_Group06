import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class ClientException extends BaseException {
  constructor(message?: string) {
    super(message);
    this.name = 'ClientException';
    this.status = HttpStatus.BAD_REQUEST;
  }
}
