// Admin Panel Script

// Data Storage (using localStorage)
class AdminStore {
    static getProducts() {
        return JSON.parse(localStorage.getItem('admin_products')) || this.getDefaultProducts();
    }

    static setProducts(products) {
        localStorage.setItem('admin_products', JSON.stringify(products));
        this.updateMainStore();
    }

    static getShopInfo() {
        return JSON.parse(localStorage.getItem('admin_shopInfo')) || this.getDefaultShopInfo();
    }

    static setShopInfo(info) {
        localStorage.setItem('admin_shopInfo', JSON.stringify(info));
    }

    static getCategories() {
        return JSON.parse(localStorage.getItem('admin_categories')) || this.getDefaultCategories();
    }

    static setCategories(categories) {
        localStorage.setItem('admin_categories', JSON.stringify(categories));
    }

    static getDefaultProducts() {
        return [
            {
                id: 1, name: 'Classic Blue T-Shirt', category: 'tops', price: 29.99, image: 'https://via.placeholder.com/300x400?text=Blue+T-Shirt', 
                tryOnImage: 'https://via.placeholder.com/400x500?text=Blue+T-Shirt+Avatar', description: 'Comfortable cotton t-shirt', material: 'Cotton', rating: '★★★★★', type: 'upper'
            },
            {
                id: 2, name: 'Red V-Neck', category: 'tops', price: 34.99, image: 'https://via.placeholder.com/300x400?text=Red+V-Neck',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Red+V-Neck+Avatar', description: 'Elegant red v-neck', material: 'Polyester', rating: '★★★★☆', type: 'upper'
            },
            {
                id: 3, name: 'White Polo Shirt', category: 'tops', price: 39.99, image: 'https://via.placeholder.com/300x400?text=Polo+Shirt',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Polo+Avatar', description: 'Classic polo shirt', material: 'Cotton Blend', rating: '★★★★★', type: 'upper'
            },
            {
                id: 4, name: 'Black Hoodie', category: 'tops', price: 54.99, image: 'https://via.placeholder.com/300x400?text=Black+Hoodie',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Hoodie+Avatar', description: 'Cozy black hoodie', material: 'Cotton', rating: '★★★★★', type: 'upper'
            },
            {
                id: 5, name: 'Striped Shirt', category: 'tops', price: 44.99, image: 'https://via.placeholder.com/300x400?text=Striped+Shirt',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Striped+Avatar', description: 'Trendy striped shirt', material: 'Linen', rating: '★★★★☆', type: 'upper'
            },
            {
                id: 6, name: 'Designer Blazer', category: 'tops', price: 79.99, image: 'https://via.placeholder.com/300x400?text=Blazer',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Blazer+Avatar', description: 'Professional blazer', material: 'Wool', rating: '★★★★★', type: 'upper'
            },
            {
                id: 7, name: 'Blue Jeans', category: 'bottoms', price: 59.99, image: 'https://via.placeholder.com/300x400?text=Blue+Jeans',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Jeans+Avatar', description: 'Classic blue jeans', material: 'Denim', rating: '★★★★★', type: 'lower'
            },
            {
                id: 8, name: 'Black Pants', category: 'bottoms', price: 49.99, image: 'https://via.placeholder.com/300x400?text=Black+Pants',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Pants+Avatar', description: 'Formal black pants', material: 'Polyester Blend', rating: '★★★★☆', type: 'lower'
            },
            {
                id: 9, name: 'Khaki Chinos', category: 'bottoms', price: 44.99, image: 'https://via.placeholder.com/300x400?text=Khaki+Chinos',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Chinos+Avatar', description: 'Casual khaki chinos', material: 'Cotton', rating: '★★★★☆', type: 'lower'
            },
            {
                id: 10, name: 'Gray Shorts', category: 'bottoms', price: 34.99, image: 'https://via.placeholder.com/300x400?text=Gray+Shorts',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Shorts+Avatar', description: 'Comfortable shorts', material: 'Cotton', rating: '★★★★☆', type: 'lower'
            },
            {
                id: 11, name: 'Denim Skirt', category: 'bottoms', price: 54.99, image: 'https://via.placeholder.com/300x400?text=Denim+Skirt',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Skirt+Avatar', description: 'Stylish denim skirt', material: 'Denim', rating: '★★★★★', type: 'lower'
            },
            {
                id: 12, name: 'Leather Leggings', category: 'bottoms', price: 64.99, image: 'https://via.placeholder.com/300x400?text=Leggings',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Leggings+Avatar', description: 'Premium leather leggings', material: 'Leather', rating: '★★★★★', type: 'lower'
            },
            {
                id: 13, name: 'White Sneakers', category: 'shoes', price: 74.99, image: 'https://via.placeholder.com/300x400?text=White+Sneakers',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Sneakers+Avatar', description: 'Comfortable sneakers', material: 'Canvas', rating: '★★★★★', type: 'shoes'
            },
            {
                id: 14, name: 'Black Formal Shoes', category: 'shoes', price: 89.99, image: 'https://via.placeholder.com/300x400?text=Formal+Shoes',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Formal+Avatar', description: 'Elegant formal shoes', material: 'Leather', rating: '★★★★★', type: 'shoes'
            },
            {
                id: 15, name: 'Brown Loafers', category: 'shoes', price: 79.99, image: 'https://via.placeholder.com/300x400?text=Loafers',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Loafers+Avatar', description: 'Classic loafers', material: 'Leather', rating: '★★★★☆', type: 'shoes'
            },
            {
                id: 16, name: 'Red Athletic Shoes', category: 'shoes', price: 84.99, image: 'https://via.placeholder.com/300x400?text=Athletic+Shoes',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Athletic+Avatar', description: 'Performance athletic shoes', material: 'Mesh', rating: '★★★★★', type: 'shoes'
            },
            {
                id: 17, name: 'Blue Sandals', category: 'shoes', price: 49.99, image: 'https://via.placeholder.com/300x400?text=Sandals',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Sandals+Avatar', description: 'Casual sandals', material: 'Rubber', rating: '★★★★☆', type: 'shoes'
            },
            {
                id: 18, name: 'Designer Heels', category: 'shoes', price: 99.99, image: 'https://via.placeholder.com/300x400?text=Designer+Heels',
                tryOnImage: 'https://via.placeholder.com/400x500?text=Heels+Avatar', description: 'Luxury designer heels', material: 'Leather', rating: '★★★★★', type: 'shoes'
            }
        ];
    }

