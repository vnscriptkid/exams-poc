import { ExamSchedule } from './../../exam-schedules/entities/exam-schedule.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Priority } from './priority.entity';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: string;

  @Column()
  name: string;

  @Column()
  studentsPlanned: number;

  @Column()
  duration: number;

  @Column()
  informationToAdministrators: string;

  @Column()
  status: number;

  @Column()
  examTypeId: number; // FK

  @Column()
  languageId: number; // FK

  @Column()
  ownerId: string;

  @Column()
  examTime: number;

  @Column()
  prepTime: number;

  @Column()
  postTime: number;

  @Column()
  informationToStudents: string;

  @Column({ default: 0, type: 'boolean' })
  isReExam: boolean;

  @Column()
  campus: string;

  @Column({ type: 'text' })
  postExamNotes: string;

  @Column({ type: 'text' })
  informationToSupervisors: string;

  @Column({ default: 'not_published' })
  publicationStatus: string;

  @Column({ nullable: true, type: 'timestamp' })
  publicationDate: Date;

  @Column({ nullable: true })
  publicationUserId: string;

  @Column({ nullable: true })
  publicationBookingId: string;

  @Column({ nullable: true, type: 'timestamp' })
  completedSchedulingTime: Date;

  @Column({ nullable: true })
  externalReference: string;

  @Column({ nullable: true, type: 'timestamp' })
  cancelledAt: Date;

  @Column({ default: 0 })
  studentsAttended: number;

  @Column({ default: 0 })
  studentsWithSpecialNeeds: number;

  @Column({ default: 0 })
  postExamAttendedStudents: number;

  @Column({ default: false })
  isSimpleAllocation: boolean;

  @Column({ default: 0 })
  studentsAllocated: number;

  @Column({ default: 0 })
  studentsRegistered: number;

  @Column({ nullable: true })
  reservationId: number;

  @Column({ nullable: true, type: 'json' })
  extObjectProfessors: object;

  @Column({ nullable: true, type: 'json' })
  extObjectCoordinators: object;

  @Column({ nullable: true, type: 'json' })
  extObjectCostCenters: object;

  @Column({ nullable: true, type: 'json' })
  extObjectCourses: object;

  @Column({ nullable: true, type: 'json' })
  extObjectCourseEvents: object;

  @Column({ nullable: true, type: 'json' })
  extObjectCourseParts: object;

  @Column({ nullable: true, type: 'json' })
  extObjectDepartments: object;

  @Column({ nullable: true, type: 'json' })
  extObjectExternalCustomers: object;

  @Column({ nullable: true, type: 'json' })
  extObjectPrograms: object;

  @Column({ nullable: true, type: 'json' })
  extObjectStudentGroups: object;

  @Column({ nullable: true, type: 'json' })
  extObjectModules: object;

  @Column({ nullable: true, type: 'json' })
  checklist: object;

  @Column({ type: 'text', nullable: true })
  commentToScheduler: string;

  @Column({ default: 'api' })
  source: string;

  @Column({ nullable: true })
  originCoreReservationId: string;

  @Column({ nullable: true, type: 'json' })
  originCoreReservationData: object;

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

  // RELATIONSHIP FIELDS
  @ManyToOne(() => Exam, (exam) => exam.children, { nullable: true })
  parent: Exam;

  @OneToMany(() => Exam, (exam) => exam.parent)
  children: Exam[];

  @ManyToOne(() => Exam, (exam) => exam.linkedFromExams, { nullable: true })
  linkedExam: Exam;

  @OneToMany(() => Exam, (exam) => exam.linkedExam)
  linkedFromExams: Exam[];

  @OneToOne(() => ExamSchedule, (examSchedule) => examSchedule.exam)
  examSchedule: ExamSchedule;

  @OneToMany(() => Priority, (priority) => priority.exam)
  priorities: Priority[];
}
