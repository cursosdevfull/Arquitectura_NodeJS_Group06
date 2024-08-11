import { Goal } from '../../../course/domain/entities/goal';
import { ArrayVO } from '../../../course/domain/value-objects/core/array.vo';

export class GoalVO extends ArrayVO<Goal> {
  constructor(value: Goal[] | undefined, minLength = 1) {
    super(value, minLength, 'goals');
  }
}
