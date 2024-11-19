import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-listarrol',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarrol.component.html',
  styleUrl: './listarrol.component.css'
})

export class ListarrolComponent implements OnInit {
  datasource: MatTableDataSource<Rol> = new MatTableDataSource();
  constructor(private rS: RolService){}
  ngOnInit(): void {
      this.rS.list().subscribe(data => {
        this.datasource=new MatTableDataSource(data)
      })
  }
}
