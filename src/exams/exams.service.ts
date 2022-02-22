import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam) private readonly examRepository: Repository<Exam>,
  ) {}

  findById(id: number) {
    return this.examRepository.findOne(id, { relations: ['children'] });
  }

  findAllByOrgId(organizationId: string) {
    return this.examRepository.find({
      select: [],
      where: { organizationId },
      relations: ['children', 'linkedFromExams', 'parent'],
      take: 100,
    });
  }

  findAllByOrgQuery(organizationId: string) {
    return this.examRepository
      .createQueryBuilder('e')
      .where('e.organization_id = :organizationId', { organizationId })
      .andWhere('e.parent is NULL') // parent exam || single exam
      .leftJoinAndSelect('e.linkedFromExams', 'l')
      .leftJoinAndSelect('e.children', 'e2')
      .leftJoinAndSelect('e2.examSchedule', 'examSchedule')
      .take(100)
      .printSql();
  }
}
