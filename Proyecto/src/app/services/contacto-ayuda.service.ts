import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contacto_ayuda } from '../models/Contacto_ayuda';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ContactoAyudaService {
  private url = `${base_url}/contactoayuda`;

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Contacto_ayuda[]>(this.url)
    
  }
}
