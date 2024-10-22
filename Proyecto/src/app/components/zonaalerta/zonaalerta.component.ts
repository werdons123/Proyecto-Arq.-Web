import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarzonaalertaComponent } from './listarzonaalerta/listarzonaalerta.component';

@Component({
  selector: 'app-zonaalerta',
  standalone: true,
  imports: [RouterOutlet, ListarzonaalertaComponent],
  templateUrl: './zonaalerta.component.html',
  styleUrl: './zonaalerta.component.css'
})
export class ZonaalertaComponent {
  constructor(public route:ActivatedRoute) {}

}
