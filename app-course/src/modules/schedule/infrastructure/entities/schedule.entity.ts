import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

import { CourseEntity } from '../../../course/infrastructure/entities/course.entity';
import { GoalEntity } from './goal.entity';

@Entity({ name: 'schedule' })
@Index('schedule_pkey', ['scheduleId', 'description'], { unique: true })
export class ScheduleEntity {
  @PrimaryColumn({ type: 'uuid' })
  scheduleId!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  level: string;

  @Column({ type: 'varchar', length: 255 })
  description!: string;

  @Column({ type: 'json', nullable: true })
  requeriments!: string[];

  @Column({ type: 'json', nullable: true })
  syllabus: string[];

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt!: Date;

  @ManyToOne(() => CourseEntity, (course) => course.schedules)
  course: CourseEntity;

  @OneToMany(() => GoalEntity, (goal) => goal.schedule, { cascade: true })
  goals: GoalEntity[];
}
