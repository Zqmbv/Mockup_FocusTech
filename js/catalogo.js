import { productsDatabase } from './productos.js';

let activeCategory = 'Todos';
let searchQuery = '';
let currentSort = 'popular';
let activeDetailProduct = null;
let activeDetailQty = 1;

document.addEventListener('DOMContentLoaded', () => {
    updateCategoryQuantities();
    renderCatalog();
});

function updateCategoryQuantities() {
    const categories = ['Cámaras', 'Lentes', 'Flashes', 'Drones', 'Accesorios'];
    categories.forEach(cat => {
        const count = productsDatabase.filter(p => p.category === cat).length;
        const items = document.querySelectorAll('.filter-item');
        items.forEach(item => {
            if (item.textContent.includes(cat)) {
                const badge = item.querySelector('.category-quantity');
                if (badge) badge.textContent = count;
            }
        });
    });
}

function renderCatalog() {
    const container = document.getElementById('catalog-products-container');
    if (!container) return;

    let filtered = productsDatabase.filter(product => {
        const matchesCat = (activeCategory === 'Todos') || (product.category === activeCategory);
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || 
            product.title.toLowerCase().includes(q) || 
            product.category.toLowerCase().includes(q) ||
            product.specs.some(s => s.toLowerCase().includes(q));
        return matchesCat && matchesSearch;
    });

    if (currentSort === 'low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    document.getElementById('displayed-count').textContent = filtered.length;
    document.getElementById('total-count').textContent = productsDatabase.length;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-gray);">
                <span class="material-symbols-outlined" style="font-size: 64px; margin-bottom: 10px;">search_off</span>
                <h3>No se encontraron productos</h3>
                <p style="font-size: 13px; margin-top: 5px;">Intenta cambiar el término de búsqueda o selecciona otra categoría.</p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(product => {
        const isOutOfStock = product.stock <= 0;
        let stockBadgeClass = 'high-stock';
        let stockBadgeText = `${product.stock} DISPONIBLES`;

        if (product.stock === 0) {
            stockBadgeClass = 'out-stock';
            stockBadgeText = 'AGOTADO';
        } else if (product.stock <= 3) {
            stockBadgeClass = 'low-stock';
            stockBadgeText = `¡ÚLTIMAS ${product.stock} UNIDADES!`;
        }

        return `
            <article class="catalog-product-card ${isOutOfStock ? 'out-of-stock' : ''}" onclick="openProductDetailModal(${product.id})">
                <div class="catalog-img-wrapper">
                    ${product.tag ? `<span class="catalog-tag ${product.tag === 'NUEVO' ? 'new' : ''}">${product.tag}</span>` : ''}
                    <img src="${product.img}" alt="${product.title}" class="catalog-product-img" onerror="this.src='https://via.placeholder.com/200x200?text=FocusTech'">
                </div>
                <div class="catalog-product-meta">
                    <span class="catalog-product-category">${product.category}</span>
                    <h3 class="catalog-product-title">${product.title}</h3>
                    <div class="stock-badge ${stockBadgeClass}">${stockBadgeText}</div>
                    <div class="catalog-price-row">
                        <span class="catalog-product-price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="catalog-btn-add" ${isOutOfStock ? 'disabled' : ''} onclick="event.stopPropagation(); addToCart(${product.id}, 1)" title="Añadir al carrito">
                            <span class="material-symbols-outlined" style="font-size: 20px;">shopping_cart</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function selectCategory(category, element) {
    activeCategory = category;
    document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
    renderCatalog();
}

function handleCatalogSearch(value) {
    searchQuery = value.trim();
    const clearBtn = document.getElementById('catalog-search-clear');
    if (clearBtn) clearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
    renderCatalog();
}

function clearCatalogSearch() {
    const input = document.getElementById('catalog-search-input');
    if (input) input.value = '';
    searchQuery = '';
    const clearBtn = document.getElementById('catalog-search-clear');
    if (clearBtn) clearBtn.style.display = 'none';
    renderCatalog();
}

function sortProducts(val) {
    currentSort = val;
    renderCatalog();
}

function openProductDetailModal(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product) return;

    activeDetailProduct = product;
    activeDetailQty = 1;

    document.getElementById('detail-modal-header-title').textContent = product.title;
    document.getElementById('detail-title').textContent = product.title;
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('detail-image').src = product.img;
    document.getElementById('detail-qty-value').textContent = activeDetailQty;

    const badge = document.getElementById('detail-badge');
    if (product.tag) {
        badge.style.display = 'inline-block';
        badge.textContent = product.tag;
    } else {
        badge.style.display = 'none';
    }

    const stockBadge = document.getElementById('detail-stock-badge');
    if (product.stock === 0) {
        stockBadge.className = 'stock-badge out-stock';
        stockBadge.textContent = 'AGOTADO';
    } else if (product.stock <= 3) {
        stockBadge.className = 'stock-badge low-stock';
        stockBadge.textContent = `¡ÚLTIMAS ${product.stock} UNIDADES!`;
    } else {
        stockBadge.className = 'stock-badge high-stock';
        stockBadge.textContent = `${product.stock} DISPONIBLES`;
    }

    const specsList = document.getElementById('detail-specs');
    specsList.innerHTML = product.specs.map(s => `<li>${s}</li>`).join('');

    const addBtn = document.getElementById('detail-add-to-cart-btn');
    addBtn.disabled = product.stock <= 0;

    document.getElementById('modal-product-detail').classList.add('active');
}

function closeProductDetailModal(e) {
    if (!e || e.target.id === 'modal-product-detail' || e.target.closest('.modal-close')) {
        document.getElementById('modal-product-detail').classList.remove('active');
    }
}

function adjustDetailQty(delta) {
    if (!activeDetailProduct || activeDetailProduct.stock <= 0) return;
    const newQty = activeDetailQty + delta;
    if (newQty >= 1 && newQty <= activeDetailProduct.stock) {
        activeDetailQty = newQty;
        document.getElementById('detail-qty-value').textContent = activeDetailQty;
    }
}

function addActiveProductToCart() {
    if (activeDetailProduct) {
        addToCart(activeDetailProduct.id, activeDetailQty);
        closeProductDetailModal(null);
    }
}

// Exposición global para los eventos en línea del HTML
Object.assign(window, {
    updateCategoryQuantities,
    renderCatalog,
    selectCategory,
    handleCatalogSearch,
    clearCatalogSearch,
    sortProducts,
    openProductDetailModal,
    closeProductDetailModal,
    adjustDetailQty,
    addActiveProductToCart
});