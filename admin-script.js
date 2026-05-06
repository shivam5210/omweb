// =====================================================
// 🔥 DRESSIFY ADMIN PANEL - ENHANCED VERSION 2.0
// =====================================================
// Better Error Handling, Input Validation & Dynamic Features
// WITH IMAGE UPLOAD SUPPORT

'use strict';

// ============== GLOBAL ERROR HANDLER ==============
window.addEventListener('error', (event) => {
    console.error('Admin Error:', event.error);
    showAdminNotification('⚠️ An error occurred', 'error');
});

// ============== IMAGE UPLOAD HANDLER ==============
function handleImageUpload(event, fieldType) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        showToast('❌ कृपया एक छवि फ़ाइल चुनें (Image file select करें)', 'error');
        return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        showToast('❌ Image size 5MB से कम होनी चाहिए', 'error');
        return;
    }

    // Read file and convert to base64
    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Data = e.target.result;
        
        // Store in localStorage
        const storageKey = `image_${fieldType}_${Date.now()}`;
        localStorage.setItem(storageKey, base64Data);

        // Update the URL field with storage reference
        document.getElementById(fieldType).value = storageKey;

        // Show preview
        showImagePreview(fieldType, base64Data);
        
        showToast('✅ Image upload successful!', 'success');
    };

    reader.onerror = function() {
        showToast('❌ Error reading file', 'error');
    };

    reader.readAsDataURL(file);
}

// Show image preview
function showImagePreview(fieldType, imageData) {
    const previewId = fieldType + 'Preview';
    const previewElement = document.getElementById(previewId);
    
    if (previewElement) {
        previewElement.innerHTML = `
            <img src="${imageData}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; margin-top: 10px;">
            <p style="font-size: 12px; color: #666; margin-top: 5px;">✅ Image Selected</p>
        `;
    }
}

// Get image from localStorage or URL
function getImageUrl(imageRef) {
    if (imageRef && imageRef.startsWith('image_')) {
        return localStorage.getItem(imageRef) || imageRef;
    }
    return imageRef;
}

// ============== UTILITY FUNCTIONS ==============
function showAdminNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
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
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
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

function validateInput(input, type = 'text') {
    switch(type) {
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
        case 'price':
            return /^\d+(\.\d{2})?$/.test(input) && parseFloat(input) > 0;
        case 'number':
            return !isNaN(input) && input.trim() !== '';
        case 'text':
        default:
            return input.trim().length > 0;
    }
}

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

// Input Validation
class Validator {
    static validateProductForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length === 0) {
            errors.push('Product name is required');
        }
        if (!data.category) {
            errors.push('Category is required');
        }
        if (!data.price || parseFloat(data.price) <= 0) {
            errors.push('Price must be greater than 0');
        }
        if (!data.type) {
            errors.push('Product type is required');
        }
        
        return errors;
    }

    static validateShopInfo(data) {
        const errors = [];
        
        if (!data.shopName || data.shopName.trim().length === 0) {
            errors.push('Shop name is required');
        }
        if (data.shopEmail && !this.isValidEmail(data.shopEmail)) {
            errors.push('Invalid email format');
        }
        
        return errors;
    }

    static isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// UI Management
let currentEditingProduct = null;

function switchSection(sectionId) {
    try {
        // Hide all sections
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        // Show selected section
        const section = document.getElementById(sectionId);
        if (!section) {
            showToast('Section not found', 'error');
            return;
        }
        
        section.classList.add('active');
        
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
    } catch (error) {
        console.error('Error switching section:', error);
        showToast('Error loading section', 'error');
    }
}

// Dashboard Functions
function updateDashboard() {
    try {
        const products = AdminStore.getProducts();
        const categories = AdminStore.getCategories();
        
        document.getElementById('totalProducts').textContent = products.length;
        document.getElementById('totalCategories').textContent = categories.length;
        
        if (products.length > 0) {
            const avgPrice = (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2);
            document.getElementById('avgPrice').textContent = '$' + avgPrice;
        }
    } catch (error) {
        console.error('Error updating dashboard:', error);
        showToast('Error updating dashboard', 'error');
    }
}

// Products Management
function loadProductsTable() {
    try {
        const products = AdminStore.getProducts();
        const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
        const categoryFilter = document.getElementById('categoryFilter')?.value || '';
        
        let filtered = products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryFilter || p.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });
        
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;
        
        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px; color: #999;">No products found</td></tr>';
            return;
        }
        
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
    } catch (error) {
        console.error('Error loading products table:', error);
        showToast('Error loading products', 'error');
    }
}

