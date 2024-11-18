import { Component, OnInit,ViewChild } from '@angular/core';
import { Zona_contacto_ayuda } from '../../../models/Zona_contacto_ayuda';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ZonaContactoService  } from '../../../services/zona-contacto.service'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarzonacontacto',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink, MatPaginator, MatCardModule,CommonModule],
  templateUrl: './listarzonacontacto.component.html',
  styleUrl: './listarzonacontacto.component.css'
})
export class ListarzonacontactoComponent implements OnInit{
  dataSource: MatTableDataSource<Zona_contacto_ayuda> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','acciones1','acciones2']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private zcS: ZonaContactoService) {}

  ngOnInit(): void {
    this.zcS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      //this.dataSource.data = data;
    });
    this.zcS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      
      });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  
}
eliminar(id:number): void {
  this.zcS.delete(id).subscribe((data) => {
    this.zcS.list().subscribe((data) => {
      this.zcS.setList(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
    });
  });
}

}
