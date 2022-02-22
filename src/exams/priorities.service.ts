import { Priority } from './entities/priority.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priority)
    private readonly priorityRepository: Repository<Priority>,
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {}

  async findPrioritiesForExam(examId: number) {
    const exam = await this.examRepository.findOne(examId, {
      relations: ['priorities'],
    });

    if (!exam) throw new NotFoundException('Exam not found.');

    return exam.priorities;
  }
}