function openProductModal() {
    try {
        currentEditingProduct = null;
        const form = document.getElementById('productForm');
        if (form) {
            form.reset();
            // Clear preview
            document.getElementById('productImagePreview').innerHTML = '';
            document.getElementById('productTryOnImagePreview').innerHTML = '';
            // Add real-time validation listeners
            addFormValidation(form);
        }
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.add('active');
            modal.style.animation = 'slideUp 0.3s ease';
        }
        showAdminNotification('✓ Form ready for new product', 'info');
    } catch (error) {
        console.error('Error opening product modal:', error);
        showAdminNotification('Error opening form: ' + error.message, 'error');
    }
}

function addFormValidation(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const type = input.type === 'number' ? 'number' : 'text';
            if (!validateInput(input.value, type)) {
                input.style.borderColor = '#ef4444';
                input.title = 'Please enter a valid value';
            } else {
                input.style.borderColor = '#10b981';
                input.title = '';
            }
        });
    });
}

function closeProductModal() {
    try {
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => modal.classList.remove('active'), 300);
        }
        currentEditingProduct = null;
    } catch (error) {
        console.error('Error closing product modal:', error);
    }
}

function editProduct(id) {
    try {
        const products = AdminStore.getProducts();
        const product = products.find(p => p.id === id);
        
        if (!product) {
            showToast('Product not found', 'error');
            return;
        }
        
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
        
        // Show image previews if they exist
        if (product.image && product.image.startsWith('data:image')) {
            showImagePreview('productImage', product.image);
        }
        if (product.tryOnImage && product.tryOnImage.startsWith('data:image')) {
            showImagePreview('productTryOnImage', product.tryOnImage);
        }
        
        document.getElementById('productModal').classList.add('active');
    } catch (error) {
        console.error('Error editing product:', error);
        showToast('Error loading product', 'error');
    }
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            let products = AdminStore.getProducts();
            products = products.filter(p => p.id !== id);
            AdminStore.setProducts(products);
            loadProductsTable();
            showToast('Product deleted successfully', 'success');
            updateDashboard();
        } catch (error) {
            console.error('Error deleting product:', error);
            showToast('Error deleting product', 'error');
        }
    }
}

document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
        const products = AdminStore.getProducts();
        
        const productData = {
            id: currentEditingProduct || Math.max(...products.map(p => p.id), 0) + 1,
            name: document.getElementById('productName').value.trim(),
            category: document.getElementById('productCategory').value,
            price: parseFloat(document.getElementById('productPrice').value),
            material: document.getElementById('productMaterial').value.trim(),
            description: document.getElementById('productDescription').value.trim(),
            image: document.getElementById('productImage').value.trim(),
            tryOnImage: document.getElementById('productTryOnImage').value.trim(),
            type: document.getElementById('productType').value,
            rating: document.getElementById('productRating').value.trim()
        };
        
        // Validate
        const errors = Validator.validateProductForm(productData);
        if (errors.length > 0) {
            showToast(errors[0], 'error');
            return;
        }
        
        if (currentEditingProduct) {
            const index = products.findIndex(p => p.id === currentEditingProduct);
            if (index !== -1) {
                products[index] = productData;
            }
        } else {
            products.push(productData);
        }
        
        AdminStore.setProducts(products);
        closeProductModal();
        loadProductsTable();
        showToast(currentEditingProduct ? 'Product updated!' : 'Product added!', 'success');
        updateDashboard();
    } catch (error) {
        console.error('Error saving product:', error);
        showToast('Error saving product', 'error');
    }
});

// Shop Info Management
function loadShopInfo() {
    try {
        const info = AdminStore.getShopInfo();
        Object.keys(info).forEach(key => {
            const input = document.getElementById(key);
            if (input) input.value = info[key];
        });
    } catch (error) {
        console.error('Error loading shop info:', error);
        showToast('Error loading shop information', 'error');
    }
}

function saveShopInfo() {
    try {
        const info = {};
        document.querySelectorAll('#shopInfoForm [id]').forEach(input => {
            info[input.id] = input.value.trim();
        });
        
        // Validate
        const errors = Validator.validateShopInfo(info);
        if (errors.length > 0) {
            showToast(errors[0], 'error');
            return;
        }
        
        AdminStore.setShopInfo(info);
        showToast('Shop information saved successfully!', 'success');
    } catch (error) {
        console.error('Error saving shop info:', error);
        showToast('Error saving shop information', 'error');
    }
}

function resetShopInfo() {
    try {
        loadShopInfo();
        showToast('Form reset', 'info');
    } catch (error) {
        console.error('Error resetting shop info:', error);
    }
}

// Categories Management
function loadCategoriesGrid() {
    try {
        const categories = AdminStore.getCategories();
        const products = AdminStore.getProducts();
        
        const grid = document.getElementById('categoriesGrid');
        if (!grid) return;
        
        if (categories.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #999;">No categories found</p>';
            return;
        }
        
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
    } catch (error) {
        console.error('Error loading categories:', error);
        showToast('Error loading categories', 'error');
    }
}

