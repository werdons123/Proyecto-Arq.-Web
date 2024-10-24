import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarplanesComponent } from "./listarplanes/listarplanes.component";

@Component({
  selector: 'app-plan-de-evacuacion',
  standalone: true,
  imports: [ListarplanesComponent, RouterOutlet],
  templateUrl: './plan-de-evacuacion.component.html',
  styleUrl: './plan-de-evacuacion.component.css'
})
export class PlanDeEvacuacionComponent {
  constructor(public route:ActivatedRoute){}
}
