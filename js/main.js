/**
 * main.js - Módulo de interactividad general, modales y comportamiento responsivo.
 */

/**
 * Alterna la visibilidad del menú móvil.
 */
export function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    const isHidden = menu.style.display === 'none' || !menu.style.display;
    menu.style.display = isHidden ? 'flex' : 'none';
}

/**
 * Abre cualquier modal mediante su ID y bloquea el scroll del body.
 * @param {string} id - ID del elemento modal.
 */
export function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra cualquier modal mediante su ID y restaura el scroll del body.
 * @param {string} id - ID del elemento modal.
 */
export function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Abre el modal de autenticación ajustando dinámicamente el título.
 * @param {string} mode - Texto para el título del modal.
 */
export function openAuthModal(mode) {
    const authTitle = document.getElementById('auth-title');
    if (authTitle) {
        authTitle.innerText = mode;
    }
    openModal('modal-auth');
}

/**
 * Cierra el modal de autenticación.
 */
export function closeAuthModal() {
    closeModal('modal-auth');
}

/**
 * Maneja el evento submit del formulario de autenticación.
 * @param {Event} e - Evento de formulario.
 */
export function handleAuthSubmit(e) {
    e.preventDefault();
    closeAuthModal();
    if (window.showToast) {
        window.showToast("Se ha iniciado sesión de manera exitosa.");
    }
}

// Escuchador de medios: Si la pantalla supera los 1200px (75rem), desactiva y resetea el menú móvil
const mediaQueryDesktop = window.matchMedia('(min-width: 67rem)');

function handleResponsiveMenu(e) {
    if (e.matches) {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.style.display = 'none'; // Desactiva la vista móvil
            menu.removeAttribute('style'); // Remueve estilos inline para evitar conflictos futuros
        }
    }
}

// Ejecución al cambiar el tamaño de ventana y comprobación inicial
mediaQueryDesktop.addEventListener('change', handleResponsiveMenu);

// Cierre de modales al hacer clic en el backdrop
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Exposición global al objeto window para eventos inline del HTML
Object.assign(window, {
    toggleMobileMenu,
    openModal,
    closeModal,
    openAuthModal,
    closeAuthModal,
    handleAuthSubmit
});