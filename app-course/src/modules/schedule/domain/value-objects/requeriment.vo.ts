import { ArrayVO } from '../../../core/domain/value-objects/array.vo';

export class RequerimentVO extends ArrayVO<string> {
  constructor(value: string[] | undefined, minLength = 1) {
    super(value, minLength, 'requeriments');
  }
}
