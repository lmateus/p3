import * as THREE from 'three'
// Creamos una funcion que agregue una linea de topografia a la escena de three js
export default (scene) => {
  const materialTopo = new THREE.LineBasicMaterial({ color: "rgb(244, 223, 78)",linewidth: 1})
  
  function addTopography (data) {
    
    var abcsisa = data['distancia_x'];
    var heightProfile = data['elevacion'];

    var abcsisaMax = Math.max.apply(Math,abcsisa);
    var heightProfileMax = Math.max.apply(Math,heightProfile);
    var heightProfileMin = Math.min.apply(Math,heightProfile);
    var centerProfileH = (heightProfileMax + heightProfileMin) / 2

    console.log(abcsisaMax,heightProfileMax)

    localStorage.setItem("AbcMax", abcsisaMax);
    localStorage.setItem("ElvMax", heightProfileMax);

    var aspectRatio = window.innerWidth/window.innerHeight;
    var viewSize = abcsisaMax;
    var left = -aspectRatio*viewSize/2;
    var rigth = aspectRatio*viewSize/2;
    var top = viewSize/2;
    var bottom = -viewSize/2;
   
    const points = []
    data.elevacion.forEach((element, index) => {
      let elevacion = element/aspectRatio  ;
      let distancia = data.distancia_x[index];
      points.push(
        new THREE.Vector3(distancia, elevacion , 0)
      )
    })

    console.log(points);

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const lineTopo = new THREE.Line(geometry, materialTopo)

    scene.add(lineTopo);   


  };

  // Hacemos una prueba con una peticion a la API rest de topografia

  const url = 'http://localhost:4000/products'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      Punto_inicial: [-74.066944, 4.621891],  
      Punto_final: [-74.060185, 4.622436]  
    })
  })
    .then(response => response.json())
    .then(data => addTopography(data))
}


 
 