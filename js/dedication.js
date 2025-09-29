// Crear ramo de girasoles con tallos SVG orgánicos
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // Posiciones con tallos orgánicos
    const flowerPositions = [
        { left: 50, top: 300, delay: 0 },    // Centro
        { left: 42, top: 310, delay: 300 },  // Izquierda
        { left: 58, top: 310, delay: 600 },  // Derecha
        { left: 38, top: 320, delay: 900 },  // Izquierda exterior
        { left: 62, top: 320, delay: 1200 }, // Derecha exterior
        { left: 46, top: 330, delay: 1500 }, // Izquierda interior
        { left: 54, top: 330, delay: 1800 }  // Derecha interior
    ];
    
    // Crear efecto de puntos cayendo
    createFallingDots();
    
    // Crear cada flor con tallos orgánicos
    flowerPositions.forEach((position, index) => {
        setTimeout(() => {
            createOrganicFlower(bouquetContainer, carImages, position, index);
        }, position.delay);
    });
}

function createOrganicFlower(container, carImages, position, index) {
    // Crear tallo SVG orgánico
    createOrganicStem(container, position, index);
    
    // Crear FLOR
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${position.top}px`;
    sunflower.style.animationDelay = '1.2s';
    
    // Crear pétalos
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = (i / petalCount) * Math.PI * 2;
        
        petal.style.left = `50%`;
        petal.style.top = `50%`;
        petal.style.setProperty('--petal-angle', `${angle * 180 / Math.PI}deg`);
        petal.style.animationDelay = `${1.5 + (i * 0.05)}s`;
        
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
    
    // Crear hojas orgánicas
    createOrganicLeaves(container, position, index);
    
    // Agregar flor al DOM
    container.appendChild(sunflower);
}

function createOrganicStem(container, position, index) {
    const stemSvg = document.createElement('div');
    stemSvg.className = 'stem-svg';
    stemSvg.style.left = `${position.left}%`;
    stemSvg.style.animationDelay = '0s';
    
    // Crear rutas SVG orgánicas para el tallo
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "500");
    svg.setAttribute("viewBox", "0 0 100 500");
    
    const path = document.createElementNS(svgNS, "path");
    
    // Rutas orgánicas diferentes para cada tallo
    const organicPaths = [
        "M50,500 C45,400 55,300 50,200 C45,150 55,100 50,50", // Curva suave
        "M50,500 C40,420 60,350 50,250 C40,200 60,150 50,80", // Más ondulado
        "M50,500 C55,380 45,280 50,180 C55,130 45,90 50,40",  // Curva opuesta
        "M50,500 C35,450 65,380 50,300 C35,250 65,200 50,120", // Más ancho
        "M50,500 C60,420 40,320 50,220 C60,170 40,120 50,60", // Zigzag
        "M50,500 C45,430 55,360 50,280 C45,230 55,180 50,100", // Sinuoso
        "M50,500 C40,460 60,400 50,320 C40,280 60,240 50,160"  // Orgánico
    ];
    
    path.setAttribute("d", organicPaths[index % organicPaths.length]);
    path.setAttribute("class", "stem-path");
    path.setAttribute("fill", "none");
    
    svg.appendChild(path);
    stemSvg.appendChild(svg);
    container.appendChild(stemSvg);
}

function createOrganicLeaves(container, position, index) {
    // Crear 2-3 hojas orgánicas por tallo
    const leafCount = 2 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // Posiciones orgánicas para las hojas
        const leafPositions = [
            { left: -15, top: 350, rotation: -30 },
            { left: 10, top: 280, rotation: 25 },
            { left: -20, top: 200, rotation: -40 },
            { left: 15, top: 380, rotation: 35 },
            { left: -10, top: 250, rotation: -20 }
        ];
        
        const leafPos = leafPositions[(index * leafCount + i) % leafPositions.length];
        
        leaf.style.left = `calc(${position.left}% + ${leafPos.left}px)`;
        leaf.style.top = `${leafPos.top}px`;
        leaf.style.setProperty('--leaf-rotation', `${leafPos.rotation}deg`);
        leaf.style.animationDelay = `${0.8 + (i * 0.3)}s`;
        
        // Crear SVG para hoja orgánica
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "30");
        svg.setAttribute("height", "20");
        svg.setAttribute("viewBox", "0 0 30 20");
        
        const leafPath = document.createElementNS(svgNS, "path");
        leafPath.setAttribute("d", "M15,0 C20,5 25,10 15,20 C5,10 10,5 15,0");
        leafPath.setAttribute("class", "leaf-svg");
        
        svg.appendChild(leafPath);
        leaf.appendChild(svg);
        container.appendChild(leaf);
    }
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
