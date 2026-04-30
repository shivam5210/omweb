// Enhanced Product Database
const products = [
    // TOPS
    {
        id: 1,
        name: 'Classic Blue T-Shirt',
        category: 'tops',
        price: '$29.99',
        image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt',
        tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top',
        description: 'Comfortable and stylish classic blue t-shirt for everyday wear.',
        material: 'Cotton',
        rating: '★★★★★ (234 reviews)',
        type: 'upper'
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
        type: 'upper'
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
        type: 'upper'
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
        type: 'upper'
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
        type: 'upper'
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
        type: 'upper'
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
        type: 'lower'
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
        type: 'lower'
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
        type: 'lower'
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
        type: 'lower'
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
        type: 'lower'
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
        type: 'lower'
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
        type: 'shoes'
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
        type: 'shoes'
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
        type: 'shoes'
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
        type: 'shoes'
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
        type: 'shoes'
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
        type: 'shoes'
    }
];

// State Management
let cart = [];
let currentFilter = 'all';
let selectedItems = {
    upper: null,
    lower: null,
    shoes: null
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    loadFeaturedProducts();
});

// Load and display products
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

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.tryOnImage}" alt="${product.name}" class="product-image">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
    `;
    
    card.addEventListener('click', () => tryOnProduct(product, card));
    return card;
}

// Try-on product
function tryOnProduct(product, cardElement) {
    // Remove previous selection from the same category
    document.querySelectorAll('.product-card.selected').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to current card
    cardElement.classList.add('selected');
    
    // Update the avatar
    const elementId = `clothing-${product.type}`;
    const element = document.getElementById(elementId);
    
    if (element) {
        element.src = product.tryOnImage;
    }
    
    // Update info panel with all details
    document.getElementById('item-name').textContent = product.name;
    document.getElementById('item-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('item-price').textContent = product.price;
    document.getElementById('item-description').textContent = product.description;
    document.getElementById('item-material').innerHTML = `<strong>Material:</strong> ${product.material}`;
    document.getElementById('item-rating').innerHTML = `<strong>Rating:</strong> ${product.rating}`;
    
    // Store selected item
    selectedItems[product.type] = product;
}

// Filter products by category
function filterProducts(category) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Load filtered products
    loadProducts(category);
}

// Load featured products
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    // Show 6 featured products
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
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
            </div>
        `;
        featuredGrid.appendChild(card);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification(`✓ ${product.name} added to cart!`);
    }
}

// Update cart count
function updateCartCount() {
    const badge = document.getElementById('cart-count');
    badge.textContent = cart.length;
    // Add animation
    badge.style.animation = 'none';
    setTimeout(() => {
        badge.style.animation = 'pulse 0.6s ease';
    }, 10);
}

// Show notification
function showNotification(message) {
    // Enhanced notification with toast-like behavior
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

// Add animations to style tag
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