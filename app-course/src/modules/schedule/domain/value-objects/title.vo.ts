import { StringVO } from '../../../core/domain/value-objects/string.vo';

export class TitleVO extends StringVO {
  constructor(value: string | undefined, minLength = 5) {
    super(value, minLength);
  }
}
