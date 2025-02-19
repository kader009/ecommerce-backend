import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (productData: TOrder) => {
  const result = await Order.create(productData);
  return result;
};

export const OrderService = {
  createOrderIntoDb
}