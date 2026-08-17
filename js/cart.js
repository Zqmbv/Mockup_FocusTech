import { productsDatabase } from './productos.js';

// Estado global del carrito sincronizado con localStorage
export let cart = JSON.parse(localStorage.getItem('focus_tech_cart')) || [];

/**
 * Guarda el carrito actual en localStorage y notifica los cambios.
 */
export function saveCart() {
    localStorage.setItem('focus_tech_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

/**
 * Agrega un producto al carrito verificando stock.
 */
export function addToCart(productId, qty = 1) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product || product.stock <= 0) return;

    const existingItem = cart.find(item => item.id === productId);
    const currentQty = existingItem ? existingItem.qty : 0;

    if (currentQty + qty > product.stock) {
        showToast(`Stock máximo alcanzado (${product.stock} disponibles)`);
        return;
    }

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.title} añadido al carrito`);
}

/**
 * Actualiza la cantidad de un producto existente.
 */
export function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const product = productsDatabase.find(p => p.id === productId);
    const newQty = item.qty + delta;

    if (newQty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    } else if (newQty <= product.stock) {
        item.qty = newQty;
    } else {
        showToast(`Máximo de stock disponible: ${product.stock}`);
        return;
    }

    saveCart();
    updateCartUI();
}

/**
 * Elimina un producto del carrito.
 */
export function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Producto eliminado del carrito');
}

/**
 * Abre o cierra el sidebar del carrito.
 */
export function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}

/**
 * Actualiza la interfaz del carrito y los badges en cualquier página donde existan.
 */
export function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const emptyMsg = document.getElementById('cart-empty-message');
    const badge = document.getElementById('cart-badge');
    const totalPrice = document.getElementById('cart-total-price');

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (badge) badge.textContent = totalItems;
    if (totalPrice) totalPrice.textContent = `$${subtotal.toFixed(2)}`;

    if (container) {
        if (cart.length === 0) {
            if (emptyMsg) emptyMsg.style.display = 'flex';
            container.innerHTML = '';
        } else {
            if (emptyMsg) emptyMsg.style.display = 'none';
            container.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                        <div class="cart-item-qty-selector">
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                            <span class="cart-item-qty">${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            `).join('');
        }
    }
}

/**
 * Redirige a la pasarela de pago.
 */
export function checkoutCart() {
    if (cart.length === 0) {
        showToast('Tu carrito está vacío');
        return;
    }
    window.location.href = "pasarela_pago.html";
}

/**
 * Utilidad de notificaciones Toast.
 */
export function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgSpan = document.getElementById('toast-message');
    if (toast && msgSpan) {
        msgSpan.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Eventos de sincronización entre pestañas y carga de DOM
window.addEventListener('storage', (e) => {
    if (e.key === 'focus_tech_cart') {
        cart = JSON.parse(e.newValue) || [];
        updateCartUI();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});

// Exposición global de las funciones del carrito
Object.assign(window, {
    toggleCart,
    addToCart,
    updateCartQty,
    removeFromCart,
    checkoutCart,
    showToast
});