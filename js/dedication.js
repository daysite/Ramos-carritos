// Mensajes de amor para la dedicatoria
const loveMessages = [
    "Eres el motor que acelera mi corazón 💖",
    "Como un Hot Wheels, nuestra amor es rápido y emocionante 🏎️",
    "Cada carrito representa una aventura juntos",
    "Eres mi tesoro más preciado, más que cualquier carrito",
    "Nuestro amor corre más rápido que un superdeportivo",
    "Eres la pieza que completa mi colección perfecta"
];

// Función para cambiar mensajes automáticamente
function changeLoveMessage() {
    const messageElement = document.querySelector('.love-message p');
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % loveMessages.length;
        messageElement.style.opacity = 0;
        
        setTimeout(() => {
            messageElement.textContent = loveMessages[currentIndex];
            messageElement.style.opacity = 1;
        }, 500);
        
    }, 4000);
}

// Función para crear carritos flotantes
function createFloatingCars() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-cars';
    document.querySelector('.container').appendChild(floatingContainer);
    
    const carEmojis = ['🏎️', '🚗', '🚓', '🚙', '🏁', '🚀'];
    
    carEmojis.forEach((emoji, index) => {
        const carElement = document.createElement('div');
        carElement.className = 'car-float';
        carElement.textContent = emoji;
        carElement.style.top = `${20 + (index * 15)}%`;
        carElement.style.animationDelay = `${index * 0.5}s`;
        floatingContainer.appendChild(carElement);
    });
}

// Inicializar cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    changeLoveMessage();
    createFloatingCars();
    
    // Efecto de escritura en el título
    const originalTitle = "Para Mi Amor 💖";
    let titleElement = document.querySelector('.love-title');
    let i = 0;
    
    function typeWriter() {
        if (i < originalTitle.length) {
            titleElement.innerHTML = originalTitle.substring(0, i + 1) + '<span class="blink">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            titleElement.innerHTML = originalTitle;
        }
    }
    
    typeWriter();
});
