import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam) private readonly examRepository: Repository<Exam>,
  ) {}

  findById(id: number) {
    return this.examRepository.findOne(id, {
      relations: ['children', 'priorities'],
    });
  }

  findByIdAndOrgId(examId: number, organizationId: string) {
    return this.examRepository.findOne({
      where: { id: examId, organizationId },
    });
  }

  async findByIdAndOrgIdThrow(examId: number, organizationId: string) {
    const exam = await this.findByIdAndOrgId(examId, organizationId);

    if (!exam) throw new NotFoundException(`Exam not found.`);

    return exam;
  }

  findAllByOrgId(organizationId: string) {
    return this.examRepository.find({
      select: [],
      where: { organizationId },
      relations: ['children', 'linkedFromExams', 'parent'],
      take: 100,
    });
  }

  findAllByOrgWithScheduling(organizationId: string) {
    return this.findExamsWithSchedulingQuery(organizationId).getMany();
  }

  findOneWithScheduling(examId: number, organizationId: string) {
    return this.findExamsWithSchedulingQuery(organizationId, examId).getOne();
  }

  findExamsWithSchedulingQuery(organizationId: string, examId?: number) {
    let qb = this.examRepository.createQueryBuilder('e');

    if (examId) qb.where('e.id = :examId', { examId });

    return (
      qb
        .andWhere('e.organization_id = :organizationId', { organizationId })
        .leftJoinAndSelect('e.linkedFromExams', 'l')
        .leftJoinAndSelect('e.children', 'e2')
        // get scheduling info of child exams (in case current exam is GROUP PARENT)
        .leftJoinAndSelect('e2.examSchedule', 'childExamSchedule')
        // get scheduling info of current exam (in case current exam is GROUP CHILD || SINGLE)
        .leftJoinAndSelect('e.examSchedule', 'examSchedule')
        .leftJoinAndSelect('examSchedule.roomBooking', 'roomBooking')
        .printSql()
    );
  }
}
