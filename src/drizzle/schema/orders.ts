import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { products } from "./products";


export const orders = pgTable('orders',{
    id: serial('id').primaryKey(),
    stock: integer('stock').default(100),
    product_id: serial('product_id').references(()=>products.id)
})

// export type Order = typeof orders.$inferSelect
// export type newOrder = typeof orders.$inferInsert


