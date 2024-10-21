import { Zona } from './Zona';
import { Contacto_ayuda } from './Contacto_ayuda';
export class Zona_contacto_ayuda{
    idZonaContactoAyuda:number=0
    zo: Zona

    coay: Contacto_ayuda
    constructor() {
          this.coay = { idContactoAyuda:0,
            nombreInstitucion:"",
            descripcion:"",
            telefono:""};
           this.zo = { id_Zona:0,
                nombre_zona:"",
                descripcion:"",
                ubicacion:"" };
        
        }
    



}