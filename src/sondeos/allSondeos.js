import sondeo from "./sondeo.js";

export default (scene)=>{
    var starCountRef = dbRt.ref('PROYECTOS/HSDJH343467/12089904614874')
    starCountRef.on('value', snapshot =>{
        const data = snapshot.val();
        const logsData = Object.keys(data);
        logsData.forEach(element => {
            if (
                element === 'ID_ESTRUCTURA' ||
                element === 'NOMBRE_ESTRUCTURA' ||
                element === 'reservedGeometry'
              ) {
                ''
              }
            else{
               
                var randomCoordX = Math.random() * (700) ;
                sondeo(scene,randomCoordX,element);
            }
        });
        
    })
}