    static getDefaultShopInfo() {
        return {
            shopName: 'Dressify',
            shopDescription: 'Revolutionary online fashion shopping with advanced virtual try-on technology',
            shopLogo: '',
            primaryColor: '#667eea',
            secondaryColor: '#f5576c',
            shopEmail: 'support@dressify.com',
            shopPhone: '',
            shopStreet: '',
            shopCity: '',
            shopState: '',
            shopZip: '',
            shopCountry: '',
            socialInstagram: '',
            socialFacebook: '',
            socialTwitter: '',
            socialWebsite: 'https://omweb.vercel.app'
        };
    }

    static getDefaultCategories() {
        return [
            { id: 1, name: 'Tops', icon: '👕', description: 'Shirts, t-shirts, and blouses' },
            { id: 2, name: 'Bottoms', icon: '👖', description: 'Pants, jeans, and skirts' },
            { id: 3, name: 'Shoes', icon: '👞', description: 'Footwear and accessories' }
        ];
    }

    static updateMainStore() {
        // Sync products back to main store (script.js)
        const products = this.getProducts();
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// UI Management
let currentEditingProduct = null;

function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });
    
    // Update header
    const titles = {
        'dashboard': 'Dashboard',
        'products': 'Manage Products',
        'shop-info': 'Shop Information',
        'categories': 'Manage Categories',
        'settings': 'Settings'
    };
    document.getElementById('page-title').textContent = titles[sectionId] || 'Admin Panel';
    
    // Load section-specific data
    if (sectionId === 'products') {
        loadProductsTable();
    } else if (sectionId === 'categories') {
        loadCategoriesGrid();
    }
}

// Dashboard Functions
function updateDashboard() {
    const products = AdminStore.getProducts();
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalCategories').textContent = AdminStore.getCategories().length;
    
    const avgPrice = (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2);
    document.getElementById('avgPrice').textContent = '$' + avgPrice;
}

// Products Management
function loadProductsTable() {
    const products = AdminStore.getProducts();
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || p.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = filtered.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.material || '-'}</td>
            <td>${product.rating || '★★★★☆'}</td>
            <td>
                <div class="action-buttons-table">
                    <button class="btn btn-secondary btn-small" onclick="editProduct(${product.id})">✏️ Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteProduct(${product.id})">🗑️ Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function openProductModal() {
    currentEditingProduct = null;
    document.getElementById('productForm').reset();
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    currentEditingProduct = null;
}

function editProduct(id) {
    const products = AdminStore.getProducts();
    const product = products.find(p => p.id === id);
    
    if (!product) return;
    
    currentEditingProduct = id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productMaterial').value = product.material || '';
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productImage').value = product.image || '';
    document.getElementById('productTryOnImage').value = product.tryOnImage || '';
    document.getElementById('productType').value = product.type || '';
    document.getElementById('productRating').value = product.rating || '';
    
    document.getElementById('productModal').classList.add('active');
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = AdminStore.getProducts();
        products = products.filter(p => p.id !== id);
        AdminStore.setProducts(products);
        loadProductsTable();
        showToast('Product deleted successfully', 'success');
        updateDashboard();
    }
}

