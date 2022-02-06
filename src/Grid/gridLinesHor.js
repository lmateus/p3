import * as THREE from 'three'
import {CSS2DRenderer,  CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import SpriteText from 'three-spritetext'

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

  var myText = new SpriteText(yMax + ' m')
  myText.textHeight = 8
  myText.position.x = -10
  myText.position.y = yMax

  var group = new THREE.Group()
  group.add(lineGRID)
  group.add(myText)
  scene.add(group)
  

  
}
