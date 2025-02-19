import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  type: z.number(),
  value: z.boolean(),
});

const ProductValidatoinSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantsValidationSchema),
  inventory: z.array(inventoryValidationSchema),
});

export default ProductValidatoinSchema;
