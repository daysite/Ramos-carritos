// Crear ramo de girasoles con carritos Hot Wheels
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones para el ramo (agrupadas en el centro)
    const positions = [
        { left: 35, top: 30 },  // Esquina superior izquierda
        { left: 50, top: 20 },  // Centro superior
        { left: 65, top: 30 },  // Esquina superior derecha
        { left: 30, top: 50 },  // Centro izquierdo
        { left: 50, top: 45 },  // Centro del ramo
        { left: 70, top: 50 },  // Centro derecho
        { left: 40, top: 65 },  // Esquina inferior izquierda
        { left: 50, top: 70 },  // Centro inferior
        { left: 60, top: 65 }   // Esquina inferior derecha
    ];
    
    // Crear tallos
    positions.forEach((pos, index) => {
        const stem = document.createElement('div');
        stem.className = 'flower-stem';
        stem.style.left = `${pos.left}%`;
        stem.style.height = `${150 + (pos.top / 100) * 100}px`;
        stem.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        bouquetContainer.appendChild(stem);
    });
    
    // Crear flores con carritos
    positions.forEach((pos, index) => {
        const carType = index % carImages.length; // Rotar entre las 3 imágenes
        createFlower(bouquetContainer, carImages[carType], pos, index);
    });
    
    // Agregar follaje
    createFoliage(bouquetContainer);
}

function createFlower(container, imgUrl, position, index) {
    const flower = document.createElement('div');
    flower.className = 'hotwheel-flower';
    
    flower.style.left = `${position.left}%`;
    flower.style.top = `${position.top}%`;
    flower.style.zIndex = index + 1;
    flower.style.animationDelay = `${index * 0.3}s`;
    
    // Crear pétalos
    const petals = document.createElement('div');
    petals.className = 'flower-petals';
    
    // Crear 6 pétalos alrededor
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petals.appendChild(petal);
    }
    
    // Crear imagen del carrito (centro de los pétalos)
    const carImg = document.createElement('img');
    carImg.src = imgUrl;
    carImg.alt = `Carrito Hot Wheels`;
    carImg.className = 'car-image';
    
    // Agregar elementos al DOM
    petals.appendChild(carImg);
    flower.appendChild(petals);
    container.appendChild(flower);
}

function createFoliage(container) {
    // Agregar hojas decorativas en la base
    const leafPositions = [
        { left: 25, bottom: 10 }, { left: 35, bottom: 15 }, 
        { left: 45, bottom: 8 }, { left: 55, bottom: 12 },
        { left: 65, bottom: 9 }, { left: 75, bottom: 14 }
    ];
    
    leafPositions.forEach(pos => {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${pos.left}%`;
        leaf.style.bottom = `${pos.bottom}%`;
        leaf.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${0.7 + Math.random() * 0.3})`;
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
