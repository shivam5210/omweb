import express from 'express';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import User from '../models/User.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Generate Order Number
const generateOrderNumber = () => {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

// ==================== CREATE ORDER ====================
router.post('/create', protect, async (req, res) => {
  try {
    const { shippingAddress, paymentInfo } = req.body;

    // Get user's cart
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Cart is empty' 
      });
    }

    // Calculate order totals
    let subtotal = 0;
    cart.items.forEach(item => {
      subtotal += item.finalPrice * item.quantity;
    });

    const tax = subtotal * 0.18;
    const shippingCost = subtotal > 500 ? 0 : 10;
    const totalAmount = subtotal + tax + shippingCost;

    // Create order
    const order = new Order({
      orderNumber: generateOrderNumber(),
      userId: req.user.id,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
        discount: item.discount,
        finalPrice: item.finalPrice
      })),
      shippingAddress,
      paymentInfo: paymentInfo || { method: 'cod', status: 'pending' },
      subtotal,
      tax,
      shippingCost,
      totalAmount
    });

    await order.save();

    // Update user's order history and total spent
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: { orderHistory: order._id },
        $inc: { totalSpent: totalAmount }
      },
      { new: true }
    );

    // Clear cart
    cart.items = [];
    cart.totalItems = 0;
    cart.subtotal = 0;
    cart.tax = 0;
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== GET USER'S ORDERS ====================
router.get('/', protect, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const orders = await Order.find({ userId: req.user.id })
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await Order.countDocuments({ userId: req.user.id });
    const pages = Math.ceil(total / limit);

    res.json({
      success: true,
      orders,
      total,
      pages,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== GET ORDER DETAILS ====================
router.get('/:orderId', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('userId', 'name email');

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    // Check if user owns this order
    if (order.userId._id.toString() !== req.user.id) {
      return res.status(403).json({ 
        success: false, 
        message: 'Unauthorized' 
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== GET ALL ORDERS (ADMIN) ====================
router.get('/admin/all', protect, adminOnly, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    let query = {};

    if (status) query.orderStatus = status;

    const orders = await Order.find(query)
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 })
      .populate('userId', 'name email phone');

    const total = await Order.countDocuments(query);
    const pages = Math.ceil(total / limit);

    res.json({
      success: true,
      orders,
      total,
      pages,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== UPDATE ORDER STATUS (ADMIN) ====================
router.put('/:orderId/status', protect, adminOnly, async (req, res) => {
  try {
    const { orderStatus, trackingNumber } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      {
        orderStatus,
        trackingNumber: trackingNumber || order?.trackingNumber,
        ...(orderStatus === 'delivered' && { deliveredAt: Date.now() }),
        ...(orderStatus === 'cancelled' && { cancelledAt: Date.now() })
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    res.json({
      success: true,
      message: 'Order status updated',
      order
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

export default router;
