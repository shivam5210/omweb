// =====================================================
// 🔥 DRESSIFY - ADVANCED DYNAMIC E-COMMERCE PLATFORM
// =====================================================

// Enhanced Product Database with Dynamic Data
const products = [
    // TOPS
    { id: 1, name: 'Classic Blue T-Shirt', category: 'tops', price: 29.99, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt', tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top', description: 'Comfortable and stylish classic blue t-shirt for everyday wear.', material: 'Cotton', rating: 4.8, reviews: 234, type: 'upper', style: ['casual', 'versatile'], skinTone: ['all'], tags: ['casual', 'blue', 'tshirt'], discount: 0 },
    { id: 2, name: 'Red V-Neck', category: 'tops', price: 34.99, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Red+VNeck', tryOnImage: 'https://via.placeholder.com/180x120/e74c3c/ffffff?text=Red+Top', description: 'Elegant red v-neck shirt perfect for any occasion.', material: 'Cotton-Blend', rating: 4.9, reviews: 189, type: 'upper', style: ['elegant', 'formal'], skinTone: ['fair', 'medium', 'dark'], tags: ['formal', 'red', 'elegant'], discount: 10 },
    { id: 3, name: 'White Polo Shirt', category: 'tops', price: 39.99, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Polo', tryOnImage: 'https://via.placeholder.com/180x120/ecf0f1/333333?text=White+Top', description: 'Classic white polo shirt with collar detail.', material: 'Pique Cotton', rating: 4.7, reviews: 312, type: 'upper', style: ['formal', 'business'], skinTone: ['all'], tags: ['business', 'white', 'polo'], discount: 0 },
    { id: 4, name: 'Black Hoodie', category: 'tops', price: 54.99, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Hoodie', tryOnImage: 'https://via.placeholder.com/180x120/2c3e50/ffffff?text=Black+Hoodie', description: 'Cozy black hoodie perfect for cold weather.', material: 'Cotton-Polyester', rating: 4.9, reviews: 456, type: 'upper', style: ['casual', 'sporty'], skinTone: ['all'], tags: ['casual', 'warm', 'black'], discount: 15 },
    { id: 5, name: 'Striped Shirt', category: 'tops', price: 44.99, image: 'https://via.placeholder.com/300x300/f39c12/ffffff?text=Striped+Shirt', tryOnImage: 'https://via.placeholder.com/180x120/f39c12/ffffff?text=Striped+Top', description: 'Trendy striped shirt for a casual look.', material: 'Cotton', rating: 4.5, reviews: 167, type: 'upper', style: ['casual', 'trendy'], skinTone: ['fair', 'medium'], tags: ['trendy', 'casual', 'striped'], discount: 5 },
    { id: 6, name: 'Designer Blazer', category: 'tops', price: 79.99, image: 'https://via.placeholder.com/300x300/34495e/ffffff?text=Designer+Blazer', tryOnImage: 'https://via.placeholder.com/180x120/34495e/ffffff?text=Blazer+Top', description: 'Professional designer blazer for formal occasions.', material: 'Wool Blend', rating: 4.9, reviews: 278, type: 'upper', style: ['formal', 'professional'], skinTone: ['all'], tags: ['professional', 'formal', 'blazer'], discount: 20 },

    // BOTTOMS
    { id: 7, name: 'Blue Jeans', category: 'bottoms', price: 59.99, image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Blue+Jeans', tryOnImage: 'https://via.placeholder.com/180x140/1e3a5f/ffffff?text=Blue+Jeans', description: 'Classic blue denim jeans for everyday wear.', material: 'Denim', rating: 4.8, reviews: 523, type: 'lower', style: ['casual', 'versatile'], skinTone: ['all'], tags: ['casual', 'denim', 'blue'], discount: 0 },
    { id: 8, name: 'Black Pants', category: 'bottoms', price: 49.99, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Pants', tryOnImage: 'https://via.placeholder.com/180x140/2c3e50/ffffff?text=Black+Pants', description: 'Formal black pants perfect for work or events.', material: 'Polyester-Wool', rating: 4.8, reviews: 401, type: 'lower', style: ['formal', 'business'], skinTone: ['all'], tags: ['formal', 'black', 'work'], discount: 12 },
    { id: 9, name: 'Khaki Chinos', category: 'bottoms', price: 44.99, image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Khaki+Chinos', tryOnImage: 'https://via.placeholder.com/180x140/d4af37/ffffff?text=Khaki+Chinos', description: 'Versatile khaki chinos for casual to semi-formal looks.', material: 'Cotton Twill', rating: 4.6, reviews: 289, type: 'lower', style: ['casual', 'business'], skinTone: ['fair', 'medium'], tags: ['casual', 'chinos', 'versatile'], discount: 8 },
    { id: 10, name: 'Gray Shorts', category: 'bottoms', price: 34.99, image: 'https://via.placeholder.com/300x300/95a5a6/ffffff?text=Gray+Shorts', tryOnImage: 'https://via.placeholder.com/180x140/95a5a6/ffffff?text=Gray+Shorts', description: 'Comfortable gray shorts for summer.', material: 'Cotton', rating: 4.7, reviews: 156, type: 'lower', style: ['casual', 'summer'], skinTone: ['all'], tags: ['summer', 'casual', 'shorts'], discount: 0 },
    { id: 11, name: 'Denim Skirt', category: 'bottoms', price: 54.99, image: 'https://via.placeholder.com/300x300/5b4b8a/ffffff?text=Denim+Skirt', tryOnImage: 'https://via.placeholder.com/180x140/5b4b8a/ffffff?text=Denim+Skirt', description: 'Stylish denim skirt with a modern cut.', material: 'Stretch Denim', rating: 4.8, reviews: 234, type: 'lower', style: ['casual', 'trendy'], skinTone: ['fair', 'medium', 'dark'], tags: ['trendy', 'denim', 'skirt'], discount: 15 },
    { id: 12, name: 'Leather Leggings', category: 'bottoms', price: 64.99, image: 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Leather+Leggings', tryOnImage: 'https://via.placeholder.com/180x140/1a1a1a/ffffff?text=Leggings', description: 'Premium leather leggings for a trendy look.', material: 'Faux Leather', rating: 4.9, reviews: 345, type: 'lower', style: ['trendy', 'elegant'], skinTone: ['medium', 'dark'], tags: ['trendy', 'elegant', 'leather'], discount: 10 },

    // SHOES
    { id: 13, name: 'White Sneakers', category: 'shoes', price: 74.99, image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Sneakers', tryOnImage: 'https://via.placeholder.com/180x80/ecf0f1/333333?text=White+Shoes', description: 'Clean white sneakers for a casual look.', material: 'Canvas-Rubber', rating: 4.8, reviews: 612, type: 'shoes', style: ['casual', 'sporty'], skinTone: ['all'], tags: ['casual', 'sneakers', 'white'], discount: 5 },
    { id: 14, name: 'Black Formal Shoes', category: 'shoes', price: 89.99, image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Formal+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/2c3e50/ffffff?text=Formal+Shoes', description: 'Elegant black formal shoes for special occasions.', material: 'Leather', rating: 4.9, reviews: 467, type: 'shoes', style: ['formal', 'elegant'], skinTone: ['all'], tags: ['formal', 'elegant', 'black'], discount: 18 },
    { id: 15, name: 'Brown Loafers', category: 'shoes', price: 79.99, image: 'https://via.placeholder.com/300x300/8b4513/ffffff?text=Brown+Loafers', tryOnImage: 'https://via.placeholder.com/180x80/8b4513/ffffff?text=Brown+Shoes', description: 'Comfortable brown loafers for business casual.', material: 'Suede', rating: 4.8, reviews: 334, type: 'shoes', style: ['business', 'casual'], skinTone: ['fair', 'medium'], tags: ['business', 'casual', 'loafers'], discount: 0 },
    { id: 16, name: 'Red Athletic Shoes', category: 'shoes', price: 84.99, image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Athletic+Shoes', tryOnImage: 'https://via.placeholder.com/180x80/e74c3c/ffffff?text=Red+Shoes', description: 'Sporty red athletic shoes for active wear.', material: 'Mesh-Synthetic', rating: 4.9, reviews: 589, type: 'shoes', style: ['sporty', 'casual'], skinTone: ['all'], tags: ['sporty', 'athletic', 'red'], discount: 12 },
    { id: 17, name: 'Blue Sandals', category: 'shoes', price: 49.99, image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Sandals', tryOnImage: 'https://via.placeholder.com/180x80/3498db/ffffff?text=Blue+Shoes', description: 'Comfortable blue sandals for summer.', material: 'Rubber', rating: 4.6, reviews: 198, type: 'shoes', style: ['casual', 'summer'], skinTone: ['all'], tags: ['summer', 'casual', 'sandals'], discount: 0 },
    { id: 18, name: 'Designer Heels', category: 'shoes', price: 99.99, image: 'https://via.placeholder.com/300x300/e91e63/ffffff?text=Designer+Heels', tryOnImage: 'https://via.placeholder.com/180x80/e91e63/ffffff?text=Heels', description: 'Elegant designer heels for special occasions.', material: 'Patent Leather', rating: 4.9, reviews: 421, type: 'shoes', style: ['formal', 'elegant'], skinTone: ['fair', 'medium', 'dark'], tags: ['formal', 'elegant', 'heels'], discount: 22 }
];

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
    initializeApp();
});

function initializeApp() {
    loadProducts('all');
    loadFeaturedProducts();
    updateCartUI();
    setupEventListeners();
    setupMobileMenu();
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
            p.tags.some(tag => tag.includes(appState.searchQuery))
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
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.reverse();
        default: // popularity
            return sorted.sort((a, b) => b.reviews - a.reviews);
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    const discountBadge = product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : '';
    const finalPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
    const originalPrice = product.discount > 0 ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : '';
    
    const ratingStars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    
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
                <span class="rating-count">(${product.reviews})</span>
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
    document.getElementById('item-description').textContent = product.description;
    document.getElementById('item-material').innerHTML = `<strong>Material:</strong> ${product.material}`;
    document.getElementById('item-rating').innerHTML = `<strong>Rating:</strong> ${'★'.repeat(Math.floor(product.rating))} (${product.reviews} reviews)`;
    
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
    featuredGrid.innerHTML = '';
    
    // Select top rated products
    const featured = products
        .sort((a, b) => b.rating - a.rating)
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
                <p>${product.description}</p>
                <div class="featured-price">
                    ${product.discount > 0 ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : ''}
                    <span>$${finalPrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addProductToCart('${product.id}')">Add to Cart</button>
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
                            <button class="btn btn-small btn-primary" onclick="addProductToCart('${item.id}')">Add to Cart</button>
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
        
        document.querySelector('.try-on-section').scrollIntoView({ behavior: 'smooth' });
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
        document.getElementById('productSearch').focus();
    }
});
