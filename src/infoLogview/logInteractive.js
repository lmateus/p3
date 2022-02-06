import * as THREE from 'three'

export default (scene, camera) => {
  const raycaster = new THREE.Raycaster()
  const clickMouse = new THREE.Vector2()
  const moveMouse = new THREE.Vector2()

  window.addEventListener('click', event => {
    clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1
    clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(clickMouse, camera)
    const found = raycaster.intersectObjects(scene.children)

    if (found.length > 0 && found[0].object.userData.draggable) {
      var draggable = found[0].object
      
      console.log(
        `El sondeo es ${draggable.userData.nameLog} y el estrato ${draggable.userData.name}`
      )


    }
  })
}
