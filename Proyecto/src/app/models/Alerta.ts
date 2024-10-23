export class Alerta{
    id_alerta:number=0
    tipo_desastre:string=""
    fecha:Date=new Date(Date.now())
    hora:Date=new Date(Date.now())
    descripcion:string=""
    nivel_gravedad:string=""
    estado:boolean=true
}