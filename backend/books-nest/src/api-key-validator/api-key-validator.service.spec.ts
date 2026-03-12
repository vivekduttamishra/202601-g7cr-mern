import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyValidatorService } from './api-key-validator.service';

describe('ApiKeyValidatorService', () => {
  let service: ApiKeyValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiKeyValidatorService],
    }).compile();

    service = module.get<ApiKeyValidatorService>(ApiKeyValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
