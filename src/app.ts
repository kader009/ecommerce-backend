import express from 'express';
import cors from 'cors';
import { ProductRouter } from './app/modules/products/product.routes';
import { OrderRouter } from './app/modules/orders/order.routes';
const app = express();

// middileware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/orders', OrderRouter);

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
