import mongoose from 'mongoose';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Cart from '../models/Cart.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
  // TOPS
  { name: 'Classic Blue T-Shirt', category: 'tops', type: 'upper', price: 29.99, discount: 0, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt', tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top', material: 'Cotton', rating: 5, reviews: 234, stock: 100, isFeatured: true },
  { name: 'Red V-Neck', category: 'tops', type: 'upper', price: 34.99, discount: 10, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Red+VNeck', tryOnImage: 'https://via.placeholder.com/180x120/e74c3c/ffffff?text=Red+Top', material: 'Cotton-Blend', rating: 4.8, reviews: 189, stock: 80 },
  { name: 'White Polo Shirt', category: 'tops', type: 'upper', price: 39.99, discount: 0, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Polo', tryOnImage: 'https://via.placeholder.com/180x120/ecf0f1/333333?text=White+Top', material: 'Pique Cotton', rating: 5, reviews: 312, stock: 120 },
  { name: 'Black Hoodie', category: 'tops', type: 'upper', price: 54.99, discount: 15, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Hoodie', tryOnImage: 'https://via.placeholder.com/180x120/2c3e50/ffffff?text=Black+Hoodie', material: 'Cotton-Polyester', rating: 5, reviews: 456, stock: 90, isFeatured: true },
  { name: 'Striped Shirt', category: 'tops', type: 'upper', price: 44.99, discount: 5, image: 'https://via.placeholder.com/300x300/f39c12/ffffff?text=Striped+Shirt', tryOnImage: 'https://via.placeholder.com/180x120/f39c12/ffffff?text=Striped+Top', material: 'Cotton', rating: 4.7, reviews: 167, stock: 75 },
  { name: 'Designer Blazer', category: 'tops', type: 'upper', price: 79.99, discount: 20, image: 'https://via.placeholder.com/300x300/34495e/ffffff?text=Designer+Blazer', tryOnImage: 'https://via.placeholder.com/180x120/34495e/ffffff?text=Blazer+Top', material: 'Wool Blend', rating: 5, reviews: 278, stock: 50 },
  // BOTTOMS
  { name: 'Blue Jeans', category: 'bottoms', type: 'lower', price: 59.99, discount: 0, image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Blue+Jeans', tryOnImage: 'https://via.placeholder.com/180x140/1e3a5f/ffffff?text=Blue+Jeans', material: 'Denim', rating: 5, reviews: 523, stock: 150, isFeatured: true },
  { name: 'Black Pants', category: 'bottoms', type: 'lower', price: 49.99, discount: 10, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Pants', tryOnImage: 'https://via.placeholder.com/180x140/2c3e50/ffffff?text=Black+Pants', material: 'Polyester-Wool', rating: 4.9, reviews: 401, stock: 120 },
  { name: 'Khaki Chinos', category: 'bottoms', type: 'lower', price: 44.99, discount: 5, image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Khaki+Chinos', tryOnImage: 'https://via.placeholder.com/180x140/d4af37/ffffff?text=Khaki+Chinos', material: 'Cotton Twill', rating: 4.6, reviews: 289, stock: 100 },
  { name: 'Gray Shorts', category: 'bottoms', type: 'lower', price: 34.99, discount: 0, image: 'https://via.placeholder.com/300x300/95a5a6/ffffff?text=Gray+Shorts', tryOnImage: 'https://via.placeholder.com/180x140/95a5a6/ffffff?text=Gray+Shorts', material: 'Cotton', rating: 5, reviews: 156, stock: 110 },
  { name: 'Denim Skirt', category: 'bottoms', type: 'lower', price: 54.99, discount: 12, image: 'https://via.placeholder.com/300x300/5b4b8a/ffffff?text=Denim+Skirt', tryOnImage: 'https://via.placeholder.com/180x140/5b4b8a/ffffff?text=Denim+Skirt', material: 'Stretch Denim', rating: 5, reviews: 234, stock: 85 },
  { name: 'Leather Leggings', category: 'bottoms', type: 'lower', price: 64.99, discount: 8, image: 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Leather+Leggings', tryOnImage: 'https://via.placeholder.com/180x140/1a1a1a/ffffff?text=Leggings', material: 'Faux Leather', rating: 5, reviews: 345, stock: 70 },
  // SHOES
  { name: 'White Sneakers', category: 'shoes', type: 'shoes', price: 74.99, discount: 0, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Sneakers', tryOnImage: 'https://via.placeholder.com/180x80/ecf0f1/333333?text=White+Shoes', material: 'Canvas-Rubber', rating: 5, reviews: 612, stock: 200, isFeatured: true },
  { name: 'Black Formal Shoes', category: 'shoes', type: 'shoes', price: 89.99, discount: 15, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Formal+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/2c3e50/ffffff?text=Formal+Shoes', material: 'Leather', rating: 5, reviews: 467, stock: 130 },
  { name: 'Brown Loafers', category: 'shoes', type: 'shoes', price: 79.99, discount: 10, image: 'https://via.placeholder.com/300x300/8b4513/ffffff?text=Brown+Loafers', tryOnImage: 'https://via.placeholder.com/180x80/8b4513/ffffff?text=Brown+Shoes', material: 'Suede', rating: 5, reviews: 334, stock: 95 },
  { name: 'Red Athletic Shoes', category: 'shoes', type: 'shoes', price: 84.99, discount: 5, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Athletic+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/e74c3c/ffffff?text=Red+Shoes', material: 'Mesh-Synthetic', rating: 5, reviews: 589, stock: 140, isFeatured: true },
  { name: 'Blue Sandals', category: 'shoes', type: 'shoes', price: 49.99, discount: 0, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Sandals', tryOnImage: 'https://via.placeholder.com/180x80/3498db/ffffff?text=Blue+Shoes', material: 'Rubber', rating: 4.5, reviews: 198, stock: 160 },
  { name: 'Designer Heels', category: 'shoes', type: 'shoes', price: 99.99, discount: 20, image: 'https://via.placeholder.com/300x300/e91e63/ffffff?text=Designer+Heels', tryOnImage: 'https://via.placeholder.com/180x80/e91e63/ffffff?text=Heels', material: 'Patent Leather', rating: 5, reviews: 421, stock: 60 }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    await Cart.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert products
    await Product.insertMany(products);
    console.log(`✅ ${products.length} products seeded`);

    // Create admin user
    const adminUser = new User({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@dressify.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      phone: '+1 (555) 000-0000',
      role: 'admin'
    });
    await adminUser.save();
    console.log('✅ Admin user created');

    // Create sample user
    const sampleUser = new User({
      name: 'John Doe',
      email: 'user@dressify.com',
      password: 'User@123',
      phone: '+1 (555) 123-4567',
      role: 'user'
    });
    await sampleUser.save();
    console.log('✅ Sample user created');

    // Create empty carts for users
    await Cart.create([
      { userId: adminUser._id, items: [] },
      { userId: sampleUser._id, items: [] }
    ]);
    console.log('✅ Carts created');

    console.log('\n🎉 Database seeded successfully!\n');
    console.log('Test Credentials:');
    console.log('Admin Email: admin@dressify.com');
    console.log('Admin Password: Admin@123');
    console.log('\nUser Email: user@dressify.com');
    console.log('User Password: User@123\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
}

seedDatabase();
