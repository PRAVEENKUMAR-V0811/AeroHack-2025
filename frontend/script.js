async function solve() {
  const state = document.getElementById("state").value;
  const res = await fetch("http://127.0.0.1:5000/solve", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ state })
  });
  const data = await res.json();
  document.getElementById("solution").textContent = "Solution: " + data.solution;
}

// Simple static 3D cube display using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 600);
document.getElementById("cube-container").appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right - Red
  new THREE.MeshBasicMaterial({ color: 0xffa500 }), // Left - Orange
  new THREE.MeshBasicMaterial({ color: 0xffffff }), // Top - White
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom - Yellow
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Front - Blue
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })  // Back - Green
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
