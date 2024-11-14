import { Zona } from './Zona';
export class Simulacro{
    idSimulacro:number=0
    tipoSimlacro:string=""
    fecha:Date=new Date(Date.now())
    hora:Date=new Date(Date.now())
    descripcion:string=""
    participantes:number=0
    zo: Zona = new Zona()
    



}