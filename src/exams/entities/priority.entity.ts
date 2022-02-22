import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('priorities')
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  room_id: number; // FK

  @Column({ nullable: true })
  exam_slot_id: number; // FK

  @Column({ nullable: true })
  request_interval_id: number; // FK

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ nullable: true })
  order: number;

  @Column({ type: 'boolean', nullable: true })
  exact_time: boolean;

  @Column({ type: 'boolean', nullable: true })
  strict_date: boolean;

  @Column({ type: 'boolean', nullable: true })
  strict_time: boolean;

  @Column({ nullable: true })
  exact_start_time: number;

  @Column({ nullable: true })
  exact_end_time: number;

  // DIRTY FIX
  @Column({ nullable: true })
  target_date: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;

  @Column({ nullable: true })
  deleted_at: number;

  // RELATIONSHIPS
  @ManyToOne(() => Exam, (exam) => exam.priorities)
  exam: Exam;
}
