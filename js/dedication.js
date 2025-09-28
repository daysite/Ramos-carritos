// Crear girasol con centro de carritos Hot Wheels
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Crear centro del girasol CON CARRITOS
    createSunflowerCenterWithCars(bouquetContainer, carImages);
    
    // Crear pétalos del girasol
    createSunflowerPetals(bouquetContainer);
    
    // Crear carritos orbitando en el exterior
    createOrbitingCars(bouquetContainer, carImages);
    
    // Crear tallo principal
    createMainStem(bouquetContainer);
    
    // Crear hojas
    createSunflowerLeaves(bouquetContainer);
}

function createSunflowerCenterWithCars(container, carImages) {
    const center = document.createElement('div');
    center.className = 'sunflower-center';
    
    // Agregar múltiples carritos en el centro (formando un patrón)
    const carsInCenter = 6;
    
    for (let i = 0; i < carsInCenter; i++) {
        const carImg = document.createElement('img');
        const carType = i % carImages.length;
        carImg.src = carImages[carType];
        carImg.alt = `Carrito Hot Wheels Centro`;
        carImg.className = 'center-car';
        
        // Posicionar carritos en forma circular dentro del centro
        const angle = (i / carsInCenter) * Math.PI * 2;
        const radius = 40;
        
        carImg.style.position = 'absolute';
        carImg.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
        carImg.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
        carImg.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`;
        carImg.style.animationDelay = `${i * 0.3}s`;
        
        center.appendChild(carImg);
    }
    
    container.appendChild(center);
}

function createSunflowerPetals(container) {
    const petalCount = 16;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'sunflower-petal';
        
        // Posicionar pétalos en círculo
        const angle = (i / petalCount) * Math.PI * 2;
        const radius = 90;
        const centerX = 50;
        const centerY = 50;
        
        petal.style.left = `${centerX + Math.cos(angle) * radius}%`;
        petal.style.top = `${centerY + Math.sin(angle) * radius}%`;
        petal.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
        petal.style.animationDelay = `${i * 0.2}s`;
        
        container.appendChild(petal);
    }
}

function createOrbitingCars(container, carImages) {
    const carCount = 12;
    
    for (let i = 0; i < carCount; i++) {
        const carFlower = document.createElement('div');
        carFlower.className = 'car-flower';
        
        // Asignar imagen de carrito
        const carType = i % carImages.length;
        
        const carImg = document.createElement('img');
        carImg.src = carImages[carType];
        carImg.alt = `Carrito Hot Wheels Orbital`;
        carImg.className = 'outer-car-image';
        carImg.style.setProperty('--car-rotation', `${(i / carCount) * 360}deg`);
        
        // Configurar animación orbital
        carFlower.style.animationDelay = `${i * (25 / carCount)}s`;
        
        carFlower.appendChild(carImg);
        container.appendChild(carFlower);
    }
}

function createMainStem(container) {
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    stem.style.left = '50%';
    stem.style.transform = 'translateX(-50%)';
    stem.style.height = '200px';
    container.appendChild(stem);
}

function createSunflowerLeaves(container) {
    const leafPositions = [
        { left: 45, rotation: -25, bottom: 80 },
        { left: 48, rotation: 30, bottom: 120 },
        { left: 52, rotation: -35, bottom: 90 },
        { left: 55, rotation: 20, bottom: 110 }
    ];
    
    leafPositions.forEach((pos, index) => {
        const leaf = document.createElement('div');
        leaf.className = 'sunflower-leaf';
        leaf.style.left = `${pos.left}%`;
        leaf.style.bottom = `${pos.bottom}px`;
        leaf.style.transform = `rotate(${pos.rotation}deg)`;
        leaf.style.animationDelay = `${index * 0.4}s`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
