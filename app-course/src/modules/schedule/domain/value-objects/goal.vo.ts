import { ArrayVO } from '../../../core/domain/value-objects/array.vo';
import { Goal } from '../entities/goal';

export class GoalVO extends ArrayVO<Goal> {
  constructor(value: Goal[] | undefined, minLength = 1) {
    super(value, minLength, 'goals');
  }
}
