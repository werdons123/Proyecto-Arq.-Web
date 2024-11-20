import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/Rol';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private url = `${base_url}/rol`;
  constructor(private http: HttpClient) {}
  private listaCambio = new Subject<Rol[]>();
  list() {
    return this.http.get<Rol[]>(this.url);
  }
  insert(r: Rol) {
    return this.http.post(this.url, r);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Rol[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<Rol>(`${this.url}/${id}`);
  }
  update(r: Rol) {
    return this.http.put(this.url, r);
  }
}
