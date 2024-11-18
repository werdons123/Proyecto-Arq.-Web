import { Component, OnInit, ViewChild } from '@angular/core';
import { Alerta } from '../../../models/Alerta';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlertaService } from '../../../services/alerta.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listaralerta',
  standalone: true,
  imports: [MatTableModule,MatPaginator,MatCardModule,CommonModule,MatIconModule,RouterLink],
  templateUrl: './listaralerta.component.html',
  styleUrl: './listaralerta.component.css'
})
export class ListaralertaComponent implements OnInit{
  dataSource: MatTableDataSource<Alerta> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private aS: AlertaService) {}

  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
      //this.dataSource.data = data;
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
      
      });
     //if (this.paginator) {
    //  this.paginator.pageSize = 10;  // Número de elementos por página inicial
     // this.paginator.pageIndex = 0;  // Aseguramos que inicie desde la primera página
    //}
  
  }
  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
    
  }
  eliminar(id:number): void {
    this.aS.delete(id).subscribe((data) => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = data;
        console.log('Longitud de los datos después de eliminación:', this.dataSource.data.length);
        if (this.dataSource.data.length === this.paginator.pageSize && this.paginator.pageIndex > 0) {
          console.log('Página vacía, retrocediendo...');
          this.paginator.pageIndex = Math.max(0, this.paginator.pageIndex - 1);
        }

        // Actualizar el paginador con los nuevos datos
        this.updatePaginator({
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
        });
      });
    });
  }
  updatePaginator(event: any):void {
 
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
   this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
   this.paginator.length = this.dataSource.data.length;
   }
}
