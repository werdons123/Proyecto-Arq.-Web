import { Component,OnInit,ViewChild, NgModule } from '@angular/core';
import { ZonaService } from '../../../services/zona.service'; 
import { Zona} from '../../../models/Zona';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
/// <reference types="@types/google.maps" />
@Component({
  selector: 'app-listaridzona',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,MatPaginator,CommonModule,MatCardModule, GoogleMapsModule],
  templateUrl: './listaridzona.component.html',
  styleUrl: './listaridzona.component.css'
})
export class ListaridzonaComponent implements OnInit{
  
  zona: Zona = new Zona();
  id:number=0;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };  
  zoom: number = 12; 
  label: string = 'A'; 

  constructor(private zS: ZonaService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.zS.listId(this.id).subscribe((zona) => {
      this.zona = zona;
      this.center = { lat: this.zona.latitud, lng: this.zona.longitud }; 
    });
   
  }

}
