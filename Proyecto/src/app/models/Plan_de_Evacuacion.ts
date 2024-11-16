import { Zona } from "./Zona";

export class PlanEvacuacion {
  id_plan_evacuacion: number = 0; 
  titulo: string = '';
  descripcion: string = '';
  rutas_evacuacion: string = '';
  puntos_seguros: string = '';
  zona:Zona = new Zona()
}