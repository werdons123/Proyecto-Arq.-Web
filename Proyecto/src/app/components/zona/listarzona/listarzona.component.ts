import { Component, OnInit } from '@angular/core';
import { Zona } from '../../../models/Zona';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ZonaService } from '../../../services/zona.service'; 

@Component({
  selector: 'app-listarzona',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarzona.component.html',
  styleUrl: './listarzona.component.css'
})
export class ListarzonaComponent implements OnInit{
  dataSource: MatTableDataSource<Zona> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4']

  constructor(private zS: ZonaService) {}

  ngOnInit(): void {
    this.zS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
