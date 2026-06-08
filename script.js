
    let cart = [];
    let isMobileMenuOpen = false;

    // Activa/Desactiva menú móvil
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    }

    // Añadir al carrito de compras
    function addToCart(title, price, image) {
        const existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ title, price, image, quantity: 1 });
        }
        updateCartUI();
        showNotification(`¡Añadido al carrito: ${title}!`);
    }

    // Eliminar del carrito
    function removeFromCart(title) {
        cart = cart.filter(item => item.title !== title);
        updateCartUI();
    }

    // Abrir/Cerrar barra de compras lateral
    function toggleCart() {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    }

    // Actualizar la interfaz del carrito
    function updateCartUI() {
        const container = document.getElementById('cart-body');
        const badge = document.getElementById('cart-badge');
        const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
        
        badge.innerText = totalCount;

        if (cart.length === 0) {
            container.innerHTML = `
                <div id="empty-cart-message" class="cart-empty-msg">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:48px; height:48px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    <p>El carrito está actualmente vacío.</p>
                </div>
            `;
            document.getElementById('cart-subtotal').innerText = '$ 0.00';
            return;
        }

        container.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.title}</div>
                    <div class="cart-item-price">$ ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} x ${item.quantity}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:12px; font-weight:800; margin-bottom:5px;">$ ${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                    <button onclick="removeFromCart('${item.title}')" class="cart-item-remove">Eliminar</button>
                </div>
            `;
            container.appendChild(itemDiv);
        });

        document.getElementById('cart-subtotal').innerText = `$ ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    }

    // Proceder al pago seguro (Simulación)
    function processSecurePayment() {
        if (cart.length === 0) {
            showNotification('El carrito está vacío en este momento.');
            return;
        }
        toggleCart();
        cart = [];
        updateCartUI();
        openModal('modal-checkout-success');
    }

    // Control de ventanas Modales
    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Modales de Autenticación
    function openAuthModal(type) {
        const modal = document.getElementById('modal-auth');
        const title = document.getElementById('auth-title');
        title.innerText = type === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta Nueva';
        openModal('modal-auth');
    }

    function handleAuthSubmit(event) {
        event.preventDefault();
        closeModal('modal-auth');
        showNotification('Sección de autenticación simulada con éxito.');
        event.target.reset();
    }

    // Envío de Formularios
    function handleContactSubmit(event) {
        event.preventDefault();
        closeModal('modal-contacto');
        showNotification('Mensaje enviado. Le contactaremos lo antes posible.');
        event.target.reset();
    }

    function handleLeadSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('lead-name').value;
        showNotification(`¡Enhorabuena, ${name}! Guía de fotografía gratuita enviada a su correo.`);
        event.target.reset();
    }

    // Sistema de Notificaciones de la Página
    function showNotification(msg) {
        const toast = document.getElementById('notification-toast');
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Activar/Ocultar Widget de Soporte Chat
    function toggleChatWidget() {
        const popup = document.getElementById('chat-bubble-popup');
        if (popup.style.display === 'flex') {
            popup.style.display = 'none';
        } else {
            popup.style.display = 'flex';
        }
    }

    // Lógica del Chatbot Simulador
    function sendChatMessage() {
        const input = document.getElementById('chat-user-input');
        const text = input.value.trim();
        if (!text) return;

        const container = document.getElementById('chat-messages-container');
        
        // Render del mensaje del usuario
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-msg user';
        userMsg.innerText = text;
        container.appendChild(userMsg);
        
        input.value = '';
        container.scrollTop = container.scrollHeight;

        // Respuesta automatizada del bot
        setTimeout(() => {
            const responseMsg = document.createElement('div');
            responseMsg.className = 'chat-msg bot';
            
            let answer = "Excelente pregunta. Actualmente contamos con entrega express inmediata el día de hoy en toda Maracaibo. ¿Qué producto de nuestro catálogo destacado te interesa adquirir?";
            if (text.toLowerCase().includes("lente") || text.toLowerCase().includes("canon")) {
                answer = "¡Gran elección! El lente Canon RF 50mm f/1.8 STM lo tenemos para entrega inmediata hoy mismo con su caja original sellada y certificado de garantía.";
            } else if (text.toLowerCase().includes("garantia") || text.toLowerCase().includes("garantía")) {
                answer = "FocusTech ofrece garantía física directa para todos los equipos de gama alta directamente en nuestro centro asociado de Maracaibo.";
            }

            responseMsg.innerHTML = `<strong>Soporte FocusTech:</strong> ${answer}`;
            container.appendChild(responseMsg);
            container.scrollTop = container.scrollHeight;
        }, 1000);
    }