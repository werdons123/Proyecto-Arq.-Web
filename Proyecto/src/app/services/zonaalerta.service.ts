import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Zona_Alerta } from '../models/Zona_Alerta';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ZonaalertaService {
  private url = `${base_url}/zonaalertas`

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Zona_Alerta[]>(this.url);
  }
}
