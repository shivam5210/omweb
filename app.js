// =====================================================
// 🔥 DRESSIFY - ENHANCED DYNAMIC E-COMMERCE PLATFORM v2.0
// =====================================================
// Advanced State Management, Error Handling & Dynamic Features

'use strict';

// ============== GLOBAL ERROR HANDLER ==============
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// ============== UTILITY CLASSES ==============
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
            if (!(field in obj)) throw new Error(`Missing required field: ${field}`);
        });
    }
}

// ============== GET PRODUCTS FROM ADMIN OR DEFAULT ==============
function getProductsData() {
    // First, try to get products from admin panel
    const adminProducts = localStorage.getItem('admin_products');
    if (adminProducts) {
        try {
            return JSON.parse(adminProducts);
        } catch (e) {
            console.warn('Error parsing admin products, using defaults');
        }
    }
    
    // Default products if no admin products exist
    return [
        // TOPS
        { id: 1, name: 'Classic Blue T-Shirt', category: 'tops', price: 29.99, image: 'https://placehold.co/300x300/3498db/ffffff?text=Blue+Tshirt', tryOnImage: 'https://placehold.co/180x120/3498db/ffffff?text=Blue+Tshirt', type: 'upper', tags: ['casual'], discount: 0, rating: 4.5, reviews: 45, description: 'Comfortable cotton t-shirt', material: 'Cotton' },
        { id: 2, name: 'Red V-Neck', category: 'tops', price: 34.99, image: 'https://placehold.co/300x300/e74c3c/ffffff?text=Red+VNeck', tryOnImage: 'https://placehold.co/180x120/e74c3c/ffffff?text=Red+VNeck', type: 'upper', tags: ['elegant'], discount: 0, rating: 4.3, reviews: 32, description: 'Elegant red v-neck', material: 'Polyester' },
        { id: 3, name: 'White Polo Shirt', category: 'tops', price: 39.99, image: 'https://placehold.co/300x300/ecf0f1/333333?text=White+Polo', tryOnImage: 'https://placehold.co/180x120/ecf0f1/333333?text=White+Polo', type: 'upper', tags: ['formal'], discount: 0, rating: 4.7, reviews: 58, description: 'Classic polo shirt', material: 'Cotton Blend' },
        { id: 4, name: 'Black Hoodie', category: 'tops', price: 54.99, image: 'https://placehold.co/300x300/2c3e50/ffffff?text=Black+Hoodie', tryOnImage: 'https://placehold.co/180x120/2c3e50/ffffff?text=Black+Hoodie', type: 'upper', tags: ['casual'], discount: 10, rating: 4.8, reviews: 92, description: 'Cozy black hoodie', material: 'Cotton' },
        { id: 5, name: 'Striped Shirt', category: 'tops', price: 44.99, image: 'https://placehold.co/300x300/f39c12/ffffff?text=Striped+Shirt', tryOnImage: 'https://placehold.co/180x120/f39c12/ffffff?text=Striped+Shirt', type: 'upper', tags: ['casual'], discount: 5, rating: 4.4, reviews: 41, description: 'Trendy striped shirt', material: 'Linen' },
        { id: 6, name: 'Designer Blazer', category: 'tops', price: 79.99, image: 'https://placehold.co/300x300/34495e/ffffff?text=Designer+Blazer', tryOnImage: 'https://placehold.co/180x120/34495e/ffffff?text=Designer+Blazer', type: 'upper', tags: ['formal'], discount: 15, rating: 4.9, reviews: 67, description: 'Professional blazer', material: 'Wool' },

        // BOTTOMS
        { id: 7, name: 'Blue Jeans', category: 'bottoms', price: 59.99, image: 'https://placehold.co/300x300/1e3a5f/ffffff?text=Blue+Jeans', tryOnImage: 'https://placehold.co/180x140/1e3a5f/ffffff?text=Blue+Jeans', type: 'lower', tags: ['casual'], discount: 0, rating: 4.6, reviews: 73, description: 'Classic blue jeans', material: 'Denim' },
        { id: 8, name: 'Black Pants', category: 'bottoms', price: 49.99, image: 'https://placehold.co/300x300/2c3e50/ffffff?text=Black+Pants', tryOnImage: 'https://placehold.co/180x140/2c3e50/ffffff?text=Black+Pants', type: 'lower', tags: ['formal'], discount: 8, rating: 4.5, reviews: 54, description: 'Formal black pants', material: 'Polyester Blend' },
        { id: 9, name: 'Khaki Chinos', category: 'bottoms', price: 44.99, image: 'https://placehold.co/300x300/d4af37/ffffff?text=Khaki+Chinos', tryOnImage: 'https://placehold.co/180x140/d4af37/ffffff?text=Khaki+Chinos', type: 'lower', tags: ['casual'], discount: 0, rating: 4.4, reviews: 38, description: 'Casual khaki chinos', material: 'Cotton' },
        { id: 10, name: 'Gray Shorts', category: 'bottoms', price: 34.99, image: 'https://placehold.co/300x300/95a5a6/ffffff?text=Gray+Shorts', tryOnImage: 'https://placehold.co/180x140/95a5a6/ffffff?text=Gray+Shorts', type: 'lower', tags: ['casual'], discount: 0, rating: 4.2, reviews: 29, description: 'Comfortable shorts', material: 'Cotton' },
        { id: 11, name: 'Denim Skirt', category: 'bottoms', price: 54.99, image: 'https://placehold.co/300x300/5b4b8a/ffffff?text=Denim+Skirt', tryOnImage: 'https://placehold.co/180x140/5b4b8a/ffffff?text=Denim+Skirt', type: 'lower', tags: ['casual'], discount: 12, rating: 4.7, reviews: 46, description: 'Stylish denim skirt', material: 'Denim' },
        { id: 12, name: 'Leather Leggings', category: 'bottoms', price: 64.99, image: 'https://placehold.co/300x300/1a1a1a/ffffff?text=Leather+Leggings', tryOnImage: 'https://placehold.co/180x140/1a1a1a/ffffff?text=Leather+Leggings', type: 'lower', tags: ['elegant'], discount: 0, rating: 4.8, reviews: 55, description: 'Premium leather leggings', material: 'Leather' },

        // SHOES
        { id: 13, name: 'White Sneakers', category: 'shoes', price: 74.99, image: 'https://placehold.co/300x300/ecf0f1/333333?text=White+Sneakers', tryOnImage: 'https://placehold.co/180x80/ecf0f1/333333?text=Sneakers', type: 'shoes', tags: ['casual'], discount: 0, rating: 4.6, reviews: 81, description: 'Comfortable sneakers', material: 'Canvas' },
        { id: 14, name: 'Black Formal Shoes', category: 'shoes', price: 89.99, image: 'https://placehold.co/300x300/2c3e50/ffffff?text=Formal+Shoes', tryOnImage: 'https://placehold.co/180x80/2c3e50/ffffff?text=Formal+Shoes', type: 'shoes', tags: ['formal'], discount: 0, rating: 4.9, reviews: 62, description: 'Elegant formal shoes', material: 'Leather' },
        { id: 15, name: 'Brown Loafers', category: 'shoes', price: 79.99, image: 'https://placehold.co/300x300/8b4513/ffffff?text=Brown+Loafers', tryOnImage: 'https://placehold.co/180x80/8b4513/ffffff?text=Loafers', type: 'shoes', tags: ['formal'], discount: 10, rating: 4.5, reviews: 47, description: 'Classic loafers', material: 'Leather' },
        { id: 16, name: 'Red Athletic Shoes', category: 'shoes', price: 84.99, image: 'https://placehold.co/300x300/e74c3c/ffffff?text=Athletic+Shoes', tryOnImage: 'https://placehold.co/180x80/e74c3c/ffffff?text=Athletic+Shoes', type: 'shoes', tags: ['casual'], discount: 0, rating: 4.7, reviews: 53, description: 'Performance athletic shoes', material: 'Mesh' },
        { id: 17, name: 'Blue Sandals', category: 'shoes', price: 49.99, image: 'https://placehold.co/300x300/3498db/ffffff?text=Blue+Sandals', tryOnImage: 'https://placehold.co/180x80/3498db/ffffff?text=Sandals', type: 'shoes', tags: ['casual'], discount: 0, rating: 4.3, reviews: 35, description: 'Casual sandals', material: 'Rubber' },
        { id: 18, name: 'Designer Heels', category: 'shoes', price: 99.99, image: 'https://placehold.co/300x300/e91e63/ffffff?text=Designer+Heels', tryOnImage: 'https://placehold.co/180x80/e91e63/ffffff?text=Heels', type: 'shoes', tags: ['elegant'], discount: 22, rating: 4.8, reviews: 78, description: 'Luxury designer heels', material: 'Leather' }
    ];
}

