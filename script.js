// ===================== THREE.JS SETUP =====================
let scene, camera, renderer, particles = [];

function initThreeJS() {
    const canvas = document.getElementById('canvas3d');
    
    // Scene
    scene = new THREE.Scene();
    scene.background = null;
    
    // Camera
    camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 5;
    
    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    // Create 3D objects
    create3DObjects();
    
    // Handle resize
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    animate();
}

function create3DObjects() {
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x00d4ff, 0.4);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00d4ff, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xff00ff, 0.8, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);
    
    // Central rotating cube
    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00d4ff,
        wireframe: false,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.2,
        metalness: 0.7,
        roughness: 0.2
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    scene.add(cube);
    
    // Rotating sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xff00ff,
        emissive: 0xff00ff,
        emissiveIntensity: 0.2,
        metalness: 0.8,
        roughness: 0.1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 3;
    sphere.position.y = 1.5;
    scene.add(sphere);
    
    // Rotating torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 32, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff88,
        emissive: 0x00ff88,
        emissiveIntensity: 0.3,
        metalness: 0.6,
        roughness: 0.3
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = -3;
    torus.position.y = -1.5;
    scene.add(torus);
    
    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(1);
    const octahedronMaterial = new THREE.MeshStandardMaterial({
        color: 0xff6b00,
        emissive: 0xff6b00,
        emissiveIntensity: 0.2,
        metalness: 0.7,
        roughness: 0.2
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.y = 2;
    scene.add(octahedron);
    
    // Particle system
    createParticleSystem();
}

function createParticleSystem() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
        
        velocities[i] = (Math.random() - 0.5) * 0.1;
        velocities[i + 1] = (Math.random() - 0.5) * 0.1;
        velocities[i + 2] = (Math.random() - 0.5) * 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0x00d4ff,
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    // Store for animation
    particles.velocities = velocities;
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    scene.children.forEach((object) => {
        if (object.geometry instanceof THREE.BoxGeometry ||
            object.geometry instanceof THREE.SphereGeometry ||
            object.geometry instanceof THREE.TorusGeometry ||
            object.geometry instanceof THREE.OctahedronGeometry) {
            object.rotation.x += 0.003;
            object.rotation.y += 0.005;
            object.rotation.z += 0.002;
            
            // Floating animation
            object.position.y += Math.sin(Date.now() * 0.001 + object.position.x) * 0.002;
        }
        
        // Update particles
        if (object.geometry instanceof THREE.BufferGeometry && 
            object instanceof THREE.Points) {
            const positions = object.geometry.attributes.position.array;
            
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += object.velocities[i];
                positions[i + 1] += object.velocities[i + 1];
                positions[i + 2] += object.velocities[i + 2];
                
                // Wrap around
                if (positions[i] > 10) positions[i] = -10;
                if (positions[i] < -10) positions[i] = 10;
                if (positions[i + 1] > 10) positions[i + 1] = -10;
                if (positions[i + 1] < -10) positions[i + 1] = 10;
                if (positions[i + 2] > 10) positions[i + 2] = -10;
                if (positions[i + 2] < -10) positions[i + 2] = 10;
            }
            
            object.geometry.attributes.position.needsUpdate = true;
        }
    });
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    const canvas = document.getElementById('canvas3d');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// ===================== SCROLL ANIMATIONS =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements on load
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.card-3d, .feature-box, .grid-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ===================== MOUSE FOLLOW EFFECT =====================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    
    // Tilt effect on hover
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        
        const distX = (e.clientX - cardX) / 10;
        const distY = (e.clientY - cardY) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${distY}deg) rotateY(${distX}deg)`;
    });
});

// Reset card tilt on mouse leave
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

// ===================== SMOOTH SCROLL FOR LINKS =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================== PARALLAX EFFECT =====================
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// ===================== FORM SUBMISSION =====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Create success feedback
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00d4ff)';
        
        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// ===================== PAGE LOAD ANIMATION =====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================== KEYBOARD SHORTCUTS =====================
document.addEventListener('keydown', (e) => {
    // Press 'L' to toggle lighting
    if (e.key === 'l' || e.key === 'L') {
        scene.children.forEach(obj => {
            if (obj instanceof THREE.Light) {
                obj.visible = !obj.visible;
            }
        });
    }
});

// ===================== CONTINUOUS BACKGROUND ANIMATION =====================
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(-45deg, 
            #0a0e27 0%, 
            #1a0033 25%, 
            #0a0e27 50%, 
            #1a0033 75%, 
            #0a0e27 100%);
        background-size: 400% 400%;
        animation: gradientShift 15s ease infinite;
        z-index: -1;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// ===================== CUSTOM CURSOR =====================
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    * {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="%2300d4ff" opacity="0.8"/><circle cx="16" cy="16" r="6" fill="none" stroke="%2300d4ff" stroke-width="1"/></svg>') 16 16, auto;
    }
    
    button, a, [role="button"] {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="%23ff00ff" opacity="0.8"/><circle cx="16" cy="16" r="8" fill="none" stroke="%23ff00ff" stroke-width="2"/></svg>') 16 16, pointer;
    }
`;
document.head.appendChild(cursorStyle);

// ===================== PERFORMANCE OPTIMIZATION =====================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
});

// Reduce particle count on low-end devices
if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    console.log('Low-end device detected - reducing effects');
}

// ===================== INITIALIZATION =====================
console.log('🚀 3D Web Experience loaded successfully!');
console.log('💡 Tip: Press "L" to toggle lights');