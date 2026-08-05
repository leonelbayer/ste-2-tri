document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DE ACESSIBILIDADE --- //

    let fontScale = parseFloat(localStorage.getItem('userFontScale')) || 1.0;
    let isHighContrast = localStorage.getItem('userContrast') === 'true';

    // Aplica estados salvos
    applyFontScale(fontScale);
    if (isHighContrast) applyContrast(true);

    const btnContrast = document.getElementById('btn-contrast');
    const btnFontIncrease = document.getElementById('btn-font-increase');
    const btnFontDecrease = document.getElementById('btn-font-decrease');
    const btnFontReset = document.getElementById('btn-font-reset');

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        isHighContrast = !isHighContrast;
        applyContrast(isHighContrast);
        localStorage.setItem('userContrast', isHighContrast);
    });

    function applyContrast(enable) {
        if (enable) {
            document.body.classList.add('high-contrast');
            btnContrast.setAttribute('aria-pressed', 'true');
        } else {
            document.body.classList.remove('high-contrast');
            btnContrast.setAttribute('aria-pressed', 'false');
        }
    }

    // Controle de Tamanho de Fonte (Limites entre 0.85 e 1.4)
    btnFontIncrease.addEventListener('click', () => {
        if (fontScale < 1.4) {
            fontScale += 0.1;
            updateFontScale();
        }
    });

    btnFontDecrease.addEventListener('click', () => {
        if (fontScale > 0.85) {
            fontScale -= 0.1;
            updateFontScale();
        }
    });

    btnFontReset.addEventListener('click', () => {
        fontScale = 1.0;
        updateFontScale();
    });

    function updateFontScale() {
        fontScale = parseFloat(fontScale.toFixed(2));
        applyFontScale(fontScale);
        localStorage.setItem('userFontScale', fontScale);
    }

    function applyFontScale(scale) {
        document.documentElement.style.setProperty('--font-scale', scale);
    }

    // --- 2. NAVEGAÇÃO FLUIDA & ANIMAÇÕES --- //

    const navLinks = document.querySelectorAll('.nav a, .footer-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 110;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Observer para Animação de Entrada
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.editorial-section, .panoramic-banner, .data-row, .deep-read');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});