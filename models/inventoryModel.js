import mongoose from "mongoose";
const inventorySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true,
  },
});

const Products = mongoose.model("Products",inventorySchema);
export default Products;