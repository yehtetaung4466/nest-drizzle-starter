import { relations } from "drizzle-orm";
import { orders } from "../orders";
import { products } from "../products";

export const product = relations(products,(ctx)=>({
    orders: ctx.many(orders)
}))