import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Zona } from '../models/Zona';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  private url = `${base_url}/zonas`;

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Zona[]>(this.url)
    
  }
}
