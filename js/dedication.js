// Crear ramo de girasoles con animación de crecimiento
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones CENTRADAS para los girasoles - TALLOS MÁS CORTOS
    const flowerPositions = [
        // {left, stemHeight, delay} - TALLOS MÁS PEQUEÑOS
        { left: 50, stemHeight: 160, delay: 0 },    // Centro
        { left: 42, stemHeight: 150, delay: 300 },  // Izquierda cerca del centro
        { left: 58, stemHeight: 150, delay: 600 },  // Derecha cerca del centro
        { left: 38, stemHeight: 140, delay: 900 },  // Izquierda
        { left: 62, stemHeight: 140, delay: 1200 }, // Derecha
        { left: 46, stemHeight: 130, delay: 1500 }, // Izquierda interior
        { left: 54, stemHeight: 130, delay: 1800 }  // Derecha interior
    ];
    
    // Crear efecto de puntos cayendo en TODA LA PANTALLA
    createFallingDots();
    
    // Crear cada flor CON ANIMACIÓN UNO POR UNO
    flowerPositions.forEach((position, index) => {
        setTimeout(() => {
            createFlowerWithStem(bouquetContainer, carImages, position, index);
        }, position.delay);
    });
    
    // Crear hojas adicionales con retraso
    setTimeout(() => {
        createAdditionalLeaves(bouquetContainer);
    }, 2100);
}

function createFallingDots() {
    // Crear múltiples puntos cayendo en TODA LA PANTALLA
    const dotCount = 30;
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'falling-dot';
        
        // Posición aleatoria en TODA LA PANTALLA
        dot.style.left = `${Math.random() * 100}vw`;
        
        // Retraso aleatorio para que no caigan todos a la vez
        dot.style.animationDelay = `${Math.random() * 6}s`;
        
        // Duración aleatoria
        dot.style.animationDuration = `${3 + Math.random() * 4}s`;
        
        // Tamaño ligeramente variable
        const size = 2 + Math.random() * 4;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Opacidad variable
        dot.style.opacity = `${0.3 + Math.random() * 0.5}`;
        
        // Agregar al body para toda la pantalla
        document.body.appendChild(dot);
    }
}

function createFlowerWithStem(container, carImages, position, index) {
    // Calcular posición de la flor (final del tallo)
    const flowerTop = 500 - position.stemHeight;
    
    // Crear TALLO CON ANIMACIÓN DE CRECIMIENTO - MÁS DELGADO
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.setProperty('--final-height', `${position.stemHeight}px`);
    stem.style.animationDelay = '0s';
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 4 - 2}deg)`;
    
    // Crear FLOR con animación de aparición
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${flowerTop}px`;
    sunflower.style.animationDelay = '1.2s';
    
    // Crear pétalos con animación
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.setProperty('--petal-angle', `${angle * 180 / Math.PI}deg`);
        petal.style.animationDelay = `${1.5 + (i * 0.05)}s`;
        
        sunflower.appendChild(petal);
    }
    
    // Crear centro con imagen circular del carrito
    const center = document.createElement('div');
    center.className = 'sunflower-center';
    
    const carImg = document.createElement('img');
    const carType = index % carImages.length;
    carImg.src = carImages[carType];
    carImg.alt = `Carrito Hot Wheels`;
    carImg.className = 'car-center-image';
    
    center.appendChild(carImg);
    sunflower.appendChild(center);
    
    // Crear hoja con animación - MÁS PEQUEÑA
    const leaf = document.createElement('div');
    leaf.className = 'flower-leaf';
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${position.stemHeight * 0.5}px`;
    leaf.style.setProperty('--leaf-rotation', `${Math.random() * 20 - 10}deg`);
    leaf.style.animationDelay = '0.8s';
    
    // Agregar elementos al DOM
    container.appendChild(stem);
    container.appendChild(leaf);
    container.appendChild(sunflower);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base - CENTRADAS
    const additionalLeaves = [
        { left: 44, bottom: 30 },
        { left: 50, bottom: 35 },
        { left: 56, bottom: 32 },
        { left: 48, bottom: 40 },
        { left: 52, bottom: 38 }
    ];
    
    additionalLeaves.forEach((leafPos, index) => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.setProperty('--leaf-rotation', `${Math.random() * 30 - 15}deg`);
        leaf.style.animationDelay = `${index * 0.1}s`;
        leaf.style.animationDuration = '0.6s';
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
