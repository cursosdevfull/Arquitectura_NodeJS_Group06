export class Goal {
  readonly description: string;

  constructor(description: string) {
    if (!description) throw new Error('Goal must have a description');
    this.description = description;
  }
}
