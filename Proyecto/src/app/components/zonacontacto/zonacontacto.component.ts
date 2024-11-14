import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarzonacontactoComponent } from './listarzonacontacto/listarzonacontacto.component';

@Component({
  selector: 'app-zonacontacto',
  standalone: true,
  imports: [RouterOutlet,ListarzonacontactoComponent],
  templateUrl: './zonacontacto.component.html',
  styleUrl: './zonacontacto.component.css'
})
export class ZonacontactoComponent {
  constructor(public route:ActivatedRoute){}

}
