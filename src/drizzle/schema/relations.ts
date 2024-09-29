import { relations } from "drizzle-orm";
import { orders } from "./orders";
import { products } from "./products";

export const orderRelation = relations(orders,(ctx)=>({
    product: ctx.one(products,{
        fields: [orders.product_id],
        references: [products.id]
    })
}))

export const productRelation = relations(products,(ctx)=>({
    orders: ctx.many(orders)
}))

