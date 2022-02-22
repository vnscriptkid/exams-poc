import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  controllers: [ExamsController],
  providers: [ExamsService],
})
export class ExamsModule {}
