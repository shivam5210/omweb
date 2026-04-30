// Product Database
const products = [
    // Tops
    {
        id: 1,
        name: 'Classic Blue T-Shirt',
        category: 'tops',
        price: '$29.99',
        image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Tshirt',
        tryOnImage: 'https://via.placeholder.com/180x120/3498db/ffffff?text=Blue+Top',
        description: 'Comfortable and stylish classic blue t-shirt for everyday wear.',
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
        type: 'upper'
    },

    // Bottoms
    {
        id: 6,
        name: 'Blue Jeans',
        category: 'bottoms',
        price: '$59.99',
        image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Blue+Jeans',
        tryOnImage: 'https://via.placeholder.com/180x140/1e3a5f/ffffff?text=Blue+Jeans',
        description: 'Classic blue denim jeans for everyday wear.',
        type: 'lower'
    },
    {
        id: 7,
        name: 'Black Pants',
        category: 'bottoms',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Black+Pants',
        tryOnImage: 'https://via.placeholder.com/180x140/2c3e50/ffffff?text=Black+Pants',
        description: 'Formal black pants perfect for work or events.',
        type: 'lower'
    },
    {
        id: 8,
        name: 'Khaki Chinos',
        category: 'bottoms',
        price: '$44.99',
        image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Khaki+Chinos',
        tryOnImage: 'https://via.placeholder.com/180x140/d4af37/ffffff?text=Khaki+Chinos',
        description: 'Versatile khaki chinos for casual to semi-formal looks.',
        type: 'lower'
    },
    {
        id: 9,
        name: 'Gray Shorts',
        category: 'bottoms',
        price: '$34.99',
        image: 'https://via.placeholder.com/300x300/95a5a6/ffffff?text=Gray+Shorts',
        tryOnImage: 'https://via.placeholder.com/180x140/95a5a6/ffffff?text=Gray+Shorts',
        description: 'Comfortable gray shorts for summer.',
        type: 'lower'
    },
    {
        id: 10,
        name: 'Denim Skirt',
        category: 'bottoms',
        price: '$54.99',
        image: 'https://via.placeholder.com/300x300/5b4b8a/ffffff?text=Denim+Skirt',
        tryOnImage: 'https://via.placeholder.com/180x140/5b4b8a/ffffff?text=Denim+Skirt',
        description: 'Stylish denim skirt with a modern cut.',
        type: 'lower'
    },

    // Shoes
    {
        id: 11,
        name: 'White Sneakers',
        category: 'shoes',
        price: '$74.99',
        image: 'https://via.placeholder.com/300x300/ecf0f1/333333?text=White+Sneakers',
        tryOnImage: 'https://via.placeholder.com/180x80/ecf0f1/333333?text=White+Shoes',
        description: 'Clean white sneakers for a casual look.',
        type: 'shoes'
    },
    {
        id: 12,
        name: 'Black Formal Shoes',
        category: 'shoes',
        price: '$89.99',
        image: 'https://via.placeholder.com/300x300/2c3e50/ffffff?text=Formal+Shoes',
        tryOnImage: 'https://via.placeholder.com/180x80/2c3e50/ffffff?text=Formal+Shoes',
        description: 'Elegant black formal shoes for special occasions.',
        type: 'shoes'
    },
    {
        id: 13,
        name: 'Brown Loafers',
        category: 'shoes',
        price: '$79.99',
        image: 'https://via.placeholder.com/300x300/8b4513/ffffff?text=Brown+Loafers',
        tryOnImage: 'https://via.placeholder.com/180x80/8b4513/ffffff?text=Brown+Shoes',
        description: 'Comfortable brown loafers for business casual.',
        type: 'shoes'
    },
    {
        id: 14,
        name: 'Red Athletic Shoes',
        category: 'shoes',
        price: '$84.99',
        image: 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Athletic+Shoes',
        tryOnImage: 'https://via.placeholder.com/180x80/e74c3c/ffffff?text=Red+Shoes',
        description: 'Sporty red athletic shoes for active wear.',
        type: 'shoes'
    },
    {
        id: 15,
        name: 'Blue Sandals',
        category: 'shoes',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x300/3498db/ffffff?text=Blue+Sandals',
        tryOnImage: 'https://via.placeholder.com/180x80/3498db/ffffff?text=Blue+Shoes',
        description: 'Comfortable blue sandals for summer.',
        type: 'shoes'
    }
];

// Cart
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
    
    // Update info
    document.getElementById('item-name').textContent = product.name;
    document.getElementById('item-price').textContent = `Price: ${product.price}`;
    document.getElementById('item-description').textContent = product.description;
    
    // Store selected item
    selectedItems[product.type] = product;
}

// Filter products by category
function filterProducts(category) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load filtered products
    loadProducts(category);
}

// Load featured products
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featured = products.slice(0, 4);
    
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
        showNotification(`${product.name} added to cart!`);
    }
}

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Show notification
function showNotification(message) {
    // Simple notification (can be enhanced with a toast library)
    alert(message);
}

// Additional functionality for adding selected items to cart
function addSelectedToCart() {
    let itemsAdded = 0;
    
    Object.values(selectedItems).forEach(item => {
        if (item) {
            cart.push(item);
            itemsAdded++;
        }
    });
    
    if (itemsAdded > 0) {
        updateCartCount();
        showNotification(`${itemsAdded} item(s) added to cart!`);
    } else {
        showNotification('Please select items to add to cart!');
    }
}