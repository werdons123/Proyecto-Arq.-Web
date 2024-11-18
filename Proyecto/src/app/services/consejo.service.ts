import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Consejo } from '../models/Consejo';
import { Cons, Observable, Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ConsejoService {
  private url = `${base_url}/consejos`;
  private listaCambio = new Subject<Consejo[]>();

  private listaCambio = new Subject<Consejo[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Consejo[]>(this.url);
  }
  insert(c: Consejo) {
    return this.http.post(this.url, c);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Consejo[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<Consejo>(`${this.url}/${id}`);
  }
  update(con: Consejo) {
    return this.http.put(this.url,con);
  }
  buscarPorTipo(tipo: string): Observable <Consejo[]> {
    return this.http.get<Consejo[]>(`${this.url}?tipo=${tipo}`);
  }
}
