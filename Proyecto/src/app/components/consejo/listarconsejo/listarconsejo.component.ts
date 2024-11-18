import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ConsejoService } from '../../../services/consejo.service';
import { Consejo } from '../../../models/Consejo';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-listarconsejo',
  standalone: true,
  imports: [MatTableModule, 
    MatIconModule, 
    RouterLink,
    MatPaginator,
    CommonModule,
    MatCardModule],
  templateUrl: './listarconsejo.component.html',
  styleUrl: './listarconsejo.component.css'
})
export class ListarconsejoComponent implements OnInit{
  role: string = '';
  dataSource: MatTableDataSource<Consejo> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private cS: ConsejoService, private loginService: LoginService) {}

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
    this.cS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.data = data;
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data;
      
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
        this.dataSource.data = data;
      });
    });
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }
}
