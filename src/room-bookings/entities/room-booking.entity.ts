import { ExamSchedule } from './../../exam-schedules/entities/exam-schedule.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('room_bookings')
export class RoomBooking {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  @Column()
  organizationId: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  roomId: number; // PK

  @Column()
  examSlotId: number; // PK

  @Column()
  supervisorsNeeded: number;

  @Column({ nullable: true })
  comment: string;

  @Column()
  teExtId: string;

  // RELATIONSHIPS
  @OneToMany(() => ExamSchedule, (examSchedule) => examSchedule.roomBooking)
  examSchedules: ExamSchedule[];
}
