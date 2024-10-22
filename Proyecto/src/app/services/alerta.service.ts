import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Alerta } from '../models/Alerta';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private url = `${base_url}/alertas`;

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Alerta[]>(this.url);
  }
}
