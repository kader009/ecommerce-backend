import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductIntoDb = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = { createProductIntoDb, getAllProductIntoDb };
