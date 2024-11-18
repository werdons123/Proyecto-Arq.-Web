import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Zona } from '../models/Zona';
import { Subject, Observable} from 'rxjs';
import { QuantityAlertsByZoneDTO } from '../models/QuantityAlertsByZoneDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  private url = `${base_url}/zonas`;
  private listaCambio = new Subject<Zona[]>();
  
  private listaCambio = new Subject<Zona[]>();
  

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Zona[]>(this.url);
  }
  insert(z: Zona) {
    return this.http.post(this.url, z);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Zona[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Zona>(`${this.url}/${id}`);
  }
  update(zon: Zona) {
    return this.http.put(this.url, zon);
  }
  getzonas(letra: string)
  {
    return this.http.get<any>(`/api/maps/api/place/autocomplete/json?input=${letra}&types=(cities)&components=country:PE&key=AIzaSyC35fwkBMpj6J4Dmd1jrZ8o3GkUesXkx7g`);
  } 
  getCoordinatesFromPlaceId(placeId: string):Observable<any>  {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyC35fwkBMpj6J4Dmd1jrZ8o3GkUesXkx7g`);
  }
  search(n: string) {
    const params = { zona: n };
    return this.http.get<Zona[]>(`${this.url}/buscar`, { params });
  }
  
  getalertasbyzona(): Observable<QuantityAlertsByZoneDTO[]>{
    return this.http.get<QuantityAlertsByZoneDTO[]>(`${this.url}/cantidadesalertas`);
  }
}