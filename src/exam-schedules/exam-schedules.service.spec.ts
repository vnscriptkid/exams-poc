import { Test, TestingModule } from '@nestjs/testing';
import { ExamSchedulesService } from './exam-schedules.service';

describe('ExamSchedulesService', () => {
  let service: ExamSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamSchedulesService],
    }).compile();

    service = module.get<ExamSchedulesService>(ExamSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
