import mongoose from "mongoose"; 

const OrderSchema = new mongoose.Schema({
  
  customerName: {
    type: String,
    required: true,
    index: true,
  },
  orderAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "cancelled"],
    default: "pending",
    index: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,// Adds an index for the `createdAt` field
  },
});

OrderSchema.index({ status: 1, createdAt: -1 });

const OrderModel = mongoose.model("Order", OrderSchema);

export  default  OrderModel ;
// module.exports = OrderModel;

