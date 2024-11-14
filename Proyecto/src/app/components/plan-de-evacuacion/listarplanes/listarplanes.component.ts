import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { PlanEvacuacion } from '../../../models/Plan_de_Evacuacion';
import { PlanDeEvacuacionService } from '../../../services/plan-de-evacuacion.service';

@Component({
  selector: 'app-listarplanes',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarplanes.component.html',
  styleUrl: './listarplanes.component.css'
})
export class ListarplanesComponent {
  datasource: MatTableDataSource<PlanEvacuacion> = new MatTableDataSource();
  constructor(private peS: PlanDeEvacuacionService){}
  ngOnInit(): void {
      this.peS.list().subscribe(data => {
        this.datasource=new MatTableDataSource(data)
      })
  }
}
