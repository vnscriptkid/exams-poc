import { BaseAppEntity } from 'src/common/base.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import { RoomBooking } from 'src/room-bookings/entities/room-booking.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
@Entity('exam_schedules')
export class ExamSchedule extends BaseAppEntity {
  @Column()
  occupied_capacity: number;

  // @Column({ type: 'timestamp' })
  // date: Date;

  @Column({ nullable: true })
  date: number;

  @Column()
  startTime: number; // number of millis since start of day

  @Column()
  endTime: number;

  @Column()
  startSeatNo: number;

  @Column()
  endSeatNo: number;

  // RELATIONSHIP FIELDS
  @OneToOne(() => Exam, (exam) => exam.examSchedule)
  @JoinColumn()
  exam: Exam;

  @ManyToOne(() => RoomBooking, (roomBooking) => roomBooking.examSchedules)
  @JoinColumn({ name: 'room_booking_id' })
  roomBooking: RoomBooking;
}
