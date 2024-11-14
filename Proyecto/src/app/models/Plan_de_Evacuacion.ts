import { Zona } from "./Zona";


export class PlanEvacuacion {
  idPlanEvacuacion: number = 0; 
  titulo: string = '';
  descripcion: string = '';
  rutasEvacuacion: string = '';
  puntosSeguros: string = '';
  zona:Zona = new Zona()
}