function openCategoryModal() {
    try {
        const form = document.getElementById('categoryForm');
        if (form) form.reset();
        const modal = document.getElementById('categoryModal');
        if (modal) modal.classList.add('active');
    } catch (error) {
        console.error('Error opening category modal:', error);
        showToast('Error opening form', 'error');
    }
}

function closeCategoryModal() {
    try {
        const modal = document.getElementById('categoryModal');
        if (modal) modal.classList.remove('active');
    } catch (error) {
        console.error('Error closing category modal:', error);
    }
}

function editCategory(id) {
    try {
        const categories = AdminStore.getCategories();
        const category = categories.find(c => c.id === id);
        
        if (!category) {
            showToast('Category not found', 'error');
            return;
        }
        
        document.getElementById('categoryName').value = category.name;
        document.getElementById('categoryIcon').value = category.icon;
        document.getElementById('categoryDescription').value = category.description || '';
        document.getElementById('categoryModal').classList.add('active');
    } catch (error) {
        console.error('Error editing category:', error);
        showToast('Error loading category', 'error');
    }
}

function deleteCategory(id) {
    if (confirm('Are you sure? Products in this category will not be deleted.')) {
        try {
            let categories = AdminStore.getCategories();
            categories = categories.filter(c => c.id !== id);
            AdminStore.setCategories(categories);
            loadCategoriesGrid();
            showToast('Category deleted', 'success');
        } catch (error) {
            console.error('Error deleting category:', error);
            showToast('Error deleting category', 'error');
        }
    }
}

// Utilities
function showToast(message, type = 'success') {
    try {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.className = 'toast ' + type;
        
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    } catch (error) {
        console.error('Error showing toast:', error);
    }
}

function exportData() {
    try {
        const data = {
            products: AdminStore.getProducts(),
            shopInfo: AdminStore.getShopInfo(),
            categories: AdminStore.getCategories(),
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dressify-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Data exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting data:', error);
        showToast('Error exporting data', 'error');
    }
}

function backupData() {
    exportData();
}

function syncData() {
    try {
        const status = document.getElementById('syncStatus');
        if (!status) return;
        
        status.textContent = 'Status: Syncing...';
        
        setTimeout(() => {
            AdminStore.updateMainStore();
            status.textContent = 'Status: Synced!';
            showToast('All data synced with main store!', 'success');
            
            setTimeout(() => {
                status.textContent = 'Status: Ready';
            }, 2000);
        }, 1000);
    } catch (error) {
        console.error('Error syncing data:', error);
        showToast('Error syncing data', 'error');
    }
}

function changePassword() {
    try {
        const newPassword = prompt('Enter new admin password (min 6 characters):');
        if (newPassword && newPassword.length >= 6) {
            localStorage.setItem('admin_password', btoa(newPassword));
            showToast('Password changed successfully!', 'success');
        } else if (newPassword !== null) {
            showToast('Password must be at least 6 characters', 'warning');
        }
    } catch (error) {
        console.error('Error changing password:', error);
        showToast('Error changing password', 'error');
    }
}

function resetAllData() {
    if (confirm('⚠️ WARNING: This will reset ALL data to defaults. This cannot be undone!')) {
        if (confirm('Are you absolutely sure? Type "RESET" in the next prompt to confirm.')) {
            const confirmation = prompt('Type RESET to confirm:');
            if (confirmation === 'RESET') {
                try {
                    localStorage.removeItem('admin_products');
                    localStorage.removeItem('admin_shopInfo');
                    localStorage.removeItem('admin_categories');
                    localStorage.removeItem('products');
                    showToast('All data reset successfully!', 'success');
                    setTimeout(() => location.reload(), 1500);
                } catch (error) {
                    console.error('Error resetting data:', error);
                    showToast('Error resetting data', 'error');
                }
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
    try {
        updateDashboard();
        loadShopInfo();
        loadProductsTable();
        loadCategoriesGrid();
        
        // Update last sync time
        const updateSyncTime = () => {
            const now = new Date();
            const syncElement = document.getElementById('lastSync');
            if (syncElement) {
                syncElement.textContent = `Last synced: ${now.toLocaleTimeString()}`;
            }
        };
        
        updateSyncTime();
        setInterval(updateSyncTime, 60000);
    } catch (error) {
        console.error('Error initializing admin panel:', error);
        showToast('Error initializing admin panel', 'error');
    }
});

// Mobile menu toggle
document.getElementById('menuToggle')?.addEventListener('click', () => {
    try {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        }
    } catch (error) {
        console.error('Error toggling menu:', error);
    }
});
