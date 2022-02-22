import { ExamDto } from './dtos/exam.dto';
import { Controller, Get, Param } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examService: ExamsService) {}

  @Get(':id')
  @Serialize(ExamDto)
  getOneExam(@Param('id') examId: number, @CurrentUser() user) {
    return this.examService.findOneWithScheduling(examId, user.organizationId);
  }

  @Get()
  @Serialize(ExamDto)
  async getExams(@CurrentUser() user: any) {
    const exams = await this.examService.findAllByOrgWithScheduling(
      user.organizationId,
    );

    // const examIds = exams.map((e) => (e.dataValues || e).id);

    // const { studentRegisteredExams, studentAllocatedExams } =
    //   await this.calculateRegisteredAndAllocated(exams, examIds, {
    //     organizationId,
    //   });

    // const allExams = exams;

    // let builtExams = allExams.map((e) => {
    //   const {
    //     Y _linked_from_ids,
    //     Y _group_ids,
    //     _child_scheduled_students,
    //     _publication_statuses,
    //     _is_group,
    //     _is_fully_scheduled,
    //     start_seat_no: scheduled_start_seat_no,
    //     end_seat_no: scheduled_end_seat_no,
    //     start_time: scheduled_start_time,
    //     end_time: scheduled_end_time,
    //     room_id: scheduled_room_id,
    //     exam_slot_id: scheduled_exam_slot_id,
    //     room_booking_id: scheduled_room_booking_id,
    //     room_booking_date: exam_target_date,
    //     checklist = [],
    //     ...restExamInfo
    //   } = e;

    //   const { publication_status } = restExamInfo;

    //   let childrenIds;
    //   let arrPuplicationStatuses = [publication_status];
    //   const linkedFromExamIds = _linked_from_ids
    //     ? _linked_from_ids.split(',').map((_id) => parseInt(_id, 10))
    //     : [];

    //   if (_is_group) {
    //     childrenIds = _group_ids
    //       ? _group_ids.split(',').map((_id) => parseInt(_id, 10))
    //       : [];
    //     arrPuplicationStatuses = (_publication_statuses || '').split(',');

    //     arrPuplicationStatuses.shift();
    //     childrenIds.shift();
    //   } else {
    //     childrenIds = [];
    //   }

    //   let publicationStatus;
    //   if (!_is_group) {
    //     publicationStatus = publication_status;
    //   } else {
    //     publicationStatus =
    //       _.find(
    //         arrPuplicationStatuses,
    //         (status) => status === examStatus.NOT_PUBLISHED
    //       ) ||
    //       _.find(
    //         arrPuplicationStatuses,
    //         (status) => status === examStatus.PUBLISHED_WITH_CHANGES
    //       ) ||
    //       _.find(
    //         arrPuplicationStatuses,
    //         (status) => status === examStatus.DEPUBLISHED
    //       ) ||
    //       _.find(
    //         arrPuplicationStatuses,
    //         (status) => status === examStatus.PUBLISHED
    //       ) ||
    //       publication_status;
    //   }

    //   const registeredStudents = studentRegisteredExams[e.id] || 0;
    //   const allocatedStudents = studentAllocatedExams[e.id] || 0;

    //   return {
    //     ...restExamInfo,
    //     checklist,
    //     publication_status: publicationStatus,
    //     students_registered: registeredStudents,
    //     students_allocated: allocatedStudents,

    //     linked_from_exam_ids: linkedFromExamIds,
    //     is_scheduled: _is_fully_scheduled,
    //     scheduled_start_time,
    //     scheduled_end_time,
    //     scheduled_room_id,
    //     scheduled_exam_slot_id,
    //     scheduled_room_booking_id,
    //     scheduled_end_seat_no,
    //     scheduled_start_seat_no,
    //     exam_target_date,
    //     '@children': childrenIds,
    //   };
    // });

    // if (!withChildren) {
    //   const examIds = (exams || []).map((e) => e.id);
    //   builtExams = builtExams.filter((e) => examIds.includes(e.id));
    // }

    // const uniqData = _.uniqBy(builtExams, (e) => e.id);

    // return uniqData;

    return exams;
  }
}
