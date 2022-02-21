import { Test, TestingModule } from '@nestjs/testing';
import { ExamSchedulesController } from './exam-schedules.controller';

describe('ExamSchedulesController', () => {
  let controller: ExamSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamSchedulesController],
    }).compile();

    controller = module.get<ExamSchedulesController>(ExamSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
