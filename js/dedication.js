// Crear ramo de girasoles con carritos Hot Wheels
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Crear tallos
    for (let i = 0; i < 9; i++) {
        const stem = document.createElement('div');
        stem.className = 'flower-stem';
        stem.style.left = `${15 + (i % 3) * 35}%`;
        stem.style.bottom = '0px';
        stem.style.height = `${180 + Math.random() * 40}px`;
        stem.style.transform = `rotate(${Math.random() * 15 - 7.5}deg)`;
        bouquetContainer.appendChild(stem);
    }
    
    // Crear "flores" (carritos)
    carImages.forEach((imgUrl, index) => {
        for (let i = 0; i < 3; i++) { // 3 flores por cada tipo de carrito
            createFlower(bouquetContainer, imgUrl, index, i);
        }
    });
    
    // Agregar follaje
    createFoliage(bouquetContainer);
}

function createFlower(container, imgUrl, carType, flowerIndex) {
    const flower = document.createElement('div');
    flower.className = 'hotwheel-flower';
    
    // Posicionar en forma de ramo
    const angle = (flowerIndex / 3) * Math.PI * 2;
    const radius = 70 + carType * 30;
    const left = 50 + Math.cos(angle) * radius;
    const top = 50 + Math.sin(angle) * radius;
    
    flower.style.left = `${left}%`;
    flower.style.top = `${top}%`;
    flower.style.zIndex = carType + 1;
    
    // Crear imagen del carrito
    const carImg = document.createElement('img');
    carImg.src = imgUrl;
    carImg.alt = `Carrito Hot Wheels ${carType + 1}`;
    carImg.className = 'car-image';
    
    // Crear pétalos alrededor del carrito
    const petals = document.createElement('div');
    petals.className = 'flower-petals';
    
    // Agregar elementos al DOM
    petals.appendChild(carImg);
    flower.appendChild(petals);
    container.appendChild(flower);
    
    // Animación flotante suave
    flower.style.animation = `flowerFloat ${4 + carType * 0.5}s ease-in-out infinite`;
    flower.style.animationDelay = `${(carType + flowerIndex) * 0.5}s`;
}

function createFoliage(container) {
    // Agregar hojas decorativas
    for (let i = 0; i < 8; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.left = `${20 + (i % 4) * 20}%`;
        leaf.style.bottom = `${15 + (Math.floor(i / 4)) * 25}%`;
        leaf.style.transform = `rotate(${Math.random() * 50 - 25}deg) scale(${0.6 + Math.random() * 0.4})`;
        container.appendChild(leaf);
    }
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
