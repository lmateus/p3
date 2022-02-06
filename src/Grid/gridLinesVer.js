import * as THREE from 'three'
import {CSS2DRenderer,  CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'


export default (scene, xVar, yMax) => {
  var xVar = xVar
  var yMax = yMax

  const pointDown = new THREE.Vector3(xVar, 800, 0)
  const pointUp = new THREE.Vector3(xVar, yMax, 0)

  const pointsGrid = [pointDown, pointUp]
  const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsGrid)
  const materialGRID = new THREE.MeshBasicMaterial({ color: '#575757' })
  const lineGRID = new THREE.Line(geometryLine, materialGRID)

  scene.add(lineGRID)

  // Agregamos el texto de la grilla
  var earthDivHor = document.createElement('div')
  earthDivHor.className = 'label'
  earthDivHor.textContent = `${xVar } m`
  //earthDivHor.style.marginTop = '-1em'
  const earthLabel = new CSS2DObject(earthDivHor)
  earthLabel.position.set(xVar,yMax, 0)
  lineGRID.add(earthLabel)

}
