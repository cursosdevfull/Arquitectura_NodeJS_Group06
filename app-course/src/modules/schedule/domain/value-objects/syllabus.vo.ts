import { ArrayVO } from '../../../course/domain/value-objects/core/array.vo';

export class SyllabusVO extends ArrayVO<string> {
  constructor(value: string[] | undefined, minLength = 1) {
    super(value, minLength, 'syllabus');
  }
}
