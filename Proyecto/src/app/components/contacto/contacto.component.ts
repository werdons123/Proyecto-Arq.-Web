import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarcontactoComponent } from './listarcontacto/listarcontacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterOutlet,ListarcontactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(public route:ActivatedRoute){}

}
