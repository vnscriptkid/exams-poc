import { Expose, Transform, Type } from 'class-transformer';

export class ExamDto {
  @Expose()
  id: number;

  @Expose()
  organizationId: string;

  @Expose()
  name: string;

  @Expose()
  studentsPlanned: number;

  @Expose()
  duration: number;

  @Expose()
  informationToAdministrators: string;

  @Expose()
  status: number;

  @Expose()
  examTypeId: number; // FK

  @Expose()
  languageId: number; // FK

  @Expose()
  ownerId: string;

  @Expose()
  examTime: number;

  @Expose()
  prepTime: number;

  @Expose()
  postTime: number;

  @Expose()
  informationToStudents: string;

  @Expose()
  isReExam: boolean;

  @Expose()
  campus: string;

  @Expose()
  postExamNotes: string;

  @Expose()
  informationToSupervisors: string;

  @Expose()
  publicationStatus: string;

  @Expose()
  publicationDate: Date;

  @Expose()
  publicationUserId: string;

  @Expose()
  publicationBookingId: string;

  @Expose()
  completedSchedulingTime: Date;

  @Expose()
  externalReference: string;

  @Expose()
  cancelledAt: Date;

  @Expose()
  studentsAttended: number;

  @Expose()
  studentsWithSpecialNeeds: number;

  @Expose()
  postExamAttendedStudents: number;

  @Expose()
  isSimpleAllocation: boolean;

  @Expose()
  studentsAllocated: number;

  @Expose()
  studentsRegistered: number;

  @Expose()
  reservationId: number;

  @Expose()
  extObjectProfessors: object;

  @Expose()
  extObjectCoordinators: object;

  @Expose()
  extObjectCostCenters: object;

  @Expose()
  extObjectCourses: object;

  @Expose()
  extObjectCourseEvents: object;

  @Expose()
  extObjectCourseParts: object;

  @Expose()
  extObjectDepartments: object;

  @Expose()
  extObjectExternalCustomers: object;

  @Expose()
  extObjectPrograms: object;

  @Expose()
  extObjectStudentGroups: object;

  @Expose()
  extObjectModules: object;

  @Expose()
  checklist: object;

  @Expose()
  commentToScheduler: string;

  @Expose()
  source: string;

  @Expose()
  originCoreReservationId: string;

  @Expose()
  originCoreReservationData: object;

  // SCHEDULING INFO
  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.id || null)
  examScheduledId: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.endSeatNo || null)
  scheduledEndSeatNo: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.startSeatNo || null)
  scheduledStartSeatNo: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.startTime || null)
  scheduledStartTime: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.endTime || null)
  scheduledEndTime: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.roomBooking?.examSlotId || null)
  scheduledExamSlotId: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.roomBooking?.id || null)
  scheduledRoomBookingId: number;

  @Expose()
  @Transform(({ obj }) => obj?.examSchedule?.roomBooking?.roomId)
  scheduledRoomId: number;

  @Expose()
  parentId: number;

  @Expose()
  @Type(() => ExamDto)
  children: ExamDto[];

  @Expose()
  @Transform(({ obj }) => {
    const IS_SINGLE = !obj.parentId && obj.children.length === 0;
    const IS_GROUP_PARENT = !obj.parentId && obj.children.length > 0;
    const IS_GROUP_CHILD = Boolean(obj.parentId);

    switch (true) {
      case IS_SINGLE:
        return Boolean(obj?.examSchedule?.id);
      case IS_GROUP_PARENT: {
        const totalStudents = obj.children.reduce(
          (s, x) => s + x.studentsPlanned,
          0,
        );
        const allChildrenAreScheduled = obj.children.every(
          (x) => !!x?.examSchedule?.id,
        );

        return allChildrenAreScheduled && totalStudents === obj.studentsPlanned;
      }
      case IS_GROUP_CHILD:
        return Boolean(obj?.examSchedule?.id);
    }
    return false;
  })
  isScheduled: boolean;
}
