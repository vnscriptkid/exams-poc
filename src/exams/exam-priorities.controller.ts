import { PriorityDto } from './dtos/priority.dto';
import { CreatePriorityDto } from './dtos/create-priority.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PrioritiesService } from './priorities.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';

@Controller('exams/:id/priorities')
export class ExamPrioritiesController {
  constructor(private readonly prioritiesService: PrioritiesService) {}

  @Serialize(PriorityDto)
  @Get()
  async getExamPriorities(@Param('id') examId: number) {
    return await this.prioritiesService.findForExam(examId);
  }

  @Post()
  @Serialize(PriorityDto)
  createPriorityForExam(
    @Param('id') examId: number,
    @CurrentUser() user: any,
    @Body() createPriorityDto: CreatePriorityDto,
  ) {
    return this.prioritiesService.createForExam(
      examId,
      user.organizationId,
      createPriorityDto,
    );
  }
}
