import { Priority } from './entities/priority.entity';
import { ExamPrioritiesController } from './exam-priorities.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';
import { PrioritiesService } from './priorities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Priority])],
  controllers: [ExamsController, ExamPrioritiesController],
  providers: [ExamsService, PrioritiesService],
})
export class ExamsModule {}
