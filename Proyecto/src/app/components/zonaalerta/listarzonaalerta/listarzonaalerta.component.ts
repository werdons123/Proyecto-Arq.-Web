import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Zona_Alerta } from '../../../models/Zona_Alerta';
import { ZonaalertaService } from '../../../services/zonaalerta.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
/// <reference types="@types/google.maps" />


@Component({
  selector: 'app-listarzonaalerta',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink, MatPaginator, MatCardModule,CommonModule],
  templateUrl: './listarzonaalerta.component.html',
  styleUrl: './listarzonaalerta.component.css'
})
export class ListarzonaalertaComponent implements OnInit{
  dataSource: MatTableDataSource<Zona_Alerta> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  zona_alerta: Zona_Alerta = new Zona_Alerta();
  id:number=0;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };  
  zoom: number = 12; 
  label: string = 'A'; 


  constructor(private zaS: ZonaalertaService) {}

  ngOnInit(): void {
    this.zaS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.zaS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.zaS.delete(id).subscribe((data) => {
      this.zaS.list().subscribe((data) => {
        this.zaS.setList(data);

      });
    });
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }
}
