import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanEvacuacion } from '../models/Plan_de_Evacuacion';
import { environment } from '../../environments/enviroment';
import { Observable, Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class PlanDeEvacuacionService {
  private url = `${base_url}/planesdeevacuacion`;
  constructor(private http: HttpClient) {}
  private listaCambio = new Subject<PlanEvacuacion[]>();

  list() {
    return this.http.get<PlanEvacuacion[]>(this.url);
  }
  insert(p: PlanEvacuacion) {
    return this.http.post(this.url, p);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: PlanEvacuacion[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<PlanEvacuacion>(`${this.url}/${id}`);
  }
  update(plan: PlanEvacuacion) {
    return this.http.put(this.url,plan);
  }

  listarPorZona(idZona: number): Observable<PlanEvacuacion[]> {
    return this.http.get<PlanEvacuacion[]>(`${this.url}/por-zona/${idZona}`);
  }
  
}
