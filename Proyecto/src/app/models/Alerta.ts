import { Usuario } from "./Usuario";

import { Usuario } from "./Usuario";

export class Alerta{
    id_alerta:number=0
    tipo_desastre:string=""
    fecha:Date=new Date(Date.now())
    hora: string = ""
    descripcion:string=""
    nivel_gravedad:string=""
    estado:boolean=true
    us:Usuario = new Usuario()
    us:Usuario = new Usuario()
}