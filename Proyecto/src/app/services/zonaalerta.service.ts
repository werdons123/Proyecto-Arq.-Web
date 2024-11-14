import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Zona_Alerta } from '../models/Zona_Alerta';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ZonaalertaService {
  private url = `${base_url}/zonaalertas`
  private listaCambio = new Subject<Zona_Alerta[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Zona_Alerta[]>(this.url);
  }
  insert(za: Zona_Alerta) {
    return this.http.post(this.url, za);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Zona_Alerta[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Zona_Alerta>(`${this.url}/${id}`);
  }
  update(zoa: Zona_Alerta) {
    return this.http.put(this.url, zoa);
  }
}
