import { Component, OnInit } from '@angular/core';
import { Simulacro } from '../../../models/Simulacro';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SimulacroService } from '../../../services/simulacro.service'; 

@Component({
  selector: 'app-listarsimulacro',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarsimulacro.component.html',
  styleUrl: './listarsimulacro.component.css'
})
export class ListarsimulacroComponent implements OnInit{
  dataSource: MatTableDataSource<Simulacro> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7']

  constructor(private sS: SimulacroService) {}

  ngOnInit(): void {
    this.sS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
