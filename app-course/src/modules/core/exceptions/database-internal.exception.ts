import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class DatabaseInternalException extends BaseException {
  constructor(message?: string) {
    super(message);
    this.name = 'DatabaseInternalException';
    this.status = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
