// =====================================================
// 🔥 DRESSIFY - ENHANCED DYNAMIC E-COMMERCE PLATFORM
// =====================================================
// Version: 2.0 - Production Ready with Error Handling

'use strict';

// ============== GLOBAL ERROR HANDLER ==============
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    showNotification('⚠️ An unexpected error occurred', 'error');
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
    showNotification('⚠️ Operation failed', 'error');
});

// ============== UTILITY CLASSES ==============

// Error Handler
class ErrorHandler {
    static handle(error, context = '') {
        const message = error.message || String(error);
        console.error(`[${context}] ${message}`, error);
        showNotification(`❌ ${context}: ${message}`, 'error');
        return { error: true, message };
    }

    static validate(condition, message) {
        if (!condition) throw new Error(message);
    }

    static validateObject(obj, requiredFields) {
        requiredFields.forEach(field => {
            if (!(field in obj)) {
                throw new Error(`Missing required field: ${field}`);
            }
        });
    }
}

// Enhanced Product Database with Numeric Prices
const products = [
    // TOPS
    { id: 1, name: 'Classic Blue T-Shirt', category: 'tops', price: 29.99, discount: 0, tags: ['casual', 'blue', 'tshirt'], reviews: 234, rating: 4.8, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt', tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top', description: 'Comfortable and stylish classic blue t-shirt for everyday wear.', material: 'Cotton', type: 'upper', style: ['casual', 'versatile'], skinTone: ['all'] },
    { id: 2, name: 'Red V-Neck', category: 'tops', price: 34.99, discount: 10, tags: ['formal', 'red', 'elegant'], reviews: 189, rating: 4.9, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Red+VNeck', tryOnImage: 'https://via.placeholder.com/180x120/e74c3c/ffffff?text=Red+Top', description: 'Elegant red v-neck shirt perfect for any occasion.', material: 'Cotton-Blend', type: 'upper', style: ['elegant', 'formal'], skinTone: ['fair', 'medium', 'dark'] },
    { id: 3, name: 'White Polo Shirt', category: 'tops', price: 39.99, discount: 0, tags: ['business', 'white', 'polo'], reviews: 312, rating: 4.7, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Polo', tryOnImage: 'https://via.placeholder.com/180x120/ecf0f1/333333?text=White+Top', description: 'Classic white polo shirt with collar detail.', material: 'Pique Cotton', type: 'upper', style: ['formal', 'business'], skinTone: ['all'] },
    { id: 4, name: 'Black Hoodie', category: 'tops', price: 54.99, discount: 15, tags: ['casual', 'warm', 'black'], reviews: 456, rating: 4.9, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Hoodie', tryOnImage: 'https://via.placeholder.com/180x120/2c3e50/ffffff?text=Black+Hoodie', description: 'Cozy black hoodie perfect for cold weather.', material: 'Cotton-Polyester', type: 'upper', style: ['casual', 'sporty'], skinTone: ['all'] },
    { id: 5, name: 'Striped Shirt', category: 'tops', price: 44.99, discount: 5, tags: ['trendy', 'casual', 'striped'], reviews: 167, rating: 4.5, image: 'https://via.placeholder.com/300x300/f39c12/ffffff?text=Striped+Shirt', tryOnImage: 'https://via.placeholder.com/180x120/f39c12/ffffff?text=Striped+Top', description: 'Trendy striped shirt for a casual look.', material: 'Cotton', type: 'upper', style: ['casual', 'trendy'], skinTone: ['fair', 'medium'] },
    { id: 6, name: 'Designer Blazer', category: 'tops', price: 79.99, discount: 20, tags: ['professional', 'formal', 'blazer'], reviews: 278, rating: 4.9, image: 'https://via.placeholder.com/300x300/34495e/ffffff?text=Designer+Blazer', tryOnImage: 'https://via.placeholder.com/180x120/34495e/ffffff?text=Blazer+Top', description: 'Professional designer blazer for formal occasions.', material: 'Wool Blend', type: 'upper', style: ['formal', 'professional'], skinTone: ['all'] },

    // BOTTOMS
    { id: 7, name: 'Blue Jeans', category: 'bottoms', price: 59.99, discount: 0, tags: ['casual', 'denim', 'blue'], reviews: 523, rating: 4.8, image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Blue+Jeans', tryOnImage: 'https://via.placeholder.com/180x140/1e3a5f/ffffff?text=Blue+Jeans', description: 'Classic blue denim jeans for everyday wear.', material: 'Denim', type: 'lower', style: ['casual', 'versatile'], skinTone: ['all'] },
    { id: 8, name: 'Black Pants', category: 'bottoms', price: 49.99, discount: 12, tags: ['formal', 'black', 'work'], reviews: 401, rating: 4.8, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Pants', tryOnImage: 'https://via.placeholder.com/180x140/2c3e50/ffffff?text=Black+Pants', description: 'Formal black pants perfect for work or events.', material: 'Polyester-Wool', type: 'lower', style: ['formal', 'business'], skinTone: ['all'] },
    { id: 9, name: 'Khaki Chinos', category: 'bottoms', price: 44.99, discount: 8, tags: ['casual', 'chinos', 'versatile'], reviews: 289, rating: 4.6, image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Khaki+Chinos', tryOnImage: 'https://via.placeholder.com/180x140/d4af37/ffffff?text=Khaki+Chinos', description: 'Versatile khaki chinos for casual to semi-formal looks.', material: 'Cotton Twill', type: 'lower', style: ['casual', 'business'], skinTone: ['fair', 'medium'] },
    { id: 10, name: 'Gray Shorts', category: 'bottoms', price: 34.99, discount: 0, tags: ['summer', 'casual', 'shorts'], reviews: 156, rating: 4.7, image: 'https://via.placeholder.com/300x300/95a5a6/ffffff?text=Gray+Shorts', tryOnImage: 'https://via.placeholder.com/180x140/95a5a6/ffffff?text=Gray+Shorts', description: 'Comfortable gray shorts for summer.', material: 'Cotton', type: 'lower', style: ['casual', 'summer'], skinTone: ['all'] },
    { id: 11, name: 'Denim Skirt', category: 'bottoms', price: 54.99, discount: 15, tags: ['trendy', 'denim', 'skirt'], reviews: 234, rating: 4.8, image: 'https://via.placeholder.com/300x300/5b4b8a/ffffff?text=Denim+Skirt', tryOnImage: 'https://via.placeholder.com/180x140/5b4b8a/ffffff?text=Denim+Skirt', description: 'Stylish denim skirt with a modern cut.', material: 'Stretch Denim', type: 'lower', style: ['casual', 'trendy'], skinTone: ['fair', 'medium', 'dark'] },
    { id: 12, name: 'Leather Leggings', category: 'bottoms', price: 64.99, discount: 10, tags: ['trendy', 'elegant', 'leather'], reviews: 345, rating: 4.9, image: 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Leather+Leggings', tryOnImage: 'https://via.placeholder.com/180x140/1a1a1a/ffffff?text=Leggings', description: 'Premium leather leggings for a trendy look.', material: 'Faux Leather', type: 'lower', style: ['trendy', 'elegant'], skinTone: ['medium', 'dark'] },

    // SHOES
    { id: 13, name: 'White Sneakers', category: 'shoes', price: 74.99, discount: 5, tags: ['casual', 'sneakers', 'white'], reviews: 612, rating: 4.8, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Sneakers', tryOnImage: 'https://via.placeholder.com/180x80/ecf0f1/333333?text=White+Shoes', description: 'Clean white sneakers for a casual look.', material: 'Canvas-Rubber', type: 'shoes', style: ['casual', 'sporty'], skinTone: ['all'] },
    { id: 14, name: 'Black Formal Shoes', category: 'shoes', price: 89.99, discount: 18, tags: ['formal', 'elegant', 'black'], reviews: 467, rating: 4.9, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Formal+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/2c3e50/ffffff?text=Formal+Shoes', description: 'Elegant black formal shoes for special occasions.', material: 'Leather', type: 'shoes', style: ['formal', 'elegant'], skinTone: ['all'] },
    { id: 15, name: 'Brown Loafers', category: 'shoes', price: 79.99, discount: 0, tags: ['business', 'casual', 'loafers'], reviews: 334, rating: 4.8, image: 'https://via.placeholder.com/300x300/8b4513/ffffff?text=Brown+Loafers', tryOnImage: 'https://via.placeholder.com/180x80/8b4513/ffffff?text=Brown+Shoes', description: 'Comfortable brown loafers for business casual.', material: 'Suede', type: 'shoes', style: ['business', 'casual'], skinTone: ['fair', 'medium'] },
    { id: 16, name: 'Red Athletic Shoes', category: 'shoes', price: 84.99, discount: 12, tags: ['sporty', 'athletic', 'red'], reviews: 589, rating: 4.9, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Athletic+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/e74c3c/ffffff?text=Red+Shoes', description: 'Sporty red athletic shoes for active wear.', material: 'Mesh-Synthetic', type: 'shoes', style: ['sporty', 'casual'], skinTone: ['all'] },
    { id: 17, name: 'Blue Sandals', category: 'shoes', price: 49.99, discount: 0, tags: ['summer', 'casual', 'sandals'], reviews: 198, rating: 4.6, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Sandals', tryOnImage: 'https://via.placeholder.com/180x80/3498db/ffffff?text=Blue+Shoes', description: 'Comfortable blue sandals for summer.', material: 'Rubber', type: 'shoes', style: ['casual', 'summer'], skinTone: ['all'] },
    { id: 18, name: 'Designer Heels', category: 'shoes', price: 99.99, discount: 22, tags: ['formal', 'elegant', 'heels'], reviews: 421, rating: 4.9, image: 'https://via.placeholder.com/300x300/e91e63/ffffff?text=Designer+Heels', tryOnImage: 'https://via.placeholder.com/180x80/e91e63/ffffff?text=Heels', description: 'Elegant designer heels for special occasions.', material: 'Patent Leather', type: 'shoes', style: ['formal', 'elegant'], skinTone: ['fair', 'medium', 'dark'] }
];

// ============== STATE MANAGEMENT ==============
const appState = {
    cart: JSON.parse(localStorage.getItem('dressify_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('dressify_wishlist')) || [],
    currentFilter: 'all',
    searchQuery: '',
    selectedItems: { upper: null, lower: null, shoes: null },
    currentPhotoDataUrl: null,
    cameraStream: null,
    sortBy: 'popularity',
    priceRange: [0, 200],
    selectedStyle: [],
    userPreferences: JSON.parse(localStorage.getItem('dressify_prefs')) || {},
    darkMode: localStorage.getItem('dressify_darkMode') === 'true'
};

// ============== PERSISTENCE & UTILITIES ==============
function saveState() {
    try {
        localStorage.setItem('dressify_cart', JSON.stringify(appState.cart));
        localStorage.setItem('dressify_wishlist', JSON.stringify(appState.wishlist));
        localStorage.setItem('dressify_prefs', JSON.stringify(appState.userPreferences));
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

function showNotification(message, type = 'info') {
    try {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.setAttribute('role', 'alert');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${getNotificationColor(type)};
            color: white;
            border-radius: 8px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 400px;
            font-weight: 500;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    } catch (error) {
        console.error('Notification error:', error);
    }
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    return colors[type] || colors.info;
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function calculateFinalPrice(price, discount = 0) {
    ErrorHandler.validate(price >= 0, 'Price must be non-negative');
    ErrorHandler.validate(discount >= 0 && discount <= 100, 'Discount must be between 0-100');
    return price * (1 - discount / 100);
}

// ============== INITIALIZATION ==============
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
        setupEventListeners();
    } catch (error) {
        ErrorHandler.handle(error, 'Initialization');
    }
});

function initializeApp() {
    loadProducts('all');
    loadFeaturedProducts();
    updateCartUI();
    setupResponsiveMenu();
}

function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', 
                hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value.toLowerCase();
            loadProducts(appState.currentFilter);
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            appState.sortBy = e.target.value;
            loadProducts(appState.currentFilter);
        });
    }

    // Price range slider
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            appState.priceRange[1] = parseFloat(e.target.value);
            loadProducts(appState.currentFilter);
        });
    }
}

function setupResponsiveMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

// ============== PRODUCT LOADING ==============
function loadProducts(category) {
    try {
        const productsGrid = document.getElementById('productsGrid');
        ErrorHandler.validate(productsGrid, 'Products grid not found');
        
        productsGrid.innerHTML = '';
        appState.currentFilter = category;

        let filtered = category === 'all' 
            ? [...products] 
            : products.filter(p => p.category === category);

        // Apply search filter
        if (appState.searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(appState.searchQuery) ||
                p.description.toLowerCase().includes(appState.searchQuery) ||
                p.tags.some(tag => tag.includes(appState.searchQuery))
            );
        }

        // Apply price filter
        filtered = filtered.filter(p => 
            p.price >= appState.priceRange[0] && 
            p.price <= appState.priceRange[1]
        );

        // Apply sorting
        filtered = sortProducts(filtered, appState.sortBy);

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">
                    <p>No products found. Try adjusting your filters.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
        });
    } catch (error) {
        ErrorHandler.handle(error, 'loadProducts');
    }
}

function sortProducts(list, sortBy) {
    const sorted = [...list];
    
    switch(sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.reverse();
        default: // popularity
            return sorted.sort((a, b) => b.reviews - a.reviews);
    }
}

function createProductCard(product) {
    try {
        ErrorHandler.validateObject(product, ['id', 'name', 'price', 'tryOnImage']);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        
        const finalPrice = calculateFinalPrice(product.price, product.discount);
        const discountBadge = product.discount > 0 
            ? `<span class="discount-badge">-${product.discount}%</span>` 
            : '';
        
        const ratingStars = '★'.repeat(Math.floor(product.rating)) + 
                           (product.rating % 1 >= 0.5 ? '½' : '');
        
        card.innerHTML = `
            <div class="product-image-wrapper">
                ${discountBadge}
                <img src="${product.tryOnImage}" alt="${product.name}" class="product-image">
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id}, event)" aria-label="Add to wishlist" title="Add to wishlist">♥</button>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <div class="product-rating">
                    <span class="stars">${ratingStars}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${product.discount > 0 ? `<span class="original-price">${formatPrice(product.price)}</span>` : ''}
                    <span class="current-price">${formatPrice(finalPrice)}</span>
                </div>
                <button class="add-btn" onclick="addProductToCart(${product.id}, event)" aria-label="Add to cart">
                    Add to Cart
                </button>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.wishlist-btn') && !e.target.closest('.add-btn')) {
                tryOnProduct(product, card);
            }
        });
        
        return card;
    } catch (error) {
        ErrorHandler.handle(error, 'createProductCard');
        return document.createElement('div');
    }
}

// ============== TRY-ON FUNCTIONALITY ==============
function tryOnProduct(product, cardElement) {
    try {
        ErrorHandler.validate(product, 'Product is required');
        
        document.querySelectorAll('.product-card.selected').forEach(card => {
            card.classList.remove('selected');
        });
        
        if (cardElement) {
            cardElement.classList.add('selected');
        }
        
        const elementId = `clothing-${product.type}`;
        const element = document.getElementById(elementId);
        
        if (element) {
            element.src = product.tryOnImage;
        }
        
        const finalPrice = calculateFinalPrice(product.price, product.discount);
        
        const itemName = document.getElementById('item-name');
        if (itemName) itemName.textContent = product.name;
        
        const itemCategory = document.getElementById('item-category');
        if (itemCategory) {
            itemCategory.textContent = `${product.category.charAt(0).toUpperCase() + product.category.slice(1)}${product.discount > 0 ? ` (-${product.discount}%)` : ''}`;
        }
        
        const itemPrice = document.getElementById('item-price');
        if (itemPrice) itemPrice.textContent = formatPrice(finalPrice);
        
        const itemDescription = document.getElementById('item-description');
        if (itemDescription) itemDescription.textContent = product.description;
        
        const itemMaterial = document.getElementById('item-material');
        if (itemMaterial) itemMaterial.innerHTML = `<strong>Material:</strong> ${product.material}`;
        
        const itemRating = document.getElementById('item-rating');
        if (itemRating) {
            itemRating.innerHTML = `<strong>Rating:</strong> ${'★'.repeat(Math.floor(product.rating))} (${product.reviews} reviews)`;
        }
        
        appState.selectedItems[product.type] = product;
        
        // Smooth scroll to try-on section
        const tryOnSection = document.querySelector('.try-on-section');
        if (tryOnSection) {
            tryOnSection.scrollIntoView({ behavior: 'smooth' });
        }
    } catch (error) {
        ErrorHandler.handle(error, 'tryOnProduct');
    }
}

// ============== FEATURED PRODUCTS ==============
function loadFeaturedProducts() {
    try {
        const featuredGrid = document.getElementById('featuredGrid');
        if (!featuredGrid) return;
        
        featuredGrid.innerHTML = '';
        
        const featured = products
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);
        
        featured.forEach(product => {
            const finalPrice = calculateFinalPrice(product.price, product.discount);
            const discountBadge = product.discount > 0 
                ? `<span class="discount-badge">-${product.discount}%</span>` 
                : '';
            
            const card = document.createElement('div');
            card.className = 'featured-card';
            card.innerHTML = `
                <div class="featured-image">
                    ${discountBadge}
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="featured-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="featured-price">
                        ${product.discount > 0 ? `<span class="original-price">${formatPrice(product.price)}</span>` : ''}
                        <span>${formatPrice(finalPrice)}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addProductToCart(${product.id}, event)">Add to Cart</button>
                </div>
            `;
            featuredGrid.appendChild(card);
        });
    } catch (error) {
        ErrorHandler.handle(error, 'loadFeaturedProducts');
    }
}

// ============== CART MANAGEMENT ==============
function addProductToCart(productId, event) {
    try {
        if (event) event.stopPropagation();
        
        const product = products.find(p => p.id == productId);
        ErrorHandler.validate(product, `Product with ID ${productId} not found`);
        
        const finalPrice = calculateFinalPrice(product.price, product.discount);
        appState.cart.push({ 
            ...product, 
            cartId: Date.now() + Math.random(),
            finalPrice: finalPrice
        });
        
        saveState();
        updateCartUI();
        showNotification(`✓ ${product.name} added to cart!`, 'success');
    } catch (error) {
        ErrorHandler.handle(error, 'addProductToCart');
    }
}

function removeFromCart(cartId) {
    try {
        appState.cart = appState.cart.filter(item => item.cartId !== cartId);
        saveState();
        updateCartUI();
        renderCart();
        showNotification('Item removed from cart', 'info');
    } catch (error) {
        ErrorHandler.handle(error, 'removeFromCart');
    }
}

function updateCartUI() {
    try {
        const badge = document.getElementById('cart-count');
        if (badge) {
            badge.textContent = appState.cart.length;
            badge.style.animation = 'pulse 0.6s ease';
        }
    } catch (error) {
        console.error('Error updating cart UI:', error);
    }
}

function openCart() {
    try {
        const cartModal = document.getElementById('cartModal');
        ErrorHandler.validate(cartModal, 'Cart modal not found');
        
        cartModal.style.display = 'flex';
        cartModal.setAttribute('aria-hidden', 'false');
        renderCart();
    } catch (error) {
        ErrorHandler.handle(error, 'openCart');
    }
}

function closeCart() {
    try {
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            cartModal.style.display = 'none';
            cartModal.setAttribute('aria-hidden', 'true');
        }
    } catch (error) {
        ErrorHandler.handle(error, 'closeCart');
    }
}

function renderCart() {
    try {
        const cartItems = document.getElementById('cartItems');
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        
        if (!cartItems) return;
        
        if (appState.cart.length === 0) {
            cartItems.innerHTML = '';
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            
            const subtotal = document.getElementById('subtotal');
            const tax = document.getElementById('tax');
            const total = document.getElementById('total');
            
            if (subtotal) subtotal.textContent = formatPrice(0);
            if (tax) tax.textContent = formatPrice(0);
            if (total) total.textContent = formatPrice(0);
            return;
        }
        
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        
        cartItems.innerHTML = appState.cart.map(item => `
            <div class="cart-item" data-cart-id="${item.cartId}">
                <img src="${item.tryOnImage}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.finalPrice || item.price)}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})" aria-label="Remove item">Remove</button>
            </div>
        `).join('');
        
        updateCartSummary();
    } catch (error) {
        ErrorHandler.handle(error, 'renderCart');
    }
}

function updateCartSummary() {
    try {
        const subtotal = appState.cart.reduce((sum, item) => 
            sum + (item.finalPrice || calculateFinalPrice(item.price, item.discount)), 0
        );
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        
        const subtotalEl = document.getElementById('subtotal');
        const taxEl = document.getElementById('tax');
        const totalEl = document.getElementById('total');
        
        if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
        if (taxEl) taxEl.textContent = formatPrice(tax);
        if (totalEl) totalEl.textContent = formatPrice(total);
    } catch (error) {
        ErrorHandler.handle(error, 'updateCartSummary');
    }
}

function checkout() {
    try {
        if (appState.cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            return;
        }
        
        showNotification('🎉 Order placed successfully! Thank you for shopping with Dressify!', 'success');
        appState.cart = [];
        saveState();
        updateCartUI();
        closeCart();
    } catch (error) {
        ErrorHandler.handle(error, 'checkout');
    }
}

// ============== WISHLIST ==============
function toggleWishlist(productId, event) {
    try {
        event.stopPropagation();
        const product = products.find(p => p.id == productId);
        ErrorHandler.validate(product, `Product with ID ${productId} not found`);
        
        const index = appState.wishlist.findIndex(p => p.id == productId);
        
        if (index > -1) {
            appState.wishlist.splice(index, 1);
            event.target.textContent = '♡';
            event.target.classList.remove('active');
            showNotification(`Removed from wishlist`, 'info');
        } else {
            appState.wishlist.push(product);
            event.target.textContent = '♥';
            event.target.classList.add('active');
            showNotification(`${product.name} added to wishlist!`, 'success');
        }
        
        saveState();
    } catch (error) {
        ErrorHandler.handle(error, 'toggleWishlist');
    }
}

// ============== UTILITY FUNCTIONS ==============
function scrollToSection(selector) {
    try {
        const element = document.querySelector(selector);
        ErrorHandler.validate(element, `Section ${selector} not found`);
        
        element.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        ErrorHandler.handle(error, 'scrollToSection');
    }
}

function filterProducts(category) {
    try {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (event && event.target) {
            event.target.classList.add('active');
        }
        
        loadProducts(category);
    } catch (error) {
        ErrorHandler.handle(error, 'filterProducts');
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    .notification {
        animation: slideInRight 0.3s ease;
    }

    .add-btn {
        transition: all 0.3s ease;
    }

    .add-btn:hover {
        transform: translateY(-2px);
    }

    .add-btn:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Dressify Enhanced v2.0 loaded successfully');
