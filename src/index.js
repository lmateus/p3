import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import topogafia from './topo/topogafia.js'
import allSondeos from './sondeos/allSondeos.js'
import gridAll from './Grid/gridAll.js'
import {CSS2DRenderer,  CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import './main.css'

// Creamos una escena y un bg definido
var scene = new THREE.Scene()
//scene.background = new THREE.Color('rgb(70,70,70)')
//scene.background = new THREE.Color('rgb(251,251,251)');
// Iniciamos camera con valores de referencia para que sea global
var camera = new THREE.OrthographicCamera(0, 1, 1, 0, 1, 10000)
// Creamos la camara
// los valores de camera son (left,right,top, botton, near, far) y estan relacionados con las dimensiones del perfil
let rigth = 1800
let top = 1800
var scaleFactor = 1
var aspectRatio = (scaleFactor * window.innerWidth) / window.innerHeight

camera = new THREE.OrthographicCamera(0, rigth, top / aspectRatio, 0, 0, 10000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.z = 1500
camera.position.y = 0

camera.lookAt(scene.position)
// Agregamos el zoom y el pan
var controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate = false
controls.enablePan = true

// CSS2D renderer
const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(labelRenderer.domElement)

// Animamos la escena dinamicamente
var animate = function () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera);
}
// Funciones
const axesHelper = new THREE.AxesHelper(50)
scene.add(axesHelper)


animate()
topogafia(scene)
allSondeos(scene)
gridAll(scene)


