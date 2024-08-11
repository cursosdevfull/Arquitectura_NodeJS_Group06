import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryColumn({ type: 'uuid' })
  courseId!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  /*   @Column({ type: 'varchar', length: 255, nullable: true })
  level!: string;

  @Column({ type: 'json', nullable: true })
  requeriments!: string[];

  @Column({ type: 'json', nullable: true })
  goals!: string[];

  @Column({ type: 'json', nullable: true })
  syllabus!: string[]; */

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt!: Date;
}
