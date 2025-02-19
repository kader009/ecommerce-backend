import express from 'express'
import { ProductController } from './product.controllers';

const router = express.Router()

router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.createProduct)

export const ProductRouter = router;