// Load products dynamically
const products = getProductsData();

// Advanced AI Recommendation Engine
class AIRecommendationEngine {
    static analyzePhoto(photoDataUrl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const recommendations = this.generateRecommendations();
                resolve(recommendations);
            }, 2000);
        });
    }

    static generateRecommendations() {
        const recommendations = [];
        const occasions = ['Casual Everyday', 'Business Professional', 'Evening Elegant'];
        const tops = products.filter(p => p.type === 'upper');
        const bottoms = products.filter(p => p.type === 'lower');
        const shoes = products.filter(p => p.type === 'shoes');

        for (let i = 0; i < 3; i++) {
            const top = tops[Math.floor(Math.random() * tops.length)];
            const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
            const shoe = shoes[Math.floor(Math.random() * shoes.length)];

            const totalPrice = top.price + bottom.price + shoe.price;
            const discount = Math.floor(Math.random() * 15) + 5;
            const finalPrice = (totalPrice * (1 - discount / 100)).toFixed(2);

            recommendations.push({
                outfit: i + 1,
                occasion: occasions[i],
                confidence: 85 + Math.random() * 15,
                discount: discount,
                finalPrice: finalPrice,
                items: [
                    { ...top, matchScore: 90 + Math.random() * 10 },
                    { ...bottom, matchScore: 85 + Math.random() * 15 },
                    { ...shoe, matchScore: 88 + Math.random() * 12 }
                ]
            });
        }

        return recommendations;
    }
}

