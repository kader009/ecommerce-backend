import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderService } from './order.services';
import { Product } from '../products/product.model';

const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParser = orderValidationSchema.safeParse(req.body);

    if (
      typeof zodParser.error !== 'undefined' &&
      zodParser.error.name === 'ZodError'
    ) {
      const Errorof = zodParser.error.issues.map((err) => err.message);

      return res.status(500).json({
        success: false,
        message: 'validation error',
        errors: Errorof,
      });
    }

    if (zodParser.success) {
      const product = await Product.findById(zodParser.data.productId);

      if (product && product.inventory.quantity < zodParser.data.quantity)
        return res.status(400).json({
          success: false,
          message: 'Insufficient quantity available in this inventory',
        });

      if (product) {
        product.inventory.quantity =
          product.inventory.quantity - zodParser.data.quantity;

        product.inventory.inStock =
          product.inventory.quantity === 0 ? false : true;

        const result = await OrderService.createOrderIntoDb(zodParser.data);
        await product.save();

        return res.status(200).json({
          success: true,
          message: 'Order placed successfully',
          data: result,
        });
      }
    }
  } catch (error) {
    let message = 'Something went wrong';
    if (error instanceof Error) {
      message = error.message;
    }

    res.status(500).json({
      success: false,
      message: message,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  const email = req.query.email;
  try {
    const order = await OrderService.getOrdersIntoDb(
      email as string | undefined
    );

    if (order.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No order match with this email',
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Orders data fetch successfully',
      data: order,
    });
  } catch (error) {
    let message = 'Something went wrong';
    if (error instanceof Error) {
      message = error.message;
    }

    res.status(500).json({
      success: false,
      message: message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
