import strata from './strata.js'

export default (scene, coordX, log) => {
  var starCountRef = dbRt.ref('PROYECTOS/HSDJH343467/12089904614874')

  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var dataStrata = data[log]['layers']
    var stratas = Object.keys(dataStrata)

    var depth_strata = 948;

    stratas.forEach(element => {
      var upStrata = dataStrata[element]['TRAMO_DESDE(m)']['VALUE']
      var downStrata = dataStrata[element]['TRAMO_HASTA(m)']['VALUE']
      var tickness = downStrata - upStrata

      var colorSt = dataStrata[element]['USCS']
      strata(scene, coordX, depth_strata, 0, tickness, colorSt);
      depth_strata = depth_strata - tickness;
      
    })
  })

  var scene = scene

}
