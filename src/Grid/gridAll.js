import gridLinesHor from "./gridLinesHor.js";
import gridLinesVer from "./gridLinesVer.js";

export default (scene)=>{

    var scene = scene;
    var separatorGridHor = [0,20,40,60,80,100,120,140,160,180,200] 
    var separatorGridVer = [0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750]
    // Agregamos lineas verticales
    separatorGridHor.forEach(element => {
        gridLinesHor(scene,752,1000-(element));
    });

    separatorGridVer.forEach(element => {
        gridLinesVer(scene,element,1000);
    });
    
}