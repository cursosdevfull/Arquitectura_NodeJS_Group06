import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ScheduleEntity } from '../../../schedule/infrastructure/entities/schedule.entity';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryColumn({ type: 'uuid' })
  courseId!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt!: Date;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.course)
  schedules!: ScheduleEntity[];
}
