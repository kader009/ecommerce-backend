import express from 'express';
import cors from 'cors'
import { ProductRouter } from './app/modules/products/product.routes';
const app = express();


// middileware
app.use(express.json());
app.use(cors())

// routes
app.use('/api/v1/products', ProductRouter)

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
