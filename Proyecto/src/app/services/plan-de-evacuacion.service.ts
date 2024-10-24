import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanEvacuacion } from '../models/Plan_de_Evacuacion';
import { environment } from '../../environments/environment';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class PlanDeEvacuacionService {
  private url = `${base_url}/planesdeevacuacion`;
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<PlanEvacuacion[]>(this.url);
  }
}
