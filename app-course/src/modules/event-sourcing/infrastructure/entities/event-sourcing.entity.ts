import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_sourcing' })
export class EventSourcingEntity {
  @PrimaryGeneratedColumn()
  eventSourcingId: number;

  @Column({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: number;

  @Column({ type: 'varchar', length: 100 })
  table: string;

  @Column({ type: 'varchar', length: 20 })
  action: string;

  @Column({ type: 'json' })
  detail: object;
}
