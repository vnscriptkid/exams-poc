import { Controller, Get, Param } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examService: ExamsService) {}

  @Get(':id')
  getOneExam(@Param('id') id: number) {
    return this.examService.findById(id);
  }

  @Get()
  async getExams(@CurrentUser() user: any) {
    return await this.examService
      .findAllByOrgQuery(user.organizationId)
      .getMany();
  }
}
