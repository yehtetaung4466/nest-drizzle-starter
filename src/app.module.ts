import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  const mockAppService = {
    getAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Product' }]), // Mocking getAll method
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should return the result from the AppService', async () => {
      const result = await controller.getAll();
      expect(result).toEqual([{ id: 1, name: 'Test Product' }]);
      expect(service.getAll).toHaveBeenCalled();
    });
  });
});
