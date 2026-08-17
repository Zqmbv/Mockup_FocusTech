function handleContactSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('contact-name');
    const name = nameInput.value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/;
    if (!nameRegex.test(name)) {
        showToast("Por favor, ingresa un nombre válido (mínimo 3 letras, sin números).");
        nameInput.focus();
        return;
    }

    if (!name || !email || !subject || !message) {
        showToast("Por favor, rellena todos los campos obligatorios.");
        return;
    }
    
    openModal('successModal');
    document.getElementById('contactForm').reset();
}

Object.assign(window, {
    handleContactSubmit
});