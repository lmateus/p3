import * as THREE from 'three'
import {CSS2DRenderer,  CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'

export default (scene, xMax, yMax) => {
  var xMax = xMax
  var yMax = yMax

  const pointLeft = new THREE.Vector3(0, yMax, 0)
  const pointRight = new THREE.Vector3(xMax, yMax, 0)

  const pointsGrid = [pointLeft, pointRight]
  const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsGrid)
  const materialGRID = new THREE.MeshBasicMaterial({ color: '#575757' })
  const lineGRID = new THREE.Line(geometryLine, materialGRID)
  scene.add(lineGRID)
  //Agregamos un texto como prueba

  const earthDiv = document.createElement('div')
  earthDiv.className = 'label'
  earthDiv.textContent = 'Hola prueba'
  earthDiv.style.marginTop = '-1em'
  const earthLabel = new CSS2DObject(earthDiv)
  earthLabel.position.set(5,1000, 0)
  lineGRID.add(earthLabel)

  const labelRenderer = new CSS2DRenderer()
  //labelRenderer.setSize(window.innerWidth, window.innerHeight)
  //labelRenderer.domElement.style.position = 'absolute'
  //labelRenderer.domElement.style.top = '0px'
  document.body.appendChild(labelRenderer.domElement)

  
}
