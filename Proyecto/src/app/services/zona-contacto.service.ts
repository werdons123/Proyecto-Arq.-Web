import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Zona_contacto_ayuda } from '../models/Zona_contacto_ayuda';
import { Subject } from 'rxjs';
import { Contacto_ayuda } from '../models/Contacto_ayuda';
import { contactoDTO } from '../models/contactoDTO';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ZonaContactoService {
  private url = `${base_url}/zonacontactosayuda`;
  private listaCambio = new Subject<Zona_contacto_ayuda[]>();


  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Zona_contacto_ayuda[]>(this.url)
  }
  insert(zc: Zona_contacto_ayuda) {
    return this.http.post(this.url, zc);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Zona_contacto_ayuda[]) {
    this.listaCambio.next(listaNueva);
  }
  update(zc:Zona_contacto_ayuda ) {
    return this.http.put(this.url, zc);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Zona_contacto_ayuda>(`${this.url}/${id}`);
  }

  getcontactos(n: string) {
    const params = { nombreZona: n };
    return this.http.get<contactoDTO[]>(`${this.url}/listarContactosPorZona`, { params });
  }
}