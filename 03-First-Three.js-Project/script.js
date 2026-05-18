import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color: 0xFF0000})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
    height: 800,
    width: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.height / sizes.width)
camera.position.z = 5
scene.add(camera)

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.height, sizes.width)

renderer.render(scene, camera)