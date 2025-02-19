import express from 'express';
import { ProductController } from './product.controllers';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.get('/:productId', ProductController.getSingleProduct);

export const ProductRouter = router;
