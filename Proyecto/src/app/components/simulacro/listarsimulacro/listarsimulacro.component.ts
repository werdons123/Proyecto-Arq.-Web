import { Component, OnInit,ViewChild } from '@angular/core';
import { Simulacro } from '../../../models/Simulacro';
import { SimulacroService } from '../../../services/simulacro.service'; 
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-listarsimulacro',
  standalone: true,
  imports: [MatTableModule,MatPaginator,MatCardModule,CommonModule,MatIconModule,RouterLink],
  templateUrl: './listarsimulacro.component.html',
  styleUrl: './listarsimulacro.component.css'
})
export class ListarsimulacroComponent implements OnInit{
  role: string = '';
  dataSource: MatTableDataSource<Simulacro> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private sS: SimulacroService, private loginService: LoginService) {}
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }

  isADMIN() {
    
    return this.role === 'ADMIN';
  }

  isCLIENTE() {
    return this.role === 'CLIENTE';
  }

  ngOnInit(): void {
    this.sS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
      //this.dataSource.data = data;
    });
    this.sS.getList().subscribe((data) => {
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
    this.sS.delete(id).subscribe((data) => {
      this.sS.list().subscribe((data) => {
        this.sS.setList(data);
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
