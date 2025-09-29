// Crear ramo de girasoles con tallos orgánicos y posición correcta
function createHotWheelsBouquet() {
    const bouquetContainer = document.getElementById('hotwheels-bouquet');
    
    // URLs de las imágenes de carritos
    const carImages = [
        'https://files.catbox.moe/plnshz.jpg',
        'https://files.catbox.moe/0e11p1.jpg', 
        'https://files.catbox.moe/9gecld.jpg'
    ];
    
    // POSICIONES ORIGINALES CORRECTAS (como en la versión anterior)
    const flowerPositions = [
        // {left, stemHeight, delay} - TALLOS MÁS PEQUEÑOS
        { left: 50, stemHeight: 160, delay: 0 },    // Centro
        { left: 42, stemHeight: 150, delay: 300 },  // Izquierda cerca del centro
        { left: 58, stemHeight: 150, delay: 600 },  // Derecha cerca del centro
        { left: 38, stemHeight: 140, delay: 900 },  // Izquierda
        { left: 62, stemHeight: 140, delay: 1200 }, // Derecha
        { left: 46, stemHeight: 130, delay: 1500 }, // Izquierda interior
        { left: 54, stemHeight: 130, delay: 1800 }  // Derecha interior
    ];
    
    // Crear efecto de puntos cayendo
    createFallingDots();
    
    // Crear cada flor CON POSICIÓN CORRECTA
    flowerPositions.forEach((position, index) => {
        setTimeout(() => {
            createFlowerWithOrganicStem(bouquetContainer, carImages, position, index);
        }, position.delay);
    });
    
    // Crear hojas adicionales con retraso
    setTimeout(() => {
        createAdditionalLeaves(bouquetContainer);
    }, 2100);
}

function createFlowerWithOrganicStem(container, carImages, position, index) {
    // Calcular posición de la flor (final del tallo) - MÉTODO ORIGINAL
    const flowerTop = 500 - position.stemHeight;
    
    // Crear tallo SVG orgánico
    createOrganicStem(container, position, index);
    
    // Crear FLOR en la PUNTA DEL TALLO - POSICIÓN CORRECTA
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = `${position.left}%`;
    sunflower.style.top = `${flowerTop}px`; // POSICIÓN ORIGINAL CORRECTA
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
    
    // Crear hojas orgánicas en posiciones realistas
    createOrganicLeaves(container, position, index);
    
    // Agregar flor al DOM
    container.appendChild(sunflower);
}

function createOrganicStem(container, position, index) {
    const stemSvg = document.createElement('div');
    stemSvg.className = 'stem-svg';
    stemSvg.style.left = `calc(${position.left}% - 50px)`; // Centrar el SVG
    stemSvg.style.animationDelay = '0s';
    
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

function createOrganicLeaves(container, position, index) {
    // Crear 2-3 hojas orgánicas por tallo en posiciones realistas
    const leafCount = 2 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // Posiciones de hojas basadas en la altura del tallo
        const leafHeight = 500 - (position.stemHeight * (0.3 + (i * 0.3)));
        const leafOffset = (Math.random() * 20 - 10); // Pequeño desplazamiento lateral
        const leafRotation = (Math.random() * 60 - 30); // Rotación natural
        
        leaf.style.left = `calc(${position.left}% + ${leafOffset}px)`;
        leaf.style.top = `${leafHeight}px`;
        leaf.style.setProperty('--leaf-rotation', `${leafRotation}deg`);
        leaf.style.animationDelay = `${0.8 + (i * 0.3)}s`;
        
        // Crear SVG para hoja orgánica
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "25");
        svg.setAttribute("height", "15");
        svg.setAttribute("viewBox", "0 0 25 15");
        
        const leafPath = document.createElementNS(svgNS, "path");
        leafPath.setAttribute("d", "M12,0 C16,4 20,8 12,15 C4,8 8,4 12,0");
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
        leaf.className = 'leaf';
        leaf.style.left = `${leafPos.left}%`;
        leaf.style.bottom = `${leafPos.bottom}px`;
        leaf.style.setProperty('--leaf-rotation', `${Math.random() * 30 - 15}deg`);
        leaf.style.animationDelay = `${index * 0.1}s`;
        leaf.style.animationDuration = '0.6s';
        
        // SVG para hoja adicional
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "12");
        svg.setAttribute("viewBox", "0 0 20 12");
        
        const leafPath = document.createElementNS(svgNS, "path");
        leafPath.setAttribute("d", "M10,0 C13,3 16,6 10,12 C4,6 7,3 10,0");
        leafPath.setAttribute("class", "leaf-svg");
        
        svg.appendChild(leafPath);
        leaf.appendChild(svg);
        container.appendChild(leaf);
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    createHotWheelsBouquet();
});
