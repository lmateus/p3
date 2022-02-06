import * as THREE from 'three'
import {
  CSS2DRenderer,
  CSS2DObject
} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import SpriteText from 'three-spritetext'

export default (scene, xVar, yMax) => {
  var xVar = xVar
  var yMax = yMax

  const pointDown = new THREE.Vector3(xVar, 800, 0)
  const pointUp = new THREE.Vector3(xVar, yMax, 0)

  const pointsGrid = [pointDown, pointUp]
  const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsGrid)
  const materialGRID = new THREE.MeshBasicMaterial({ color: '#575757' })
  const lineGRID = new THREE.Line(geometryLine, materialGRID)

  var myText = new SpriteText(xVar + ' m')
  myText.textHeight = 8
  myText.position.x = xVar
  myText.position.y = 800 - 20

  var group = new THREE.Group()
  group.add(lineGRID)
  group.add(myText)
  scene.add(group)
}
