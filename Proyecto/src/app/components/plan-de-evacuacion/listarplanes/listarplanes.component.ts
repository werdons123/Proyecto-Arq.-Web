import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PlanEvacuacion } from '../../../models/Plan_de_Evacuacion';
import { PlanDeEvacuacionService } from '../../../services/plan-de-evacuacion.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-listarplanes',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    RouterLink,
    MatPaginator,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './listarplanes.component.html',
  styleUrl: './listarplanes.component.css',
})
export class ListarplanesComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<PlanEvacuacion> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private peS: PlanDeEvacuacionService, private loginService: LoginService ) {}
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
    this.peS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    ;
    this.peS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminar(id: number) {
    console.log(id); 
    this.peS.delete(id).subscribe((data) => {
      this.peS.list().subscribe((data) => {
        this.peS.setList(data);
        this.dataSource.data = data;
      });
    });
  }

  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(
      startIndex,
      endIndex
    );
  }
}
