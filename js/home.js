import { openModal, showToast } from './cart.js';

/**
 * Maneja el envío del formulario de captura de leads.
 * @param {Event} event 
 */
export function handleLeadSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('lead-name')?.value.trim();
    const emailInput = document.getElementById('lead-email')?.value.trim();

    if (!nameInput || !emailInput) {
        showToast("Por favor complete todos los campos.");
        return;
    }

    downloadAcademicPDF(nameInput);
    openModal('modal-thankyou');
    document.getElementById('leadForm')?.reset();
}

/**
 * Genera y descarga dinámicamente un archivo PDF de guía fotográfica.
 * @param {string} userName 
 */
export function downloadAcademicPDF(userName) {
    const cleanName = userName.replace(/[^\w\s]/gi, '');
    const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources <</Font <</F1 5 0 R>>>> >> endobj
4 0 obj <</Length 380>> stream
BT
/F1 22 Tf
50 780 Td
(FocusTech - Guia de Iniciacion Fotografica) Tj
0 -40 Td
/F1 12 Tf
(Hola, ${cleanName}! Gracias por unirte a nuestra comunidad fotográfica.) Tj
0 -30 Td
(1. EL TRIANGULO DE EXPOSICION) Tj
0 -18 Td
(   - Apertura de Diafragma (f/): Controla la luz y la profundidad de campo.) Tj
0 -15 Td
(   - Velocidad de Obturacion (s): Controla el tiempo y el movimiento.) Tj
0 -15 Td
(   - Sensibilidad ISO: Controla la amplificación digital del sensor.) Tj
0 -30 Td
(2. REGLA DE COMPOSICION RECOMENDADA) Tj
0 -18 Td
(   - Ley de Tercios: Ubica el punto de interés en las intersecciones.) Tj
0 -15 Td
(   - Ley de la Mirada: Deja aire hacia donde el sujeto observa.) Tj
0 -30 Td
(3. CONSEJO FINAL ACADEMICO) Tj
0 -18 Td
(   - Tu visión artística vale más que cualquier sensor de última tecnología.) Tj
0 -15 Td
(     ¡Sal a capturar el mundo hoy mismo!) Tj
ET
endstream
endobj
5 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000246 00000 n 
0000000676 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
742
%%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Guia_Iniciacion_FocusTech.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Exposición al objeto window para invocaciones inline desde el HTML
Object.assign(window, {
    handleLeadSubmit,
    downloadAcademicPDF
});