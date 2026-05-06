import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Helper function to calculate cart totals
const calculateCartTotals = (cart) => {
  let subtotal = 0;
  let totalItems = 0;

  cart.items.forEach(item => {
    subtotal += item.finalPrice * item.quantity;
    totalItems += item.quantity;
  });

  const tax = subtotal * 0.18; // 18% GST
  const shippingCost = subtotal > 500 ? 0 : 10; // Free shipping over 500
  const totalPrice = subtotal + tax + shippingCost;

  return { totalItems, subtotal, tax, shippingCost, totalPrice };
};

// ==================== GET CART ====================
router.get('/', protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');

    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
      await cart.save();
    }

    const totals = calculateCartTotals(cart);
    cart.totalItems = totals.totalItems;
    cart.subtotal = totals.subtotal;
    cart.tax = totals.tax;
    cart.shippingCost = totals.shippingCost;
    cart.totalPrice = totals.totalPrice;

    res.json({
      success: true,
      cart
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== ADD TO CART ====================
router.post('/add', protect, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    if (!productId || quantity < 1) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid product or quantity' 
      });
    }

    // Verify product exists and has stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ 
        success: false, 
        message: 'Insufficient stock' 
      });
    }

    // Find or create cart
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
    }

    // Check if product already in cart
    const existingItem = cart.items.find(
      item => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.finalPrice = product.finalPrice * existingItem.quantity;
    } else {
      cart.items.push({
        productId,
        productName: product.name,
        quantity,
        price: product.price,
        discount: product.discount,
        finalPrice: product.finalPrice * quantity
      });
    }

    await cart.save();

    const totals = calculateCartTotals(cart);
    cart.totalItems = totals.totalItems;
    cart.subtotal = totals.subtotal;
    cart.tax = totals.tax;
    cart.shippingCost = totals.shippingCost;
    cart.totalPrice = totals.totalPrice;

    res.json({
      success: true,
      message: 'Product added to cart',
      cart
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== UPDATE CART ITEM ====================
router.put('/update/:itemId', protect, async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid quantity' 
      });
    }

    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ 
        success: false, 
        message: 'Cart not found' 
      });
    }

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res.status(404).json({ 
        success: false, 
        message: 'Item not found in cart' 
      });
    }

    item.quantity = quantity;
    item.finalPrice = item.price * (1 - item.discount / 100) * quantity;
    await cart.save();

    const totals = calculateCartTotals(cart);
    cart.totalItems = totals.totalItems;
    cart.subtotal = totals.subtotal;
    cart.tax = totals.tax;
    cart.shippingCost = totals.shippingCost;
    cart.totalPrice = totals.totalPrice;

    res.json({
      success: true,
      message: 'Cart updated',
      cart
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== REMOVE FROM CART ====================
router.delete('/remove/:itemId', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ 
        success: false, 
        message: 'Cart not found' 
      });
    }

    cart.items.id(req.params.itemId).deleteOne();
    await cart.save();

    const totals = calculateCartTotals(cart);
    cart.totalItems = totals.totalItems;
    cart.subtotal = totals.subtotal;
    cart.tax = totals.tax;
    cart.shippingCost = totals.shippingCost;
    cart.totalPrice = totals.totalPrice;

    res.json({
      success: true,
      message: 'Item removed from cart',
      cart
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// ==================== CLEAR CART ====================
router.delete('/clear', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ 
        success: false, 
        message: 'Cart not found' 
      });
    }

    cart.items = [];
    cart.totalItems = 0;
    cart.subtotal = 0;
    cart.tax = 0;
    cart.totalPrice = 0;
    await cart.save();

    res.json({
      success: true,
      message: 'Cart cleared',
      cart
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

export default router;
