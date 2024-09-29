import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { DRIZZLE } from './drizzle/drizzle.provider';

describe('AppService', () => {
  let service: AppService;
  let drizzleMock: any;

  beforeEach(async () => {
    drizzleMock = {
      query: {
        products: {
          findFirst: jest.fn(), // mock the findFirst method
        },
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: DRIZZLE,
          useValue: drizzleMock, // inject the mock here
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should call findFirst method on drizzle.query.products', async () => {
    // Mock the return value of findFirst
    const mockResponse = { id: 1, name: 'Product', orders: [] };
    drizzleMock.query.products.findFirst.mockResolvedValue(mockResponse);

    const result = await service.getAll();

    // Expect the findFirst method to have been called
    expect(drizzleMock.query.products.findFirst).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });

  it('should handle errors', async () => {
    drizzleMock.query.products.findFirst.mockRejectedValue(new Error('Database error'));

    await expect(service.getAll()).rejects.toThrow('Database error');
  });
});