// Advanced State Management
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
    selectedStyle: []
};

// ============== INITIALIZATION ==============
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('🚀 Initializing Dressify v2.0...');
        initializeApp();
        setupEventListeners();
        setupMobileMenu();
        console.log('✅ Dressify initialized successfully');
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showAdminNotification('⚠️ App initialization error', 'error');
    }
});

function initializeApp() {
    console.log('Loading products...');
    loadProducts('all');
    loadFeaturedProducts();
    updateCartUI();
    
    // Verify critical DOM elements exist
    const criticalElements = ['productsGrid', 'cart-count', 'navMenu'];
    criticalElements.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`⚠️ Missing critical element: ${id}`);
        }
    });
}

// ============== EVENT LISTENERS ==============
function setupEventListeners() {
    // Product search
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value.toLowerCase();
            loadProducts(appState.currentFilter);
        });
    }

    // Newsletter subscription
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') subscribeNewsletter();
        });
    }
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
}

// ============== PRODUCT MANAGEMENT ==============
function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    appState.currentFilter = category;

    let filtered = category === 'all' 
        ? [...products] 
        : products.filter(p => p.category === category);

    // Apply search filter
    if (appState.searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(appState.searchQuery) ||
            (p.tags && p.tags.some(tag => tag.includes(appState.searchQuery)))
        );
    }

    // Apply price filter
    filtered = filtered.filter(p => p.price >= appState.priceRange[0] && p.price <= appState.priceRange[1]);

    // Apply sorting
    filtered = sortProducts(filtered, appState.sortBy);

    if (filtered.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found</div>';
        return;
    }

    filtered.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });

    // Update total products count
    const totalProducts = document.getElementById('totalProducts');
    if (totalProducts) totalProducts.textContent = filtered.length;
}

function sortProducts(list, sortBy) {
    const sorted = [...list];
    
    switch(sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'newest':
            return sorted.reverse();
        default: // popularity
            return sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    const discountBadge = product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : '';
    const finalPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
    const originalPrice = product.discount > 0 ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : '';
    
    const ratingStars = '★'.repeat(Math.floor(product.rating || 4)) + (((product.rating || 4) % 1 >= 0.5) ? '½' : '');
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            ${discountBadge}
            <img src="${product.tryOnImage}" alt="${product.name}" class="product-image">
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id}, event)" aria-label="Add to wishlist">♥</button>
        </div>
        <div class="product-info">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-rating">
                <span class="stars">${ratingStars}</span>
                <span class="rating-count">(${product.reviews || 0})</span>
            </div>
            <div class="product-price">
                ${originalPrice}
                <span class="current-price">$${finalPrice}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        if (event.target.classList.contains('wishlist-btn')) return;
        tryOnProduct(product, card);
    });
    
    return card;
}

