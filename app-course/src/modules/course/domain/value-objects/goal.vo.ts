import { Goal } from '../entities/goal';
import { ArrayVO } from './core/array.vo';

export class GoalVO extends ArrayVO<Goal> {
  constructor(value: Goal[] | undefined, minLength = 1) {
    super(value, minLength, 'goals');
  }
}
