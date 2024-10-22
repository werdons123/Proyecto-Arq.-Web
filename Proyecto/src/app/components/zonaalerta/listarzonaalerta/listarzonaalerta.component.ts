import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Zona_Alerta } from '../../../models/Zona_Alerta';
import { ZonaalertaService } from '../../../services/zonaalerta.service';


@Component({
  selector: 'app-listarzonaalerta',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarzonaalerta.component.html',
  styleUrl: './listarzonaalerta.component.css'
})
export class ListarzonaalertaComponent implements OnInit{
  dataSource: MatTableDataSource<Zona_Alerta> = new MatTableDataSource();

  displayedColumns:string[]=['c1','c2']

  constructor(private zaS: ZonaalertaService) {}

  ngOnInit(): void {
    this.zaS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
    
  }
}
