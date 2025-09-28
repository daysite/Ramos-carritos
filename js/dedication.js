// Crear ramo de girasoles con centros de carritos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones para los girasoles (BASE DEL TALLO)
    const flowerPositions = [
        // Flores formando un ramo natural
        { left: 50, stemHeight: 180 },  // Centro
        { left: 40, stemHeight: 170 },  // Izquierda
        { left: 60, stemHeight: 170 },  // Derecha
        { left: 35, stemHeight: 160 },  // Izquierda exterior
        { left: 65, stemHeight: 160 },  // Derecha exterior
        { left: 45, stemHeight: 150 },  // Izquierda interior
        { left: 55, stemHeight: 150 }   // Derecha interior
    ];
    
    // Crear cada flor CON SU TALLO UNIDO
    flowerPositions.forEach((position, index) => {
        createCompleteFlower(bouquetContainer, carImages, position, index);
    });
    
    // Crear hojas adicionales
    createAdditionalLeaves(bouquetContainer);
}

function createCompleteFlower(container, carImages, position, index) {
    // Crear contenedor principal (tallo + flor)
    const flowerContainer = document.createElement('div');
    flowerContainer.className = 'flower-with-stem';
    flowerContainer.style.left = `${position.left}%`;
    
    // Crear tallo
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.height = `${position.stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 8 - 4}deg)`;
    
    // Crear girasol en la punta del tallo
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.animationDelay = `${index * 0.2}s`;
    
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
    leaf.style.bottom = `${position.stemHeight * 0.6}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`;
    
    // Ensamblar todo
    flowerContainer.appendChild(stem);
    flowerContainer.appendChild(leaf);
    flowerContainer.appendChild(sunflower);
    container.appendChild(flowerContainer);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base del ramo
    const additionalLeaves = [
        { left: 38, bottom: 25 },
        { left: 48, bottom: 30 },
        { left: 58, bottom: 28 },
        { left: 42, bottom: 35 },
        { left: 52, bottom: 32 }
    ];
    
    additionalLeaves.forEach(leafPos => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.position = 'absolute';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${0.6 + Math.random() * 0.3})`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
