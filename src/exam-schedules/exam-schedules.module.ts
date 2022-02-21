import { Module } from '@nestjs/common';
import { ExamSchedulesController } from './exam-schedules.controller';
import { ExamSchedulesService } from './exam-schedules.service';

@Module({
  controllers: [ExamSchedulesController],
  providers: [ExamSchedulesService]
})
export class ExamSchedulesModule {}
