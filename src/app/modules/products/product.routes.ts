import express from 'express';
import { ProductController } from './product.controllers';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.get('/:productId', ProductController.getSingleProduct);
router.put('/:productId', ProductController.updateSingleProduct);
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRouter = router;
