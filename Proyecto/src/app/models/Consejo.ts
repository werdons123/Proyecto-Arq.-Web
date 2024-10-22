import { Alerta } from "./Alerta"

export class Consejo{
    id_Consejo:number=0
    titulo:string=""
    descripcion:string=""
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