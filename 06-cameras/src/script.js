import * as THREE from 'three'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 2

scene.add(camera)

// Mouse
window.addEventListener('mousemove',(event)=>{
    const midX = sizes.width / 2
    const midY = sizes.height / 2
    const tempX = event.clientX - midX
    const tempY = event.clientY - midY
    camera.position.x = -clamp(tempX, - midX, midY)*0.01 
    camera.position.y = -clamp(tempY, - midY, midY)*0.01
    camera.lookAt(mesh.position)
})

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()