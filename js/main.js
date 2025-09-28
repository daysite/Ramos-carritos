// Archivo principal - Efectos generales de la página

// Efecto de confeti especial
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        container.appendChild(confetti);
    }
}

// Efecto de click en el ramo
function setupBouquetInteractions() {
    const bouquet = document.getElementById('hotwheels-bouquet');
    
    bouquet.addEventListener('click', function() {
        // Crear efecto de explosión de corazones
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '2rem';
            heart.style.animation = `heartExplosion 1s ease-out forwards ${i * 0.1}s`;
            document.querySelector('.bouquet-section').appendChild(heart);
        }
        
        // Reproducir sonido de motor (opcional)
        playEngineSound();
    });
}

// Efecto de sonido (opcional)
function playEngineSound() {
    // Puedes agregar un sonido de motor aquí más tarde
    console.log('¡Vroom Vroom! 🏎️');
}

// Inicializar todos los efectos cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    setupBouquetInteractions();
    
    // Agregar CSS para la explosión de corazones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartExplosion {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(
                    ${Math.random() * 200 - 100}px, 
                    ${Math.random() * 200 - 100}px
                ) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Efecto de scroll suave para la página
function setupSmoothScroll() {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
