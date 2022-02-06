import * as THREE from 'three'
// Creamos un sondeo con una geometria tipo cilindro
// Traemos informacion de la base de datos
export default (scene,coord_x,coord_y,coord_z,depthLog,colorStrata,idStrata,idLog) => {
    // Localizacion del sondeo
    var coord_x = coord_x;
    var coord_y = coord_y;
    var coord_z = coord_z;
    // Propiedades del sondeo
    var depthLog = depthLog;
    var colorStrata = colorStrata;
    var idStrata = idStrata;
    const widthLog = 1;
    const radialSegment = 20;

    var scene = scene;
    const materialCyl = new THREE.MeshBasicMaterial( {color: colorStrata} );
    var geometryCyl = new THREE.CylinderBufferGeometry( widthLog, widthLog, depthLog,radialSegment ); 
    const cylinder = new THREE.Mesh( geometryCyl, materialCyl );
    cylinder.position.x = coord_x;
    cylinder.position.y = coord_y - depthLog/2;
    cylinder.position.z = coord_z;
    cylinder.rotateOnAxis.x = Math.PI/2;

    scene.add( cylinder);

    cylinder.userData.draggable = true
    cylinder.userData.name = idStrata
    cylinder.userData.nameLog = idLog
}