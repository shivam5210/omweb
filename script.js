// =====================================================
// 🔥 DRESSIFY - ENHANCED DYNAMIC E-COMMERCE PLATFORM
// =====================================================

// Enhanced Product Database with Numeric Prices & Discounts
const products = [
    // TOPS
    {
        id: 1,
        name: 'Classic Blue T-Shirt',
        category: 'tops',
        price: 29.99,
        discount: 0,
        tags: ['casual', 'blue', 'tshirt'],
        reviews: 234,
        image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt',
        tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top',
        description: 'Comfortable and stylish classic blue t-shirt for everyday wear.',
        material: 'Cotton',
        rating: '★★★★★ (234 reviews)',
        type: 'upper',
        style: ['casual', 'versatile'],
        skinTone: ['all']
    },
    {
        id: 2,
        name: 'Red V-Neck',
        category: 'tops',
        price: '$34.99',
        image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Red+VNeck',
        tryOnImage: 'https://via.placeholder.com/180x120/e74c3c/ffffff?text=Red+Top',
        description: 'Elegant red v-neck shirt perfect for any occasion.',
        material: 'Cotton-Blend',
        rating: '★★★★★ (189 reviews)',
        type: 'upper',
        style: ['elegant', 'formal'],
        skinTone: ['fair', 'medium', 'dark']
    },
    {
        id: 3,
        name: 'White Polo Shirt',
        category: 'tops',
        price: '$39.99',
        image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Polo',
        tryOnImage: 'https://via.placeholder.com/180x120/ecf0f1/333333?text=White+Top',
        description: 'Classic white polo shirt with collar detail.',
        material: 'Pique Cotton',
        rating: '★★★★★ (312 reviews)',
        type: 'upper',
        style: ['formal', 'business'],
        skinTone: ['all']
    },
    {
        id: 4,
        name: 'Black Hoodie',
        category: 'tops',
        price: '$54.99',
        image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Hoodie',
        tryOnImage: 'https://via.placeholder.com/180x120/2c3e50/ffffff?text=Black+Hoodie',
        description: 'Cozy black hoodie perfect for cold weather.',
        material: 'Cotton-Polyester',
        rating: '★★★★★ (456 reviews)',
        type: 'upper',
        style: ['casual', 'sporty'],
        skinTone: ['all']
    },
    {
        id: 5,
        name: 'Striped Shirt',
        category: 'tops',
        price: '$44.99',
        image: 'https://via.placeholder.com/300x300/f39c12/ffffff?text=Striped+Shirt',
        tryOnImage: 'https://via.placeholder.com/180x120/f39c12/ffffff?text=Striped+Top',
        description: 'Trendy striped shirt for a casual look.',
        material: 'Cotton',
        rating: '★★★★☆ (167 reviews)',
        type: 'upper',
        style: ['casual', 'trendy'],
        skinTone: ['fair', 'medium']
    },
    {
        id: 6,
        name: 'Designer Blazer',
        category: 'tops',
        price: '$79.99',
        image: 'https://via.placeholder.com/300x300/34495e/ffffff?text=Designer+Blazer',
        tryOnImage: 'https://via.placeholder.com/180x120/34495e/ffffff?text=Blazer+Top',
        description: 'Professional designer blazer for formal occasions.',
        material: 'Wool Blend',
        rating: '★★★★★ (278 reviews)',
        type: 'upper',
        style: ['formal', 'professional'],
        skinTone: ['all']
    },

    // BOTTOMS
    {
        id: 7,
        name: 'Blue Jeans',
        category: 'bottoms',
        price: '$59.99',
        image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Blue+Jeans',
        tryOnImage: 'https://via.placeholder.com/180x140/1e3a5f/ffffff?text=Blue+Jeans',
        description: 'Classic blue denim jeans for everyday wear.',
        material: 'Denim',
        rating: '★★★★★ (523 reviews)',
        type: 'lower',
        style: ['casual', 'versatile'],
        skinTone: ['all']
    },
    {
        id: 8,
        name: 'Black Pants',
        category: 'bottoms',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Pants',
        tryOnImage: 'https://via.placeholder.com/180x140/2c3e50/ffffff?text=Black+Pants',
        description: 'Formal black pants perfect for work or events.',
        material: 'Polyester-Wool',
        rating: '★★★★★ (401 reviews)',
        type: 'lower',
        style: ['formal', 'business'],
        skinTone: ['all']
    },
    {
        id: 9,
        name: 'Khaki Chinos',
        category: 'bottoms',
        price: '$44.99',
        image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Khaki+Chinos',
        tryOnImage: 'https://via.placeholder.com/180x140/d4af37/ffffff?text=Khaki+Chinos',
        description: 'Versatile khaki chinos for casual to semi-formal looks.',
        material: 'Cotton Twill',
        rating: '★★★★☆ (289 reviews)',
        type: 'lower',
        style: ['casual', 'business'],
        skinTone: ['fair', 'medium']
    },
    {
        id: 10,
        name: 'Gray Shorts',
        category: 'bottoms',
        price: '$34.99',
        image: 'https://via.placeholder.com/300x300/95a5a6/ffffff?text=Gray+Shorts',
        tryOnImage: 'https://via.placeholder.com/180x140/95a5a6/ffffff?text=Gray+Shorts',
        description: 'Comfortable gray shorts for summer.',
        material: 'Cotton',
        rating: '★★★★★ (156 reviews)',
        type: 'lower',
        style: ['casual', 'summer'],
        skinTone: ['all']
    },
    {
        id: 11,
        name: 'Denim Skirt',
        category: 'bottoms',
        price: '$54.99',
        image: 'https://via.placeholder.com/300x300/5b4b8a/ffffff?text=Denim+Skirt',
        tryOnImage: 'https://via.placeholder.com/180x140/5b4b8a/ffffff?text=Denim+Skirt',
        description: 'Stylish denim skirt with a modern cut.',
        material: 'Stretch Denim',
        rating: '★★★★★ (234 reviews)',
        type: 'lower',
        style: ['casual', 'trendy'],
        skinTone: ['fair', 'medium', 'dark']
    },
    {
        id: 12,
        name: 'Leather Leggings',
        category: 'bottoms',
        price: '$64.99',
        image: 'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Leather+Leggings',
        tryOnImage: 'https://via.placeholder.com/180x140/1a1a1a/ffffff?text=Leggings',
        description: 'Premium leather leggings for a trendy look.',
        material: 'Faux Leather',
        rating: '★★★★★ (345 reviews)',
        type: 'lower',
        style: ['trendy', 'elegant'],
        skinTone: ['medium', 'dark']
    },

    // SHOES
    {
        id: 13,
        name: 'White Sneakers',
        category: 'shoes',
        price: '$74.99',
        image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Sneakers',
        tryOnImage: 'https://via.placeholder.com/180x80/ecf0f1/333333?text=White+Shoes',
        description: 'Clean white sneakers for a casual look.',
        material: 'Canvas-Rubber',
        rating: '★★★★★ (612 reviews)',
        type: 'shoes',
        style: ['casual', 'sporty'],
        skinTone: ['all']
    },
    {
        id: 14,
        name: 'Black Formal Shoes',
        category: 'shoes',
        price: '$89.99',
        image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Formal+Shoes',
        tryOnImage: 'https://via.placeholder.com/180x80/2c3e50/ffffff?text=Formal+Shoes',
        description: 'Elegant black formal shoes for special occasions.',
        material: 'Leather',
        rating: '★★★★★ (467 reviews)',
        type: 'shoes',
        style: ['formal', 'elegant'],
        skinTone: ['all']
    },
    {
        id: 15,
        name: 'Brown Loafers',
        category: 'shoes',
        price: '$79.99',
        image: 'https://via.placeholder.com/300x300/8b4513/ffffff?text=Brown+Loafers',
        tryOnImage: 'https://via.placeholder.com/180x80/8b4513/ffffff?text=Brown+Shoes',
        description: 'Comfortable brown loafers for business casual.',
        material: 'Suede',
        rating: '★★★★★ (334 reviews)',
        type: 'shoes',
        style: ['business', 'casual'],
        skinTone: ['fair', 'medium']
    },
    {
        id: 16,
        name: 'Red Athletic Shoes',
        category: 'shoes',
        price: '$84.99',
        image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Athletic+Shoes',
        tryOnImage: 'https://via.placeholder.com/180x80/e74c3c/ffffff?text=Red+Shoes',
        description: 'Sporty red athletic shoes for active wear.',
        material: 'Mesh-Synthetic',
        rating: '★★★★★ (589 reviews)',
        type: 'shoes',
        style: ['sporty', 'casual'],
        skinTone: ['all']
    },
    {
        id: 17,
        name: 'Blue Sandals',
        category: 'shoes',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Sandals',
        tryOnImage: 'https://via.placeholder.com/180x80/3498db/ffffff?text=Blue+Shoes',
        description: 'Comfortable blue sandals for summer.',
        material: 'Rubber',
        rating: '★★★★☆ (198 reviews)',
        type: 'shoes',
        style: ['casual', 'summer'],
        skinTone: ['all']
    },
    {
        id: 18,
        name: 'Designer Heels',
        category: 'shoes',
        price: '$99.99',
        image: 'https://via.placeholder.com/300x300/e91e63/ffffff?text=Designer+Heels',
        tryOnImage: 'https://via.placeholder.com/180x80/e91e63/ffffff?text=Heels',
        description: 'Elegant designer heels for special occasions.',
        material: 'Patent Leather',
        rating: '★★★★★ (421 reviews)',
        type: 'shoes',
        style: ['formal', 'elegant'],
        skinTone: ['fair', 'medium', 'dark']
    }
];

