import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listarrol',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatPaginator, RouterLink],
  templateUrl: './listarrol.component.html',
  styleUrl: './listarrol.component.css'
})

export class ListarrolComponent implements OnInit {
  dataSource: MatTableDataSource<Rol> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private rS: RolService) {}
  
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id: number) {
    console.log(`El ID a eliminar es: ${id}`); 
    this.rS.delete(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
        this.dataSource.data = data;
      });
    });
  }
}
