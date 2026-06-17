import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

const aspectRatio = sizes.width / sizes.height

// Scene
const scene = new THREE.Scene()



// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
scene.add(mesh)

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)w
const orthoCam = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1)
orthoCam.position.x = 2
orthoCam.position.y = 2
orthoCam.position.z = 2
// Control
const control = new OrbitControls(orthoCam, canvas);
control.enableDamping = true
scene.add(orthoCam)

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
    control.update()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Render
    renderer.render(scene, orthoCam)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()