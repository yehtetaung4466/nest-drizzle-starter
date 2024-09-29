import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getAll: jest.fn(), // mock getAll method
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should call getAll method in AppService', async () => {
    const mockResponse = { id: 1, name: 'Product',price:1, orders: [] };
    jest.spyOn(appService, 'getAll').mockResolvedValue(mockResponse);

    const result = await appController.getAll();

    // Check that getAll was called and returned the correct value
    expect(appService.getAll).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });
});