// AI Recommendation Engine
class AIRecommendationEngine {
    static analyzePhoto(photoDataUrl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulated AI analysis
                const recommendations = this.generateRecommendations();
                resolve(recommendations);
            }, 2000);
        });
    }

    static generateRecommendations() {
        const recommendations = [];
        const occasions = ['casual', 'business', 'evening', 'sports'];
        const randomOccasion = occasions[Math.floor(Math.random() * occasions.length)];

        // Get products matching the detected occasion
        const tops = products.filter(p => p.type === 'upper');
        const bottoms = products.filter(p => p.type === 'lower');
        const shoes = products.filter(p => p.type === 'shoes');

        for (let i = 0; i < 3; i++) {
            const top = tops[Math.floor(Math.random() * tops.length)];
            const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
            const shoe = shoes[Math.floor(Math.random() * shoes.length)];

            recommendations.push({
                outfit: i + 1,
                occasion: ['Casual Everyday', 'Business Professional', 'Evening Elegant'][i],
                confidence: 85 + Math.random() * 15,
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

// State Management
let cart = [];
let currentFilter = 'all';
let selectedItems = {
    upper: null,
    lower: null,
    shoes: null
};
let currentPhotoDataUrl = null;
let cameraStream = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    loadFeaturedProducts();
});

// ========== AI PHOTO RECOMMENDATION FUNCTIONS ==========

async function openCamera() {
    try {
        const cameraContainer = document.getElementById('cameraContainer');
        const cameraVideo = document.getElementById('cameraVideo');
        
        cameraContainer.style.display = 'flex';
        
        const constraints = {
            video: {
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        };
        
        cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        cameraVideo.srcObject = cameraStream;
    } catch (error) {
        console.error('Error accessing camera:', error);
        showNotification('❌ Camera access denied. Please check permissions.', 'error');
    }
}

function closeCamera() {
    const cameraContainer = document.getElementById('cameraContainer');
    cameraContainer.style.display = 'none';
    
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

function capturePhoto() {
    const cameraVideo = document.getElementById('cameraVideo');
    const canvas = document.getElementById('photoCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = cameraVideo.videoWidth;
    canvas.height = cameraVideo.videoHeight;
    
    ctx.drawImage(cameraVideo, 0, 0);
    currentPhotoDataUrl = canvas.toDataURL('image/jpeg');
    
    closeCamera();
    processUploadedPhoto();
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        currentPhotoDataUrl = e.target.result;
        processUploadedPhoto();
    };
    reader.readAsDataURL(file);
}

async function processUploadedPhoto() {
    const uploadedPhotoContainer = document.getElementById('uploadedPhotoContainer');
    const uploadedPhoto = document.getElementById('uploadedPhoto');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noPhotoMessage = document.getElementById('noPhotoMessage');

    // Show uploaded photo
    uploadedPhoto.src = currentPhotoDataUrl;
    uploadedPhotoContainer.style.display = 'block';
    noPhotoMessage.style.display = 'none';

    // Show loading
    loadingIndicator.style.display = 'flex';

    try {
        // Get AI recommendations
        const recommendations = await AIRecommendationEngine.analyzePhoto(currentPhotoDataUrl);
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
            <div class="outfit-items">
                ${rec.items.map((item, idx) => `
                    <div class="outfit-item">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div class="item-details">
                            <p class="item-name">${item.name}</p>
                            <p class="item-price">${item.price}</p>
                            <p class="match-score">Match: ${Math.round(item.matchScore)}%</p>
                            <button class="btn btn-small btn-primary" onclick="addProductToCart('${item.id}')">Add to Cart</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="tryOnOutfit(${rec.outfit})">👗 Try On This Outfit</button>
        `;
        recommendationsList.appendChild(outfitCard);
    });
}

function tryOnOutfit(outfitNumber) {
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
        showNotification('✨ Outfit loaded in virtual mirror!');
    }
}

function resetPhoto() {
    currentPhotoDataUrl = null;
    document.getElementById('uploadedPhotoContainer').style.display = 'none';
    document.getElementById('recommendationResult').style.display = 'none';
    document.getElementById('noPhotoMessage').style.display = 'block';
    document.getElementById('photoInput').value = '';
}

// ========== ORIGINAL TRYON FUNCTIONS ==========

function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    currentFilter = category;

    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filtered.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    card.innerHTML = `
        <img src="${product.tryOnImage}" alt="${product.name}" class="product-image">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
    `;
    
    card.addEventListener('click', () => tryOnProduct(product, card));
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
    
    document.getElementById('item-name').textContent = product.name;
    document.getElementById('item-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('item-price').textContent = product.price;
    document.getElementById('item-description').textContent = product.description;
    document.getElementById('item-material').innerHTML = `<strong>Material:</strong> ${product.material}`;
    document.getElementById('item-rating').innerHTML = `<strong>Rating:</strong> ${product.rating}`;
    
    selectedItems[product.type] = product;
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

function updateAddToCartButton() {
    const btn = document.getElementById('addToCartBtn');
    if (selectedItems.upper || selectedItems.lower || selectedItems.shoes) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

function addSelectedToCart() {
    let addedCount = 0;
    if (selectedItems.upper) {
        addToCart(selectedItems.upper.id);
        addedCount++;
    }
    if (selectedItems.lower) {
        addToCart(selectedItems.lower.id);
        addedCount++;
    }
    if (selectedItems.shoes) {
        addToCart(selectedItems.shoes.id);
        addedCount++;
    }
    
    if (addedCount > 0) {
        showNotification(`✓ ${addedCount} item${addedCount > 1 ? 's' : ''} added to cart!`);
    }
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featured = [products[0], products[2], products[4], products[6], products[8], products[13]];
    
    featured.forEach(product => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <div class="featured-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="featured-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="featured-price">${product.price}</div>
                <button class="add-to-cart-btn" onclick="addProductToCart('${product.id}')">Add to Cart</button>
            </div>
        `;
        featuredGrid.appendChild(card);
    });
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
        cart.push(product);
        updateCartCount();
        showNotification(`✓ ${product.name} added to cart!`);
    }
}

function updateCartCount() {
    const badge = document.getElementById('cart-count');
    badge.textContent = cart.length;
    badge.style.animation = 'none';
    setTimeout(() => {
        badge.style.animation = 'pulse 0.6s ease';
    }, 10);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.4s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Add animations
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
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);
