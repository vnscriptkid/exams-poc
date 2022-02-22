import { Controller, Get, Param } from '@nestjs/common';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examService: ExamsService) {}

  @Get(':id')
  getOneExam(@Param('id') id: number) {
    return this.examService.findById(id);
  }

  @Get()
  async getExams() {
    // take orgId from jwt token
    const organizationId = '61a62dfeed7de1002347c8a1';

    return await this.examService.findAllByOrgQuery(organizationId).getMany();
  }
}
