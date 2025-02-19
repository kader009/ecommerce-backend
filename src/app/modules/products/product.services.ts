import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductIntoDb = async (searchTerm = '') => {
  const query = searchTerm
    ? { name: { $regex: searchTerm, $options: 'i' } }
    : {};

  const result = await Product.find(query);
  return result;
};

const getSingleProductIntoDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

export const ProductService = {
  createProductIntoDb,
  getAllProductIntoDb,
  getSingleProductIntoDb,
};
