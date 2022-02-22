import { Test, TestingModule } from '@nestjs/testing';
import { ExamPrioritiesController } from './exam-priorities.controller';

describe('ExamPrioritiesController', () => {
  let controller: ExamPrioritiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamPrioritiesController],
    }).compile();

    controller = module.get<ExamPrioritiesController>(ExamPrioritiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
