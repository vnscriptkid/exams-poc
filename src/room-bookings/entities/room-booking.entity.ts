import { ExamSchedule } from './../../exam-schedules/entities/exam-schedule.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAppEntity } from 'src/common/base.entity';

@Entity('room_bookings')
export class RoomBooking extends BaseAppEntity {
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
