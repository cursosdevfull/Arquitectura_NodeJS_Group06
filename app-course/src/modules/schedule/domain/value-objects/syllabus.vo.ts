import { ArrayVO } from '../../../core/domain/value-objects/array.vo';

export class SyllabusVO extends ArrayVO<string> {
  constructor(value: string[] | undefined, minLength = 1) {
    super(value, minLength, 'syllabus');
  }
}
