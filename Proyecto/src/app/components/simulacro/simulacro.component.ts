import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarsimulacroComponent } from './listarsimulacro/listarsimulacro.component';

@Component({
  selector: 'app-simulacro',
  standalone: true,
  imports: [RouterOutlet,ListarsimulacroComponent],
  templateUrl: './simulacro.component.html',
  styleUrl: './simulacro.component.css'
})
export class SimulacroComponent {
  constructor(public route:ActivatedRoute){}

}
