// Crear ramo de girasoles con centros de carritos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones para los girasoles (formando un ramo)
    const sunflowerPositions = [
        // Girasol principal (centro)
        { left: 50, top: 40, size: 100, stemHeight: 180 },
        // Girasoles alrededor
        { left: 30, top: 50, size: 80, stemHeight: 160 },
        { left: 70, top: 50, size: 80, stemHeight: 160 },
        { left: 40, top: 60, size: 70, stemHeight: 140 },
        { left: 60, top: 60, size: 70, stemHeight: 140 },
        { left: 25, top: 65, size: 60, stemHeight: 120 },
        { left: 75, top: 65, size: 60, stemHeight: 120 }
    ];
    
    // Crear cada girasol
    sunflowerPositions.forEach((position, index) => {
        createSunflower(bouquetContainer, carImages, position, index);
    });
    
    // Crear hojas adicionales
    createAdditionalLeaves(bouquetContainer);
}

function createSunflower(container, carImages, position, index) {
    // Crear contenedor del girasol
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${position.top}%`;
    sunflower.style.transform = `translate(-50%, -50%)`;
    sunflower.style.animationDelay = `${index * 0.3}s`;
    
    // Crear pétalos (12 pétalos alrededor)
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        const petalDistance = position.size * 0.6;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) translateX(${petalDistance}px)`;
        petal.style.animation = `petalRotate 20s linear infinite`;
        petal.style.animationDelay = `${i * 0.1}s`;
        
        sunflower.appendChild(petal);
    }
    
    // Crear centro del girasol con carrito
    const center = document.createElement('div');
    center.className = 'sunflower-center';
    center.style.width = `${position.size * 0.8}px`;
    center.style.height = `${position.size * 0.8}px`;
    
    // Agregar imagen del carrito
    const carImg = document.createElement('img');
    const carType = index % carImages.length;
    carImg.src = carImages[carType];
    carImg.alt = `Carrito Hot Wheels`;
    carImg.className = 'car-center-image';
    carImg.style.width = `${position.size * 0.6}px`;
    carImg.style.height = `${position.size * 0.3}px`;
    
    center.appendChild(carImg);
    sunflower.appendChild(center);
    
    // Crear tallo
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.height = `${position.stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 10 - 5}deg)`;
    
    // Crear hoja en el tallo
    const leaf = document.createElement('div');
    leaf.className = 'flower-leaf';
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${position.stemHeight * 0.3}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 40 - 20}deg)`;
    
    // Agregar elementos al DOM
    container.appendChild(stem);
    container.appendChild(leaf);
    container.appendChild(sunflower);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base
    const additionalLeaves = [
        { left: 35, bottom: 30 },
        { left: 45, bottom: 40 },
        { left: 55, bottom: 35 },
        { left: 65, bottom: 45 }
    ];
    
    additionalLeaves.forEach(leafPos => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${0.8 + Math.random() * 0.4})`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
