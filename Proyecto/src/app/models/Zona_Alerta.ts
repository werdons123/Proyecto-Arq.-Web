import { Alerta } from "./Alerta"
//import { Zona } from './Zona';

export class Zona_Alerta{
    id_Zona:number=0
    al:Alerta
   
    
    constructor(){ 
        this.al = {
            id_alerta:0,
            tipo_desastre:"",
            fecha:new Date(Date.now()),
            hora:new Date(Date.now()),
            descripcion:"",
            nivel_gravedad:"",
            estado:true
        };

        
    }
}