import { Component, OnInit } from '@angular/core';
import { Alerta } from '../../../models/Alerta';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlertaService } from '../../../services/alerta.service';

@Component({
  selector: 'app-listaralerta',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaralerta.component.html',
  styleUrl: './listaralerta.component.css'
})
export class ListaralertaComponent implements OnInit{
  dataSource: MatTableDataSource<Alerta> = new MatTableDataSource();

  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7']

  constructor(private aS: AlertaService) {}

  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
