import { Get, Inject, Injectable } from '@nestjs/common';
import { DRIZZLE, DrizzleInstance } from './drizzle/drizzle.provider';
import { eq, getTableColumns } from 'drizzle-orm';
import { orders, products } from './drizzle/schema';

@Injectable()
export class AppService {
  constructor(@Inject(DRIZZLE) private drizzle:DrizzleInstance) {
  //  
  }
  async getAll() {
   try{
    const res = await this.drizzle.query.products.findFirst({
      with: {
        orders: true,
      }
     })
     
  
      return res
   }catch(e){
    console.log(e)
    throw e
   }
  }
}
