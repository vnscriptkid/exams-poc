import { Controller, Get, Param } from '@nestjs/common';
import { PrioritiesService } from './priorities.service';

@Controller('exams/:id')
export class ExamPrioritiesController {
  constructor(private readonly prioritiesService: PrioritiesService) {}

  @Get('priorities')
  getExamPriorities(@Param('id') examId: number) {
    console.log({ examId });

    return this.prioritiesService.findPrioritiesForExam(examId);
  }
}
