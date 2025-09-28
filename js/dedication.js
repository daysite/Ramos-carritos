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
        { left: 50, top: 45, stemHeight: 160 },
        // Girasoles alrededor - MÁS PEQUEÑOS
        { left: 35, top: 40, stemHeight: 150 },
        { left: 65, top: 40, stemHeight: 150 },
        { left: 40, top: 55, stemHeight: 140 },
        { left: 60, top: 55, stemHeight: 140 },
        { left: 30, top: 50, stemHeight: 145 },
        { left: 70, top: 50, stemHeight: 145 }
    ];
    
    // Crear cada girasol CON SU TALLO CORRESPONDIENTE
    sunflowerPositions.forEach((position, index) => {
        createSunflowerWithStem(bouquetContainer, carImages, position, index);
    });
    
    // Crear hojas adicionales
    createAdditionalLeaves(bouquetContainer);
}

function createSunflowerWithStem(container, carImages, position, index) {
    // PRIMERO crear el tallo
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = `${position.left}%`;
    stem.style.height = `${position.stemHeight}px`;
    stem.style.transform = `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)`;
    
    // LUEGO crear la flor en la punta del tallo
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `calc(${position.top}% - ${position.stemHeight * 0.8}px)`;
    sunflower.style.transform = `translate(-50%, -50%)`;
    sunflower.style.animationDelay = `${index * 0.2}s`;
    
    // Crear pétalos (12 pétalos alrededor - FIJOS)
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        const petalDistance = 30; // Distancia más pequeña
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) translateX(${petalDistance}px)`;
        
        sunflower.appendChild(petal);
    }
    
    // Crear centro del girasol SOLO CON IMAGEN CIRCULAR
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
    
    // Crear hoja en el tallo
    const leaf = document.createElement('div');
    leaf.className = 'flower-leaf';
    leaf.style.left = `${position.left}%`;
    leaf.style.bottom = `${position.stemHeight * 0.5}px`;
    leaf.style.transform = `translateX(-50%) rotate(${Math.random() * 25 - 12}deg)`;
    
    // Agregar elementos al DOM EN ORDEN CORRECTO
    container.appendChild(stem);
    container.appendChild(leaf);
    container.appendChild(sunflower);
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base
    const additionalLeaves = [
        { left: 40, bottom: 20 },
        { left: 50, bottom: 25 },
        { left: 60, bottom: 22 },
        { left: 45, bottom: 30 },
        { left: 55, bottom: 28 }
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
