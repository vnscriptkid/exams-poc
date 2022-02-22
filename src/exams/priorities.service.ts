import { CreatePriorityDto } from './dtos/create-priority.dto';
import { Priority } from './entities/priority.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { ExamsService } from './exams.service';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priority)
    private readonly priorityRepository: Repository<Priority>,
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
    private readonly examService: ExamsService,
  ) {}

  async findForExam(id: number) {
    const exam = await this.examRepository.findOne(id, {
      relations: ['priorities'],
    });

    if (!exam) throw new NotFoundException('Exam not found.');

    return exam.priorities;
  }

  async validateAgainstSettingsThrow(
    createPriorityDto: CreatePriorityDto,
    organizationId: string,
  ) {
    // TODO: validate against exam settings, throw validation errors
  }

  async createForExam(
    examId: number,
    organizationId: string,
    createPriorityDto: CreatePriorityDto,
  ) {
    await this.validateAgainstSettingsThrow(createPriorityDto, organizationId);

    const exam = await this.examService.findByIdAndOrgIdThrow(
      examId,
      organizationId,
    );

    const priority = this.priorityRepository.create(createPriorityDto);

    priority.exam = exam;

    return this.priorityRepository.save(priority);
  }
}
