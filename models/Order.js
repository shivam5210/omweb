import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: { 
    type: String, 
    unique: true,
    required: true
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    productName: String,
    quantity: Number,
    price: Number,
    discount: Number,
    finalPrice: Number
  }],
  shippingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    phone: String
  },
  paymentInfo: {
    method: {
      type: String,
      enum: ['credit_card', 'debit_card', 'upi', 'wallet', 'cod'],
      default: 'cod'
    },
    transactionId: String,
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending'
    }
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'],
    default: 'pending'
  },
  trackingNumber: String,
  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  totalAmount: {
    type: Number,
    required: true
  },
  notes: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  deliveredAt: Date,
  cancelledAt: Date
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
