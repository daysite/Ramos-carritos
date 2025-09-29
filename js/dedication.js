// Crear ramo de girasoles con hojas pegadas al tallo
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // POSICIONES ORIGINALES CORRECTAS
    const flowerPositions = [
        // {left, stemHeight, delay} 
        { left: 50, stemHeight: 160, delay: 0 },    // Centro
        { left: 42, stemHeight: 150, delay: 400 },  // Izquierda cerca del centro
        { left: 58, stemHeight: 150, delay: 800 },  // Derecha cerca del centro
        { left: 38, stemHeight: 140, delay: 1200 }, // Izquierda
        { left: 62, stemHeight: 140, delay: 1600 }, // Derecha
        { left: 46, stemHeight: 130, delay: 2000 }, // Izquierda interior
        { left: 54, stemHeight: 130, delay: 2400 }  // Derecha interior
    ];
    
    // Crear efecto de puntos cayendo
    createFallingDots();
    
    // Crear cada flor CON ANIMACIÓN UNO POR UNO
    flowerPositions.forEach((position, index) => {
        setTimeout(() => {
            createFlowerWithGrowthAnimation(bouquetContainer, carImages, position, index);
        }, position.delay);
    });
}

function createFlowerWithGrowthAnimation(container, carImages, position, index) {
    // Calcular posición de la flor (final del tallo)
    const flowerTop = 500 - position.stemHeight;
    
    // 1. PRIMERO crear tallo con animación de crecimiento
    createGrowingStem(container, position, index);
    
    // 2. LUEGO crear hojas PEGADAS AL TALLO
    setTimeout(() => {
        createStemLeaves(container, position, index);
    }, 1000);
    
    // 3. FINALMENTE crear flor (después de las hojas)
    setTimeout(() => {
        createFlowerAtStemTop(container, carImages, position, index, flowerTop);
    }, 1500);
}

function createGrowingStem(container, position, index) {
    const stemSvg = document.createElement('div');
    stemSvg.className = 'stem-svg';
    stemSvg.style.left = `calc(${position.left}% - 50px)`;
    
    // Crear rutas SVG orgánicas para el tallo
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "500");
    svg.setAttribute("viewBox", "0 0 100 500");
    
    const path = document.createElementNS(svgNS, "path");
    
    // Rutas orgánicas que terminan en la posición correcta de la flor
    const stemHeight = position.stemHeight;
    const flowerY = 500 - stemHeight;
    
    // Rutas SVG que terminan en la posición Y correcta
    const organicPaths = [
        `M50,500 C45,${400 + (500 - stemHeight)/10} 55,${300 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C40,${420 + (500 - stemHeight)/10} 60,${350 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C55,${380 + (500 - stemHeight)/10} 45,${280 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C35,${450 + (500 - stemHeight)/10} 65,${380 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C60,${420 + (500 - stemHeight)/10} 40,${320 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C45,${430 + (500 - stemHeight)/10} 55,${360 + (500 - stemHeight)/5} 50,${flowerY}`,
        `M50,500 C40,${460 + (500 - stemHeight)/10} 60,${400 + (500 - stemHeight)/5} 50,${flowerY}`
    ];
    
    path.setAttribute("d", organicPaths[index % organicPaths.length]);
    path.setAttribute("class", "stem-path");
    path.setAttribute("fill", "none");
    
    svg.appendChild(path);
    stemSvg.appendChild(svg);
    container.appendChild(stemSvg);
}

