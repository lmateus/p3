import * as THREE from 'three'


export default (scene, xVar, yMax) => {
  var xVar = xVar
  var yMax = yMax

  const pointDown = new THREE.Vector3(xVar, 800, 0)
  const pointUp = new THREE.Vector3(xVar, yMax, 0)

  const pointsGrid = [pointDown, pointUp]
  const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsGrid)
  const materialGRID = new THREE.MeshBasicMaterial({ color: '#575757' })
  const lineGRID = new THREE.Line(geometryLine, materialGRID)

  var el = document.createElement('div')
  el.innerHTML = "<h1>Hola elemento</h1>"

  
  scene.add(lineGRID)

  // Agregamos el texto de la grilla

}
