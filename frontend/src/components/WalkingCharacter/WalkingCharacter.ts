import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function createScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.set(-2, 1, 2);
  camera.lookAt(0, 0.2, 0);

    const radius = 7;
    const segments = 24;
    const geometry = new THREE.CircleGeometry(radius, segments);

    // Create a material — for example, a simple basic material
    const material = new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide });

    // Create the mesh
    const circle = new THREE.Mesh(geometry, material);

    // Rotate the circle so it’s flat on the XZ plane (default is facing +Z)
    circle.rotation.x = - Math.PI / 2;

    // Position it if you want, e.g., at y=0
    circle.position.y = -1;

    // Add to the scene
    scene.add(circle);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.5));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  let mixer: THREE.AnimationMixer | undefined;

  const loader = new GLTFLoader();
  loader.load('./models/running.glb', (gltf) => {
    const model = gltf.scene;

    // Optional: Center the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    scene.add(model);

    if (gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    }
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  });
}
