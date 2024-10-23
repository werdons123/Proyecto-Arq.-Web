import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Consejo } from '../models/Consejo';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ConsejoService {
  private url = `${base_url}/consejos`;
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Consejo[]>(this.url);
  }
}
