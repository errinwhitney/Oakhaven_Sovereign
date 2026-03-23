const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('arena'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;

// PBR MATERIAL LOADER
const texLoader = new THREE.TextureLoader();
const pbrMap = texLoader.load('./assets/textures/texture_pbr.png'); 

const board = new THREE.Mesh(
    new THREE.BoxGeometry(70, 2, 45),
    new THREE.MeshStandardMaterial({ map: pbrMap, roughness: 0.1, metalness: 0.4 })
);
board.position.y = -6;
scene.add(board);

// LIGHTING (The Gaslamp Glow)
const lamp = new THREE.PointLight(0xc5a059, 3, 150);
lamp.position.set(0, 30, 10);
scene.add(lamp);

camera.position.set(0, 35, 55);
camera.lookAt(0, -5, 0);

function animate() { requestAnimationFrame(animate); renderer.render(scene, camera); }
animate();
