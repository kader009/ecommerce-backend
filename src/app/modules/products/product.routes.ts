import express from 'express';
import { ProductController } from './product.controllers';
import verifyToken from '../../middleware/auth.middleware';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.get('/:productId', verifyToken, ProductController.getSingleProduct);
router.put('/:productId', ProductController.updateSingleProduct);
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRouter = router;
