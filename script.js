// Script simples para realçar navegação fluida
document.addEventListener('DOMContentLoaded', () => {
    // Efeito suave de rolagem e destaque simples no header
    const linksNav = document.querySelectorAll('.nav a');

    linksNav.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});