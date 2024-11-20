import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-listarusuario',
  standalone: true,
  imports: [
    MatTableModule, 
    MatIconModule, 
    RouterLink,
    MatPaginator,
    CommonModule,
    MatCardModule],
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent implements OnInit{
  role: string = '';
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private uS:UsuarioService, private loginService: LoginService){}
  
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }

  isADMIN() {
    
    return this.role === 'ADMIN';
  }

  isCLIENTE() {
    return this.role === 'CLIENTE';
  }ngOnInit(): void {
    this.uS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
        
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
 
      
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.uS.delete(id).subscribe((data) => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);

      });
    });
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }
}
