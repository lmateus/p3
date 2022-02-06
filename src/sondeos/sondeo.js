import strata from './strata.js'
import SpriteText from 'three-spritetext'

export default (scene, coordX, log) => {
  var starCountRef = dbRt.ref('PROYECTOS/HSDJH343467/12089904614874')

  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var dataStrata = data[log]['layers']
    var stratas = Object.keys(dataStrata)
    var depth_strata = 948;

    var myText = new SpriteText(data[log]['NOMBRE_EXPLORACION'])
    myText.textHeight = 4
    myText.position.x = coordX
    myText.position.y = depth_strata + 5
    scene.add(myText)
    
    stratas.forEach(element => {
      var idLog = log
      var upStrata = dataStrata[element]['TRAMO_DESDE(m)']['VALUE']
      var downStrata = dataStrata[element]['TRAMO_HASTA(m)']['VALUE']
      var tickness = downStrata - upStrata
      var idStrata = dataStrata[element]['NOMBRE_ESTRATO']
      var colorSt = dataStrata[element]['USCS']
      strata(scene, coordX, depth_strata, 0, tickness, colorSt,idStrata,idLog);
      depth_strata = depth_strata - tickness;
      
    })
  })

  var scene = scene

}
