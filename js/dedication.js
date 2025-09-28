// Crear ramo de girasoles con centros de carritos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones CENTRADAS para los girasoles
    const flowerPositions = [
        // {left, stemHeight} - TODOS CENTRADOS
        { left: 50, stemHeight: 200 },  // Centro
        { left: 42, stemHeight: 190 },  // Izquierda cerca del centro
        { left: 58, stemHeight: 190 },  // Derecha cerca del centro
        { left: 38, stemHeight: 180 },  // Izquierda
        { left: 62, stemHeight: 180 },  // Derecha
        { left: 46, stemHeight: 170 },  // Izquierda interior
        { left: 54, stemHeight: 170 }   // Derecha interior
    ];
    
    // Crear cada flor CON SU TALLO CORRESPONDIENTE
    flowerPositions.forEach((position, index) => {
        createFlowerWithStem(bouquetContainer, carImages, position, index);
    });
    
    // Crear hojas adicionales
    createAdditionalLeaves(bouquetContainer);
}

function createFlowerWithStem(container, carImages, position, index) {
    // Calcular posición de la flor (final del tallo)
    const flowerTop = 500 - position.stemHeight; // 500 es la altura del contenedor
    
    // Crear TALLO
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.height = `${position.stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 4 - 2}deg)`;
    
    // Crear FLOR en el FINAL del tallo - SIN ANIMACIÓN
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${flowerTop}px`;
    sunflower.style.transform = `translate(-50%, -50%)`;
    
    // Crear pétalos (12 pétalos alrededor)
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        const petalDistance = 30;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) translateX(${petalDistance}px)`;
        
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
    
    // Crear hoja en el tallo
    const leaf = document.createElement('div');
    leaf.className = 'flower-leaf';
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${position.stemHeight * 0.5}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 20 - 10}deg)`;
    
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
    
    additionalLeaves.forEach(leafPos => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(${0.6 + Math.random() * 0.3})`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
