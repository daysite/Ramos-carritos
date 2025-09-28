// Crear ramo de girasoles con centros de carritos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones para los girasoles (FLORES EN LA PUNTA DE LOS TALLOS)
    const flowerPositions = [
        // {left, top, stemHeight}
        { left: 50, top: 250, stemHeight: 180 },  // Centro - más alto
        { left: 40, top: 270, stemHeight: 160 },  // Izquierda
        { left: 60, top: 270, stemHeight: 160 },  // Derecha
        { left: 35, top: 290, stemHeight: 140 },  // Izquierda exterior
        { left: 65, top: 290, stemHeight: 140 },  // Derecha exterior
        { left: 45, top: 300, stemHeight: 130 },  // Izquierda interior
        { left: 55, top: 300, stemHeight: 130 }   // Derecha interior
    ];
    
    // Crear cada flor CON SU TALLO CORRESPONDIENTE
    flowerPositions.forEach((position, index) => {
        createFlowerWithStem(bouquetContainer, carImages, position, index);
    });
    
    // Crear hojas adicionales
    createAdditionalLeaves(bouquetContainer);
}

function createFlowerWithStem(container, carImages, position, index) {
    // Crear TALLO
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.height = `${position.stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)`;
    
    // Crear FLOR en la posición correcta (punta del tallo)
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${position.top}px`;
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
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${position.stemHeight * 0.4}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 25 - 12}deg)`;
    
    // Agregar elementos al DOM
    container.appendChild(stem);
    container.appendChild(leaf);
    container.appendChild(sunflower);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base
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
