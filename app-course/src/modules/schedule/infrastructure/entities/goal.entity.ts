import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'goal' })
export class GoalEntity {
  @PrimaryGeneratedColumn()
  goalId: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => ScheduleEntity, (schedule) => schedule.goals)
  schedule: ScheduleEntity;
}
