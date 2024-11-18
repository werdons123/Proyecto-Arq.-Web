import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Alerta } from '../models/Alerta';
import { Observable, Subject } from 'rxjs';
import { Cantidad_tipo_desastre } from '../models/Cantidad_tipo_desastre';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private url = `${base_url}/alertas`;
  private listaCambio = new Subject<Alerta[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Alerta[]>(this.url);
  }
  insert(a: Alerta) {
    return this.http.post(this.url, a);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Alerta[]) {
    this.listaCambio.next(listaNueva);
  }

  cantidadPorTipo():Observable<Cantidad_tipo_desastre[]>{
    return this.http.get<Cantidad_tipo_desastre[]>(`${this.url}/cantidadPorTipo`);
  }
}
