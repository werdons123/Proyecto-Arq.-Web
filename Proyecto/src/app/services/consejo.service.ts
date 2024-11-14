import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Consejo } from '../models/Consejo';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ConsejoService {
  private url = `${base_url}/consejos`;
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
}
