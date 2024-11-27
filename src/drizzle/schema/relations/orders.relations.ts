import { relations } from "drizzle-orm";
import { orders } from "../orders";
import { products } from "../products";

export const orderToProduct=relations(orders,(ctx)=>({
    product: ctx.one(products,{
        fields: [orders.product_id],
        references: [products.id]
    })
}))