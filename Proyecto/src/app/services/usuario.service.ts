import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment';
import { Observable, Subject } from 'rxjs';
import { QuantityAlertsByUserDTO } from '../models/QuantityAlertsByUserDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Usuario[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Usuario[]>(this.url);
  }
  insert(u: Usuario) {
    return this.http.post(this.url, u);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Usuario[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
  update(us: Usuario) {
    return this.http.put(this.url,us);
  }

  existsByUsername(username: string):Observable<boolean>{
    return this.http.get<boolean>(`${this.url}/?username=${username}`)
  }

  getalertasbyuser(): Observable<QuantityAlertsByUserDTO[]>{
    return this.http.get<QuantityAlertsByUserDTO[]>(`${this.url}/cantidadesalertas`);
  }
  
}
