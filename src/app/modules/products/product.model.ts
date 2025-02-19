import { model, Schema } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const VariantSchema = new Schema<TVariant>({
  type: String,
  value: String,
});

const InventorySchema = new Schema<TInventory>({
  quantity: Number,
  isStock: Boolean,
});

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema
});

export const Product = model('Product', ProductSchema);