function tryOnProduct(product, cardElement) {
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
    
    const finalPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
    
    document.getElementById('item-name').textContent = product.name;
    document.getElementById('item-category').textContent = `${product.category.charAt(0).toUpperCase() + product.category.slice(1)} ${product.discount > 0 ? `(-${product.discount}%)` : ''}`;
    document.getElementById('item-price').textContent = `$${finalPrice}`;
    document.getElementById('item-description').textContent = product.description || 'No description';
    document.getElementById('item-material').innerHTML = `<strong>Material:</strong> ${product.material || 'Not specified'}`;
    document.getElementById('item-rating').innerHTML = `<strong>Rating:</strong> ${'★'.repeat(Math.floor(product.rating || 4))} (${product.reviews || 0} reviews)`;
    
    appState.selectedItems[product.type] = product;
    updateAddToCartButton();
}

function filterProducts(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    loadProducts(category);
}

// ============== FEATURED PRODUCTS ==============
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    featuredGrid.innerHTML = '';
    
    // Select top rated products
    const featured = products
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 6);
    
    featured.forEach(product => {
        const finalPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
        const discountBadge = product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : '';
        
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <div class="featured-image">
                ${discountBadge}
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="featured-info">
                <h3>${product.name}</h3>
                <p>${product.description || 'Premium quality clothing'}</p>
                <div class="featured-price">
                    ${product.discount > 0 ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : ''}
                    <span>$${finalPrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addProductToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        featuredGrid.appendChild(card);
    });
}

// ============== CART MANAGEMENT ==============
function updateAddToCartButton() {
    const btn = document.getElementById('addToCartBtn');
    if (appState.selectedItems.upper || appState.selectedItems.lower || appState.selectedItems.shoes) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

function addSelectedToCart() {
    let addedCount = 0;
    
    if (appState.selectedItems.upper) {
        addToCart(appState.selectedItems.upper.id);
        addedCount++;
    }
    if (appState.selectedItems.lower) {
        addToCart(appState.selectedItems.lower.id);
        addedCount++;
    }
    if (appState.selectedItems.shoes) {
        addToCart(appState.selectedItems.shoes.id);
        addedCount++;
    }
    
    if (addedCount > 0) {
        showNotification(`✓ ${addedCount} item${addedCount > 1 ? 's' : ''} added to cart!`, 'success');
    }
}

function addProductToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        addToCart(product.id);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        appState.cart.push({ ...product, cartId: Date.now() });
        saveState();
        updateCartUI();
        showNotification(`✓ ${product.name} added to cart!`, 'success');
    }
}

function removeFromCart(cartId) {
    appState.cart = appState.cart.filter(item => item.cartId !== cartId);
    saveState();
    updateCartUI();
    renderCart();
}

