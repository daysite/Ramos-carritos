// Crear ramo de girasoles con tallos realistas
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones con tallos curvados
    const flowerPositions = [
        // {left, baseHeight, curveHeight, curveRotation, delay}
        { left: 50, baseHeight: 80, curveHeight: 90, curveRotation: -5, delay: 0 },    // Centro - ligera curva
        { left: 42, baseHeight: 70, curveHeight: 85, curveRotation: 8, delay: 300 },   // Izquierda - curva derecha
        { left: 58, baseHeight: 70, curveHeight: 85, curveRotation: -10, delay: 600 }, // Derecha - curva izquierda
        { left: 38, baseHeight: 60, curveHeight: 75, curveRotation: 15, delay: 900 },  // Izquierda exterior - más curva
        { left: 62, baseHeight: 60, curveHeight: 75, curveRotation: -12, delay: 1200 }, // Derecha exterior - más curva
        { left: 46, baseHeight: 50, curveHeight: 65, curveRotation: 5, delay: 1500 },  // Izquierda interior
        { left: 54, baseHeight: 50, curveHeight: 65, curveRotation: -8, delay: 1800 }  // Derecha interior
    ];
    
    // Crear efecto de puntos cayendo en TODA LA PANTALLA
    createFallingDots();
    
    // Crear cada flor CON TALLOS CURVADOS
    flowerPositions.forEach((position, index) => {
        setTimeout(() => {
            createFlowerWithRealisticStem(bouquetContainer, carImages, position, index);
        }, position.delay);
    });
    
    // Crear hojas adicionales con retraso
    setTimeout(() => {
        createAdditionalLeaves(bouquetContainer);
    }, 2100);
}

function createFlowerWithRealisticStem(container, carImages, position, index) {
    // Calcular posición de la flor
    const totalHeight = position.baseHeight + position.curveHeight;
    const flowerTop = 500 - totalHeight;
    
    // Crear BASE DEL TALLO (parte recta inferior)
    const baseStem = document.createElement('div');
    baseStem.className = 'flower-stem';
    baseStem.style.left = `${position.left}%`;
    baseStem.style.setProperty('--final-height', `${position.baseHeight}px`);
    baseStem.style.animationDelay = '0s';
    
    // Crear CURVA DEL TALLO (parte superior curvada)
    const curveStem = document.createElement('div');
    curveStem.className = 'stem-curve';
    curveStem.style.left = `${position.left}%`;
    curveStem.style.bottom = `${position.baseHeight}px`;
    curveStem.style.setProperty('--curve-height', `${position.curveHeight}px`);
    curveStem.style.setProperty('--curve-rotation', `${position.curveRotation}deg`);
    curveStem.style.animationDelay = '0.5s'; // Crece después de la base
    
    // Crear FLOR en la punta de la curva
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    
    // Calcular posición final de la flor considerando la curva
    const curveRadians = position.curveRotation * Math.PI / 180;
    const flowerOffsetX = Math.sin(curveRadians) * position.curveHeight;
    const flowerOffsetY = Math.cos(curveRadians) * position.curveHeight;
    
    sunflower.style.left = `calc(${position.left}% + ${flowerOffsetX}px)`;
    sunflower.style.top = `${500 - position.baseHeight - flowerOffsetY}px`;
    sunflower.style.animationDelay = '1.5s';
    
    // Crear pétalos
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.setProperty('--petal-angle', `${angle * 180 / Math.PI}deg`);
        petal.style.animationDelay = `${1.8 + (i * 0.05)}s`;
        
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
    
    // Crear hojas en diferentes posiciones del tallo
    createStemLeaves(container, position, totalHeight);
    
    // Agregar elementos al DOM
    container.appendChild(baseStem);
    container.appendChild(curveStem);
    container.appendChild(sunflower);
}

function createStemLeaves(container, position, totalHeight) {
    // Crear 2-3 hojas en diferentes posiciones del tallo
    const leafCount = 2 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        
        // Posicionar hojas en diferentes alturas del tallo
        const leafHeight = position.baseHeight * (0.3 + (i * 0.3));
        const leafRotation = position.curveRotation * 0.7 + (Math.random() * 30 - 15);
        
        leaf.style.left = `${position.left}%`;
        leaf.style.bottom = `${leafHeight}px`;
        leaf.style.setProperty('--leaf-rotation', `${leafRotation}deg`);
        leaf.style.animationDelay = `${0.8 + (i * 0.2)}s`;
        
        container.appendChild(leaf);
    }
}

function createFallingDots() {
    // Crear múltiples puntos cayendo en TODA LA PANTALLA
    const dotCount = 30;
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'falling-dot';
        
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDelay = `${Math.random() * 6}s`;
        dot.style.animationDuration = `${3 + Math.random() * 4}s`;
        
        const size = 2 + Math.random() * 4;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.opacity = `${0.3 + Math.random() * 0.5}`;
        
        document.body.appendChild(dot);
    }
}

function createAdditionalLeaves(container) {
    // Agregar hojas adicionales en la base
    const additionalLeaves = [
        { left: 44, bottom: 15 },
        { left: 50, bottom: 20 },
        { left: 56, bottom: 18 },
        { left: 48, bottom: 25 },
        { left: 52, bottom: 22 }
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
