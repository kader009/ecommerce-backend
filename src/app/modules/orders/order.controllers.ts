import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderService } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParser = orderValidationSchema.parse(req.body);
    const result = await OrderService.createOrderIntoDb(zodParser);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
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
};
