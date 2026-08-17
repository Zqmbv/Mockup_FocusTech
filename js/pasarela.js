let cart = JSON.parse(localStorage.getItem('focus_tech_cart')) || [];
let currentMethod = 'visa';

const demoCartProducts = [
    {
        id: 1,
        title: "Sony ZV-E10 (Cuerpo)",
        price: 699.00,
        qty: 1,
        img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_ZVE10.png"
    },
    {
        id: 66,
        title: "SanDisk Extreme Pro 128GB (UHS-I)",
        price: 35.00,
        qty: 2,
        img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/SanDisk_Extreme_Pro_128GB.png"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    if (!cart || cart.length === 0) {
        cart = [...demoCartProducts];
        showToast("Vista previa: Se muestran productos de prueba.");
    }

    renderOrderSummary();
    // Inicializar por defecto Visa desactivando/activando según corresponda
    setPaymentMethod('visa');
});

function renderOrderSummary() {
    const container = document.getElementById('summaryItemsContainer');
    const subtotalEl = document.getElementById('subtotalVal');
    const taxEl = document.getElementById('taxVal');
    const totalEl = document.getElementById('totalVal');

    if (!container) return;

    if (!cart || cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 24px; color: var(--text-muted);">
                <span class="material-symbols-outlined" style="font-size: 40px; margin-bottom: 8px;">shopping_basket</span>
                <p style="font-size: 13px; font-weight: 700; color: #fff;">Tu carrito está vacío</p>
                <p style="font-size: 11px; margin-top: 4px;">Agrega productos desde el catálogo para continuar.</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = "$0.00";
        if (taxEl) taxEl.textContent = "$0.00";
        if (totalEl) totalEl.textContent = "$0.00";
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    container.innerHTML = cart.map(item => `
        <div class="summary-item">
            <img src="${item.img || item.image || 'https://via.placeholder.com/50'}" alt="${item.title}" class="summary-item-img" onerror="this.src='https://via.placeholder.com/50?text=FocusTech'">
            <div class="summary-item-details">
                <h4 class="summary-item-title">${item.title}</h4>
                <div class="summary-item-qty">Cantidad: ${item.qty} × $${Number(item.price).toFixed(2)}</div>
            </div>
            <div class="summary-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function setPaymentMethod(method) {
    currentMethod = method;

    // Cambiar clase activa en tabs
    document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`method-${method}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Ocultar y desactivar validaciones en contenedores que NO estén activos
    const allFieldContainers = document.querySelectorAll('.payment-fields');
    allFieldContainers.forEach(container => {
        const isSelected = container.id === `fields-${method}`;
        container.style.display = isSelected ? 'block' : 'none';

        // Gestionar dinámicamente el estado 'required' y 'disabled'
        const inputs = container.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (isSelected) {
                input.removeAttribute('disabled');
                input.setAttribute('required', 'required');
            } else {
                input.setAttribute('disabled', 'disabled');
                input.removeAttribute('required');
            }
        });
    });
}

function updateCCMirror() {
    const nameInput = document.getElementById('cc-name');
    const numInput = document.getElementById('cc-number');
    const expInput = document.getElementById('cc-expiry');

    if (nameInput) document.getElementById('cc-mirror-name').textContent = (nameInput.value || 'Nombre Apellido').toUpperCase();
    if (numInput) document.getElementById('cc-mirror-num').textContent = numInput.value || '•••• •••• •••• ••••';
    if (expInput) document.getElementById('cc-mirror-expiry').textContent = expInput.value || 'MM/YY';
}

function formatCCNumber() {
    const input = document.getElementById('cc-number');
    if (!input) return;
    let val = input.value.replace(/\D/g, '');
    val = val.replace(/(.{4})/g, '$1 ').trim();
    input.value = val;
}

function formatCCExpiry() {
    const input = document.getElementById('cc-expiry');
    if (!input) return;
    let val = input.value.replace(/\D/g, '');
    if (val.length >= 2) {
        val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    input.value = val;
}

function processPayment(e) {
    if (e) e.preventDefault();

    if (cart.length === 0) {
        showToast("Tu carrito está vacío.");
        return;
    }

    // Validar que los campos requeridos del método activo estén correctamente llenos
    const activeContainer = document.getElementById(`fields-${currentMethod}`);
    if (activeContainer) {
        const requiredInputs = activeContainer.querySelectorAll('input[required], select[required]');
        for (let input of requiredInputs) {
            if (!input.value.trim()) {
                showToast(`Por favor completa todos los datos requeridos para ${currentMethod.toUpperCase().replace('_', ' ')}.`);
                input.focus();
                return;
            }
        }
    }

    const btn = document.getElementById('payButton');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span> Validando Transacción...`;
    }

    setTimeout(() => {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = `<span class="material-symbols-outlined">verified_user</span> Confirmar y Pagar`;
        }

        const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
        const tax = subtotal * 0.16;
        const total = subtotal + tax;

        const itemsHtml = cart.map(i => `
            <div class="invoice-row">
                <span>${i.qty}x ${i.title.length > 22 ? i.title.substring(0, 22) + '...' : i.title}</span>
                <span>$${(i.price * i.qty).toFixed(2)}</span>
            </div>
        `).join('');

        const invoiceDetails = document.getElementById('invoiceDetailsContainer');
        if (invoiceDetails) {
            invoiceDetails.innerHTML = `
                <div class="invoice-header">
                    <strong>FOCUSTECH VENEZUELA C.A.</strong><br>
                    RIF: J-408990112 | Teléfono: 0414-6123456<br>
                    Método: ${currentMethod.toUpperCase().replace('_', ' ')}<br>
                    Fecha: ${new Date().toLocaleDateString('es-ES')} - ${new Date().toLocaleTimeString('es-ES')}
                </div>
                ${itemsHtml}
                <div class="invoice-row total-row">
                    <span>TOTAL CANCELADO:</span>
                    <span style="color: var(--green-accent);">$${total.toFixed(2)}</span>
                </div>
            `;
        }

        const modal = document.getElementById('invoiceModal');
        if (modal) modal.classList.add('active');
    }, 1500);
}

function showToast(message) {
    const toast = document.getElementById('paymentToast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }
}

function finishCheckout() {
    localStorage.removeItem('focus_tech_cart');
    window.location.href = './index.html';
}