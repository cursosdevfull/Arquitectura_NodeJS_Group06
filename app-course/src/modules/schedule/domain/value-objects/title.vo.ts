import { StringVO } from '../../../course/domain/value-objects/core/string.vo';

export class TitleVO extends StringVO {
  constructor(value: string | undefined, minLength = 5) {
    super(value, minLength);
  }
}
