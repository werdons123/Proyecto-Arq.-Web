import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CantidadAlertasTipoComponent } from "./cantidad-alertas-tipo/cantidad-alertas-tipo.component";

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RouterOutlet,CantidadAlertasTipoComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor(public route:ActivatedRoute){}
}
