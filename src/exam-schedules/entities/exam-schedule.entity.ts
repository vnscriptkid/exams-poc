import { Exam } from 'src/exams/entities/exam.entity';
import { RoomBooking } from 'src/room-bookings/entities/room-booking.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('examSchedules')
export class ExamSchedule {
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
  occupied_capacity: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  start_time: number; // number of millis since start of day

  @Column()
  end_time: number;

  @Column()
  start_seat_no: number;

  @Column()
  end_seat_no: number;

  // RELATIONSHIP FIELDS
  @OneToOne(() => Exam, (exam) => exam.examSchedule)
  @JoinColumn()
  exam: Exam;

  @ManyToOne(() => RoomBooking, (roomBooking) => roomBooking.examSchedules)
  @JoinColumn({ name: 'room_booking_id' })
  roomBooking: RoomBooking;
}
