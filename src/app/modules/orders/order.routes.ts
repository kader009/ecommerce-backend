import express from 'express'
import { OrderController } from './order.controllers';

const router = express.Router()

router.post('/', OrderController.createOrder)

export const OrderRouter = router;