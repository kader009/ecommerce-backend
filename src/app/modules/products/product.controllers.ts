import { Request, Response } from 'express';
import ProductValidatoinSchema from './product.validation';
import { ProductService } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParser = ProductValidatoinSchema.parse(req.body);
    const result = await ProductService.createProductIntoDb(zodParser);

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

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductService.getAllProductIntoDb();

  res.status(200).json({
    success: true,
    message: 'Product fetch successfully',
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
};
