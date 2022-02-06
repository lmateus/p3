import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import topogafia from './topo/topogafia.js'
import allSondeos from './sondeos/allSondeos.js'
import gridAll from './Grid/gridAll.js'
import {CSS2DRenderer,  CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import logInteractive from './infoLogview/logInteractive.js';
import './main.css'


// Creamos una escena y un bg definido
var scene = new THREE.Scene()
//scene.background = new THREE.Color('rgb(70,70,70)')
//scene.background = new THREE.Color('rgb(251,251,251)');
// Iniciamos camera con valores de referencia para que sea global
var camera = new THREE.OrthographicCamera(0, 1, 1, 0, 1, 10000)
// Creamos la camara
// los valores de camera son (left,right,top, botton, near, far) y estan relacionados con las dimensiones del perfil
let rigth = 1500
let top = 1500
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
// Agregamos axesHelper
const axesHelper = new THREE.AxesHelper(50)
scene.add(axesHelper)

//TEST SPACE
/*
let divString = '<div>' +
'<h1>This is an H1 Element.</h1>' +
'</div>';

function createCSS2DObject(s) {
  // convert the string to dome elements
  var wrapper = document.createElement('div');
  wrapper.innerHTML = s;
  var div = wrapper.firstChild;

  // set some values on the div to style it, standard CSS
  div.style.width = '10px';
  div.style.height = '10px';
  div.style.opacity = 1;
  div.style['will-change'] = 'all'
  div.style.transition = 'top 0.2s linear'
  div.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();

  // create a CSS3Dobject and return it.
  var object = new CSS2DObject(div);
  object.position.x = 0
  object.position.y = 1800
  return object;
}

const cssElement = createCSS2DObject(divString);
scene.add(cssElement); */


// FUNCIONES
topogafia(scene)
allSondeos(scene)
gridAll(scene)
logInteractive(scene,camera)
animate()


