import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Contacto_ayuda } from '../models/Contacto_ayuda';
import { Subject } from 'rxjs';
import { UrlTree } from '@angular/router';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ContactoAyudaService {
  private url = `${base_url}/contactoayuda`;
  private listaCambio = new Subject<Contacto_ayuda[]>();

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Contacto_ayuda[]>(this.url)
  }
  insert(c: Contacto_ayuda) {
    return this.http.post(this.url, c);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Contacto_ayuda[]){
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listaId(id: number) {
    return this.http.get<Contacto_ayuda>(`${this.url}/${id}`);
  }
  update(con: Contacto_ayuda) {
    return this.http.put(this.url,con);
  }
}
