import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE, DrizzleInstance } from './drizzle/drizzle.provider';
import { ResponseObj } from './shared/classes';

@Injectable()
export class AppService {
  constructor(@Inject(DRIZZLE) private drizzle: DrizzleInstance) {}

  async getAll() {
    try {
      // Use the columns in the query
      const res = await this.drizzle.query.products.findFirst({
        with: {
          orders:true // Access only specified columns in the `orders` relation
        },
      });

      return new ResponseObj(['success'], res);
    } catch (e) {
      throw e;
    }
  }
}
