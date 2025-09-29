// Crear ramo de girasoles con animación de crecimiento uno por uno
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
    
    // 2. LUEGO crear hojas (después del tallo)
    setTimeout(() => {
        createLeavesBothSides(container, position, index);
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

function createLeavesBothSides(container, position, index) {
    // Crear 2 hojas en cada lado del tallo (4 hojas en total)
    const leafPairs = 2;
    
    for (let i = 0; i < leafPairs; i++) {
        // Hoja IZQUIERDA
        const leafLeft = document.createElement('div');
        leafLeft.className = 'leaf leaf-left';
        
        // Posición en el lado izquierdo del tallo
        const leafHeightLeft = 500 - (position.stemHeight * (0.4 + (i * 0.3)));
        const leafRotationLeft = -25 - (Math.random() * 15);
        
        leafLeft.style.left = `calc(${position.left}% - 20px)`;
        leafLeft.style.top = `${leafHeightLeft}px`;
        leafLeft.style.setProperty('--leaf-rotation', `${leafRotationLeft}deg`);
        leafLeft.style.animationDelay = `${i * 0.2}s`;
        
        // SVG para hoja izquierda
        createLeafSVG(leafLeft, 'left');
        container.appendChild(leafLeft);
        
        // Hoja DERECHA
        const leafRight = document.createElement('div');
        leafRight.className = 'leaf leaf-right';
        
        // Posición en el lado derecho del tallo
        const leafHeightRight = 500 - (position.stemHeight * (0.5 + (i * 0.25)));
        const leafRotationRight = 25 + (Math.random() * 15);
        
        leafRight.style.left = `calc(${position.left}% + 20px)`;
        leafRight.style.top = `${leafHeightRight}px`;
        leafRight.style.setProperty('--leaf-rotation', `${leafRotationRight}deg`);
        leafRight.style.animationDelay = `${i * 0.2 + 0.1}s`;
        
        // SVG para hoja derecha
        createLeafSVG(leafRight, 'right');
        container.appendChild(leafRight);
    }
}

function createLeafSVG(leafElement, side) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "15");
    svg.setAttribute("viewBox", "0 0 25 15");
    
    const leafPath = document.createElementNS(svgNS, "path");
    
    // Forma de hoja ligeramente diferente según el lado
    if (side === 'left') {
        leafPath.setAttribute("d", "M12,0 C16,4 18,7 12,15 C6,7 8,4 12,0");
    } else {
        leafPath.setAttribute("d", "M12,0 C8,4 6,7 12,15 C18,7 16,4 12,0");
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
    sunflower.style.animationDelay = '0s'; // Aparece inmediatamente después del delay
    
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