function createStemLeaves(container, position, index) {
    // POSICIONES FIJAS Y EXACTAS PARA LAS HOJAS
    const leafConfigs = [
        // Para tallo centro (posición 50%)
        [
            { side: 'left', top: 370, leftOffset: -8, rotation: -40 },
            { side: 'right', top: 360, leftOffset: 8, rotation: 40 },
            { side: 'left', top: 420, leftOffset: -10, rotation: -30 },
            { side: 'right', top: 410, leftOffset: 10, rotation: 30 }
        ],
        // Para tallo izquierda (posición 42%)
        [
            { side: 'left', top: 365, leftOffset: -8, rotation: -35 },
            { side: 'right', top: 355, leftOffset: 8, rotation: 35 },
            { side: 'left', top: 415, leftOffset: -10, rotation: -25 },
            { side: 'right', top: 405, leftOffset: 10, rotation: 25 }
        ],
        // Para tallo derecha (posición 58%)
        [
            { side: 'left', top: 365, leftOffset: -8, rotation: -45 },
            { side: 'right', top: 355, leftOffset: 8, rotation: 45 },
            { side: 'left', top: 415, leftOffset: -10, rotation: -35 },
            { side: 'right', top: 405, leftOffset: 10, rotation: 35 }
        ],
        // Para tallo izquierda exterior (posición 38%)
        [
            { side: 'left', top: 360, leftOffset: -7, rotation: -30 },
            { side: 'right', top: 350, leftOffset: 7, rotation: 30 },
            { side: 'left', top: 410, leftOffset: -9, rotation: -20 },
            { side: 'right', top: 400, leftOffset: 9, rotation: 20 }
        ],
        // Para tallo derecha exterior (posición 62%)
        [
            { side: 'left', top: 360, leftOffset: -7, rotation: -50 },
            { side: 'right', top: 350, leftOffset: 7, rotation: 50 },
            { side: 'left', top: 410, leftOffset: -9, rotation: -40 },
            { side: 'right', top: 400, leftOffset: 9, rotation: 40 }
        ],
        // Para tallo izquierda interior (posición 46%)
        [
            { side: 'left', top: 370, leftOffset: -8, rotation: -35 },
            { side: 'right', top: 360, leftOffset: 8, rotation: 35 },
            { side: 'left', top: 420, leftOffset: -10, rotation: -25 },
            { side: 'right', top: 410, leftOffset: 10, rotation: 25 }
        ],
        // Para tallo derecha interior (posición 54%)
        [
            { side: 'left', top: 370, leftOffset: -8, rotation: -45 },
            { side: 'right', top: 360, leftOffset: 8, rotation: 45 },
            { side: 'left', top: 420, leftOffset: -10, rotation: -35 },
            { side: 'right', top: 410, leftOffset: 10, rotation: 35 }
        ]
    ];
    
    // Usar la configuración correspondiente al índice
    const config = leafConfigs[index] || leafConfigs[0];
    
    // Crear las 4 hojas para este tallo
    config.forEach((leafConfig, i) => {
        const leaf = document.createElement('div');
        leaf.className = `leaf leaf-${leafConfig.side}`;
        
        // Posición exacta pegada al tallo
        leaf.style.left = `calc(${position.left}% + ${leafConfig.leftOffset}px)`;
        leaf.style.top = `${leafConfig.top}px`;
        leaf.style.setProperty('--leaf-rotation', `${leafConfig.rotation}deg`);
        leaf.style.animationDelay = `${i * 0.15}s`;
        
        // Crear SVG de hoja
        createLeafSVG(leaf, leafConfig.side);
        container.appendChild(leaf);
    });
}

function createLeafSVG(leafElement, side) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "12");
    svg.setAttribute("viewBox", "0 0 16 12");
    
    const leafPath = document.createElementNS(svgNS, "path");
    
    // Forma de hoja simple y realista
    if (side === 'left') {
        leafPath.setAttribute("d", "M8,0 C11,3 13,6 8,12 C3,6 5,3 8,0");
    } else {
        leafPath.setAttribute("d", "M8,0 C5,3 3,6 8,12 C13,6 11,3 8,0");
    }
    
    leafPath.setAttribute("class", "leaf-svg");
    svg.appendChild(leafPath);
    leafElement.appendChild(svg);
}

function createFlowerAtStemTop(container, carImages, position, index, flowerTop) {
    // Crear FLOR en la PUNTA DEL TALLO
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${flowerTop}px`;
    sunflower.style.animationDelay = '0s';
    
    // Crear pétalos
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.setProperty('--petal-angle', `${angle * 180 / Math.PI}deg`);
        petal.style.animationDelay = `${i * 0.05}s`;
        
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
    
    // Agregar flor al DOM
    container.appendChild(sunflower);
}

function createFallingDots() {
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

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
