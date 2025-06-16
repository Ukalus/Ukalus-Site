import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function createRubixCube(dimensions){
    let rubixCube = [];
    for(let x = 0; x < dimensions; x++){
        for(let y = 0; y < dimensions; y++){
            for(let z = 0; z < dimensions; z++){
                rubixCube.push(new Cubie(0xffffff,[x,y,z]))
            }
        }
    }
    return rubixCube
}

function addPlaneToCube(cube,x,y,z,material, rotation){
    const faceGeometry = new THREE.PlaneGeometry(1,1);
    const plane = new THREE.Mesh(faceGeometry, material);
    if(rotation) {
        plane.rotation[rotation.axis] = rotation.degree;
    }
    plane.position.set(x,y,z)
    cube.add(plane)
}

function rotateCubeSide(axis, layer, degree){
    for(let i = 0; i < rubixParent.children.length; i++){
        if(rubixParent.children[i].position[axis] === layer){
            let rotationMatrix = new THREE.Matrix4()
            if(axis === "x"){
                rotationMatrix.makeRotationX(degree);
            }
            else if(axis === "y"){
                rotationMatrix.makeRotationY(degree);
            }
            else{
                rotationMatrix.makeRotationZ(degree);
            }          
            rubixParent.children[i].applyMatrix4(rotationMatrix);
            rubixParent.children[i].position.round();
        }
    }
}

function animateCube(controls, renderer, scene,camera){
    requestAnimationFrame(() => animateCube(controls, renderer, scene, camera));
    
    controls.update()
    renderer.render(scene, camera);
    
}

class Cubie{
    constructor(newColor, newPosition){
        this.color = newColor;
        this.position = newPosition;
    }


}

const colors = {
    red : new THREE.MeshBasicMaterial({color: 0xff0000}),
    green : new THREE.MeshBasicMaterial({color: 0x00ff00}),
    yellow : new THREE.MeshBasicMaterial({color: 0xffff00}),
    orange : new THREE.MeshBasicMaterial({color: 0xFFA500}),
    white : new THREE.MeshBasicMaterial({color: 0xffffff}),
    blue : new THREE.MeshBasicMaterial({color: 0x0000FF}),
}
export function initCube(canvas){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(5,0,0)
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const rubixParent = new THREE.Object3D();
    let rubixCube = createRubixCube(3);
    
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
        circle.position.y = -2;
    
        // Add to the scene
        scene.add(circle);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.5));

    for(let cubie of rubixCube){

        
        const cube = new THREE.Object3D();
    
        cube.position.set(cubie.position[0] - 1,cubie.position[1] -1,cubie.position[2] -1)

        if(cubie.position[2] === 2){
            addPlaneToCube(cube, 0,0,0.5,colors.red)
        }
        if(cubie.position[2] === 0){
            addPlaneToCube(cube,0,0,-0.5,colors.green,{axis: "x", degree: Math.PI / 1})
        }
        if(cubie.position[1] === 2){
            addPlaneToCube(cube,0,0.5,0,colors.yellow,{axis: "x", degree: Math.PI / -2})          
        }
        if(cubie.position[1] === 0){
            addPlaneToCube(cube,0,-0.5,0,colors.orange,{axis: "x", degree: Math.PI / 2})
        }
        if(cubie.position[0] === 2){
            addPlaneToCube(cube,0.5,0,0,colors.white,{axis: "y", degree: Math.PI / 2})
        }
        if(cubie.position[0] === 0){
            addPlaneToCube(cube,-0.5,0,0,colors.blue,{axis: "y", degree: Math.PI / -2})
        }

        
        rubixParent.add(cube)
    }

    scene.add(rubixParent);

    document.onkeydown = function(e){
            if(e.key === "w"){
                rotateCubeSide("x", -1, Math.PI / 2);
            }
            else if(e.key === "e"){
                rotateCubeSide("x", 0, Math.PI / 2);    
            }
            else if(e.key === "r"){
                rotateCubeSide("x", 1, Math.PI / 2);
            }
            else if(e.key === "s"){
                rotateCubeSide("y", -1, Math.PI / 2);
            }
            else if(e.key === "d"){
                rotateCubeSide("y", 0, Math.PI / 2);
            }
            else if(e.key === "f"){
                rotateCubeSide("y", 1, Math.PI / 2);
            }
            else if(e.key === "x"){
                rotateCubeSide("z", -1, Math.PI / 2);
            }
            else if(e.key === "c"){
                rotateCubeSide("z", 0, Math.PI / 2);
            }
            else if(e.key === "v"){
                rotateCubeSide("z", 1, Math.PI / 2);
            }
        }

    camera.position.z = 5
    rubixParent.rotation.x = Math.PI / 2;
    rubixParent.rotation.y = Math.PI / 2;
    rubixParent.rotation.z = Math.PI / 0.6;

    const controls = new OrbitControls( camera, renderer.domElement);
    let clock = new THREE.Clock()
    let cubies = [];
    animateCube(controls, renderer,scene,camera);
}


