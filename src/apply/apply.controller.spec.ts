import { Test, TestingModule } from '@nestjs/testing';
import { ApplyController } from './apply.controller';
import { ApplyService } from './apply.service';

describe('ApplyController', () => {
  let controller: ApplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplyController],
      providers: [ApplyService],
    }).compile();

    controller = module.get<ApplyController>(ApplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
