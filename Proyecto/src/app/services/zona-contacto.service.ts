import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Zona_contacto_ayuda } from '../models/Zona_contacto_ayuda';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ZonaContactoService {
  private url = `${base_url}/zonacontactosayuda`;

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Zona_contacto_ayuda[]>(this.url)
    
  }
}