document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const products = AdminStore.getProducts();
    
    const productData = {
        id: currentEditingProduct || Math.max(...products.map(p => p.id), 0) + 1,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        material: document.getElementById('productMaterial').value,
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        tryOnImage: document.getElementById('productTryOnImage').value,
        type: document.getElementById('productType').value,
        rating: document.getElementById('productRating').value
    };
    
    if (currentEditingProduct) {
        const index = products.findIndex(p => p.id === currentEditingProduct);
        products[index] = productData;
    } else {
        products.push(productData);
    }
    
    AdminStore.setProducts(products);
    closeProductModal();
    loadProductsTable();
    showToast(currentEditingProduct ? 'Product updated!' : 'Product added!', 'success');
    updateDashboard();
});

// Shop Info Management
function loadShopInfo() {
    const info = AdminStore.getShopInfo();
    Object.keys(info).forEach(key => {
        const input = document.getElementById(key);
        if (input) input.value = info[key];
    });
}

function saveShopInfo() {
    const info = {};
    document.querySelectorAll('#shopInfoForm [id]').forEach(input => {
        info[input.id] = input.value;
    });
    AdminStore.setShopInfo(info);
    showToast('Shop information saved successfully!', 'success');
}

function resetShopInfo() {
    loadShopInfo();
    showToast('Form reset', 'info');
}

// Categories Management
function loadCategoriesGrid() {
    const categories = AdminStore.getCategories();
    const products = AdminStore.getProducts();
    
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(cat => {
        const count = products.filter(p => p.category === cat.name.toLowerCase()).length;
        return `
            <div class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${count} products</div>
                <div class="category-actions">
                    <button class="btn btn-secondary btn-small" onclick="editCategory(${cat.id})">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteCategory(${cat.id})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function openCategoryModal() {
    document.getElementById('categoryForm').reset();
    document.getElementById('categoryModal').classList.add('active');
}

function closeCategoryModal() {
    document.getElementById('categoryModal').classList.remove('active');
}

function editCategory(id) {
    const categories = AdminStore.getCategories();
    const category = categories.find(c => c.id === id);
    
    if (!category) return;
    
    document.getElementById('categoryName').value = category.name;
    document.getElementById('categoryIcon').value = category.icon;
    document.getElementById('categoryDescription').value = category.description || '';
    document.getElementById('categoryModal').classList.add('active');
}

function deleteCategory(id) {
    if (confirm('Are you sure? Products in this category will not be deleted.')) {
        let categories = AdminStore.getCategories();
        categories = categories.filter(c => c.id !== id);
        AdminStore.setCategories(categories);
        loadCategoriesGrid();
        showToast('Category deleted', 'success');
    }
}

// Utilities
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

function exportData() {
    const data = {
        products: AdminStore.getProducts(),
        shopInfo: AdminStore.getShopInfo(),
        categories: AdminStore.getCategories()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dressify-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    showToast('Data exported successfully!', 'success');
}

function backupData() {
    exportData();
}

function syncData() {
    const status = document.getElementById('syncStatus');
    status.textContent = 'Status: Syncing...';
    
    setTimeout(() => {
        AdminStore.updateMainStore();
        status.textContent = 'Status: Synced!';
        showToast('All data synced with main store!', 'success');
        
        setTimeout(() => {
            status.textContent = 'Status: Ready';
        }, 2000);
    }, 1000);
}

function changePassword() {
    const newPassword = prompt('Enter new admin password:');
    if (newPassword && newPassword.length >= 6) {
        localStorage.setItem('admin_password', btoa(newPassword));
        showToast('Password changed successfully!', 'success');
    } else if (newPassword !== null) {
        showToast('Password must be at least 6 characters', 'warning');
    }
}

function resetAllData() {
    if (confirm('⚠️ WARNING: This will reset ALL data to defaults. This cannot be undone!')) {
        if (confirm('Are you absolutely sure? Type "RESET" in the next prompt to confirm.')) {
            const confirm = prompt('Type RESET to confirm:');
            if (confirm === 'RESET') {
                localStorage.removeItem('admin_products');
                localStorage.removeItem('admin_shopInfo');
                localStorage.removeItem('admin_categories');
                localStorage.removeItem('products');
                location.reload();
            }
        }
    }
}

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('logout')) return;
        e.preventDefault();
        switchSection(item.dataset.section);
    });
});

// Search and Filter
document.getElementById('productSearch')?.addEventListener('input', loadProductsTable);
document.getElementById('categoryFilter')?.addEventListener('change', loadProductsTable);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    loadShopInfo();
    loadProductsTable();
    loadCategoriesGrid();
    
    // Update last sync time
    const updateSyncTime = () => {
        const now = new Date();
        document.getElementById('lastSync').textContent = `Last synced: ${now.toLocaleTimeString()}`;
    };
    
    setInterval(updateSyncTime, 60000);
});

// Mobile menu toggle
document.getElementById('menuToggle')?.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
