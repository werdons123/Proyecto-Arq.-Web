import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Simulacro } from '../models/Simulacro';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class SimulacroService {
  private url = `${base_url}/simulacros`;

  constructor(private http: HttpClient) {}
  private listaCambio = new Subject<Simulacro[]>();

  list() {
    return this.http.get<Simulacro[]>(this.url);
  }
  insert(s: Simulacro) {
    return this.http.post(this.url, s);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Simulacro[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<Simulacro>(`${this.url}/${id}`);
  }
  update(sim: Simulacro) {
    return this.http.put(this.url,sim);
  }
}
