import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Product name is required'],
    trim: true 
  },
  description: {
    type: String,
    default: ''
  },
  category: { 
    type: String, 
    enum: ['tops', 'bottoms', 'shoes'], 
    required: [true, 'Category is required'] 
  },
  type: { 
    type: String, 
    enum: ['upper', 'lower', 'shoes'],
    required: true
  },
  price: { 
    type: Number, 
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  discount: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 100
  },
  finalPrice: { 
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x300?text=Product+Image'
  },
  tryOnImage: {
    type: String,
    default: 'https://via.placeholder.com/180x120?text=Try+On'
  },
  material: {
    type: String,
    default: 'Cotton'
  },
  rating: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  reviews: { 
    type: Number, 
    default: 0 
  },
  stock: { 
    type: Number, 
    default: 0,
    min: 0
  },
  inStock: { 
    type: Boolean, 
    default: true 
  },
  style: [String],
  tags: [String],
  isFeatured: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

// Pre-save middleware to calculate final price
productSchema.pre('save', function(next) {
  this.finalPrice = this.price * (1 - this.discount / 100);
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Product', productSchema);
