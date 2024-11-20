import { Component, OnInit } from '@angular/core';
import { PlanDeEvacuacionService } from '../../../services/plan-de-evacuacion.service';
import { ZonaService } from '../../../services/zona.service';
import { PlanEvacuacion } from '../../../models/Plan_de_Evacuacion';
import { Zona } from '../../../models/Zona';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listar-planes-zona',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './listar-planes-zona.component.html',
  styleUrl: './listar-planes-zona.component.css'
})
export class ListarPlanesZonaComponent implements OnInit {
  idZonaSeleccionada: number = 0;
  planes: PlanEvacuacion[] = [];
  zonas: Zona[] = [];
  consultaRealizada: boolean = false;

  constructor(
    private pES: PlanDeEvacuacionService,
    private zS: ZonaService,
  ) {}

  ngOnInit(): void {
    this.cargarZonas();
  }

  cargarZonas(): void {
    this.zS.list().subscribe((data) => {
      this.zonas = data;
    });
  }

  cargarPlanes(): void {
    if (this.idZonaSeleccionada > 0) {
      this.pES.listarPorZona(this.idZonaSeleccionada).subscribe((data) => {
        this.planes = data;
        this.consultaRealizada = true;
      });
    }
  }
}