function updateCartUI() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = appState.cart.length;
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 0.6s ease';
        }, 10);
    }
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'flex';
    cartModal.setAttribute('aria-hidden', 'false');
    renderCart();
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
    cartModal.setAttribute('aria-hidden', 'true');
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (appState.cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        document.getElementById('subtotal').textContent = '$0.00';
        document.getElementById('tax').textContent = '$0.00';
        document.getElementById('total').textContent = '$0.00';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartItems.innerHTML = appState.cart.map(item => `
        <div class="cart-item">
            <img src="${item.tryOnImage}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">Remove</button>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = appState.cart.reduce((sum, item) => 
        sum + (item.price * (1 - item.discount / 100)), 0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (appState.cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    showNotification('🎉 Order placed successfully! Thank you for shopping with Dressify!', 'success');
    appState.cart = [];
    saveState();
    updateCartUI();
    closeCart();
}

// ============== WISHLIST ==============
function toggleWishlist(productId, event) {
    event.stopPropagation();
    const product = products.find(p => p.id == productId);
    const index = appState.wishlist.findIndex(p => p.id == productId);
    
    if (index > -1) {
        appState.wishlist.splice(index, 1);
        event.target.textContent = '♡';
        showNotification(`Removed from wishlist`, 'info');
    } else {
        appState.wishlist.push(product);
        event.target.textContent = '♥';
        showNotification(`${product.name} added to wishlist!`, 'success');
    }
    
    saveState();
}

// ============== AI RECOMMENDATIONS ==============
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        appState.currentPhotoDataUrl = e.target.result;
        processUploadedPhoto();
    };
    reader.readAsDataURL(file);
}

async function processUploadedPhoto() {
    const uploadedPhotoContainer = document.getElementById('uploadedPhotoContainer');
    const uploadedPhoto = document.getElementById('uploadedPhoto');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noPhotoMessage = document.getElementById('noPhotoMessage');

    uploadedPhoto.src = appState.currentPhotoDataUrl;
    uploadedPhotoContainer.style.display = 'block';
    noPhotoMessage.style.display = 'none';
    loadingIndicator.style.display = 'flex';

    try {
        const recommendations = await AIRecommendationEngine.analyzePhoto(appState.currentPhotoDataUrl);
        displayRecommendations(recommendations);
    } catch (error) {
        console.error('Error getting recommendations:', error);
        showNotification('❌ Error analyzing photo. Please try again.', 'error');
    }
}

function displayRecommendations(recommendations) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const recommendationResult = document.getElementById('recommendationResult');
    const recommendationsList = document.getElementById('recommendationsList');

    loadingIndicator.style.display = 'none';
    recommendationResult.style.display = 'block';
    recommendationsList.innerHTML = '';

    recommendations.forEach((rec) => {
        const outfitCard = document.createElement('div');
        outfitCard.className = 'outfit-card';
        outfitCard.innerHTML = `
            <div class="outfit-header">
                <h4>Outfit ${rec.outfit}: ${rec.occasion}</h4>
                <span class="confidence-score">🎯 ${Math.round(rec.confidence)}% Match</span>
            </div>
            <div class="outfit-discount-badge">💰 Save ${rec.discount}% - Only $${rec.finalPrice}</div>
            <div class="outfit-items">
                ${rec.items.map((item, idx) => `
                    <div class="outfit-item">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div class="item-details">
                            <p class="item-name">${item.name}</p>
                            <p class="item-price">$${(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
                            <p class="match-score">Match: ${Math.round(item.matchScore)}%</p>
                            <button class="btn btn-small btn-primary" onclick="addProductToCart(${item.id})">Add to Cart</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="tryOnAIOutfit(${rec.outfit})">👗 Try On This Outfit</button>
        `;
        recommendationsList.appendChild(outfitCard);
    });
}

function tryOnAIOutfit(outfitNumber) {
    const allRecommendations = document.querySelectorAll('.outfit-card');
    const selectedOutfit = Array.from(allRecommendations)[outfitNumber - 1];
    
    if (selectedOutfit) {
        const items = selectedOutfit.querySelectorAll('.outfit-item');
        items.forEach((itemEl) => {
            const productName = itemEl.querySelector('.item-name').textContent;
            const product = products.find(p => p.name === productName);
            if (product) {
                const cardElement = document.querySelector(`[data-product-id="${product.id}"]`);
                tryOnProduct(product, cardElement);
            }
        });
        
        const tryOnSection = document.querySelector('.try-on-section');
        if (tryOnSection) {
            tryOnSection.scrollIntoView({ behavior: 'smooth' });
        }
        showNotification('✨ Outfit loaded in virtual mirror!', 'success');
    }
}

function resetPhoto() {
    appState.currentPhotoDataUrl = null;
    document.getElementById('uploadedPhotoContainer').style.display = 'none';
    document.getElementById('recommendationResult').style.display = 'none';
    document.getElementById('noPhotoMessage').style.display = 'block';
    document.getElementById('photoInput').value = '';
}

// ============== NOTIFICATIONS ==============
function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    
    const bgColor = type === 'error' ? 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' : 
                    type === 'info' ? 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)' :
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    notification.className = 'notification';
    notification.style.cssText = `
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.4s ease;
        font-weight: 600;
        margin-bottom: 0.5rem;
    `;
    notification.textContent = message;
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3500);
}

function showAdminNotification(message, type = 'info') {
    showNotification(message, type);
}

// ============== NEWSLETTER ==============
function subscribeNewsletter() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (!email || !email.includes('@')) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    showNotification(`✓ Thank you! Newsletter confirmation sent to ${email}`, 'success');
    emailInput.value = '';
}

// ============== UTILITIES ==============
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function saveState() {
    localStorage.setItem('dressify_cart', JSON.stringify(appState.cart));
    localStorage.setItem('dressify_wishlist', JSON.stringify(appState.wishlist));
}

// Close cart modal on outside click
window.addEventListener('click', (event) => {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        closeCart();
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('productSearch');
        if (searchInput) searchInput.focus();
    }
});

// Listen for admin product updates
window.addEventListener('storage', (event) => {
    if (event.key === 'admin_products') {
        console.log('🔄 Admin products updated, reloading...');
        location.reload();
    }
});
