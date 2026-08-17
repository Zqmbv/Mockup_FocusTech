/* ==========================================================
    LÓGICA DE NAVEGACIÓN Y AUTO-DESPLEGABLE DE ACORDEONES
========================================================== */
document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (href === '#' || href.length <= 1) return;

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // Check if target is inside a closed <details> element and open it
        const parentDetails = targetElement.closest('details');
        if (parentDetails && !parentDetails.open) {
            parentDetails.open = true;
        }
        
        // If the target element itself is a details tag
        if (targetElement.tagName === 'DETAILS' && !targetElement.open) {
            targetElement.open = true;
        }
    }
});

/* real-time Search Filter for Glossary Sidebar */
const searchInput = document.getElementById('glossary-search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const glossaryItems = document.querySelectorAll('#glossary-list > details, #glossary-list > li');

        glossaryItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(term)) {
                item.style.display = '';
                if (term.length > 1 && item.tagName === 'DETAILS') {
                    item.open = true;
                }
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* Scroll-Spy for Sidebar active links */
const glosarioLinks = document.querySelectorAll('aside a[href^="#"]');
const watchedTargets = [];

glosarioLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target && !watchedTargets.includes(target)) {
        watchedTargets.push(target);
    }
});

const spy = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('aside a').forEach(a => a.classList.remove('active-link'));
                
                const links = document.querySelectorAll(`aside a[href="#${id}"]`);
                links.forEach((link) => {
                    link.classList.add('active-link');
                    
                    const parentDetails = link.closest('details');
                    if (parentDetails && !parentDetails.open) {
                        parentDetails.open = true;
                    }
                });
            }
        });
    },
    { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
);

watchedTargets.forEach((target) => spy.observe(target));