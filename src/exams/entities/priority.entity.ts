import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('priorities')
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  roomId: number; // FK

  @Column({ nullable: true })
  examSlotId: number; // FK

  @Column({ nullable: true })
  requestIntervalId: number; // FK

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ nullable: true })
  order: number;

  @Column({ type: 'boolean', nullable: true })
  exactTime: boolean;

  @Column({ type: 'boolean', nullable: true })
  strictDate: boolean;

  @Column({ type: 'boolean', nullable: true })
  strictTime: boolean;

  @Column({ nullable: true })
  exactStartTime: number;

  @Column({ nullable: true })
  exactEndTime: number;

  // TODO: change to date type instead
  @Column({ nullable: true })
  targetDate: string;

  @Column({ nullable: true })
  createdAt: number;

  @Column({ nullable: true })
  updatedAt: number;

  @Column({ nullable: true })
  deletedAt: number;

  // RELATIONSHIPS
  @ManyToOne(() => Exam, (exam) => exam.priorities)
  exam: Exam;
}
