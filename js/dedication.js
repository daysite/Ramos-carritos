// Crear ramo de girasoles con centros de carritos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones para los girasoles (formando un ramo compacto)
    const sunflowerPositions = [
        // Girasol principal (centro)
        { left: 50, top: 45 },
        // Girasoles alrededor - TODOS DEL MISMO TAMAÑO
        { left: 35, top: 40 },
        { left: 65, top: 40 },
        { left: 40, top: 55 },
        { left: 60, top: 55 },
        { left: 30, top: 50 },
        { left: 70, top: 50 }
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
    sunflower.style.animationDelay = `${index * 0.2}s`;
    
    // Crear pétalos (12 pétalos alrededor - FIJOS)
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        const petalDistance = 42; // Distancia fija para todos
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) translateX(${petalDistance}px)`;
        // SIN ANIMACIÓN - PÉTALOS FIJOS
        
        sunflower.appendChild(petal);
    }
    
    // Crear centro del girasol con carrito
    const center = document.createElement('div');
    center.className = 'sunflower-center';
    
    // Agregar imagen del carrito EN FORMA CIRCULAR
    const carImg = document.createElement('img');
    const carType = index % carImages.length;
    carImg.src = carImages[carType];
    carImg.alt = `Carrito Hot Wheels`;
    carImg.className = 'car-center-image';
    
    center.appendChild(carImg);
    sunflower.appendChild(center);
    
    // Crear tallo (altura similar para todos)
    const stemHeight = 150 + Math.random() * 30;
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.height = `${stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 8 - 4}deg)`;
    
    // Crear hoja en el tallo
    const leaf = document.createElement('div');
    leaf.className = 'flower-leaf';
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${stemHeight * 0.4}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 30 - 15}deg)`;
    
    // Agregar elementos al DOM
    container.appendChild(stem);
    container.appendChild(leaf);
    container.appendChild(sunflower);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base
    const additionalLeaves = [
        { left: 40, bottom: 25 },
        { left: 50, bottom: 30 },
        { left: 60, bottom: 28 },
        { left: 45, bottom: 35 },
        { left: 55, bottom: 32 }
    ];
    
    additionalLeaves.forEach(leafPos => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.transform = `rotate(${Math.random() * 50 - 25}deg) scale(${0.7 + Math.random() * 0.3})`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
