import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarconsejoComponent } from './listarconsejo/listarconsejo.component';

@Component({
  selector: 'app-consejo',
  standalone: true,
  imports: [RouterOutlet, ListarconsejoComponent],
  templateUrl: './consejo.component.html',
  styleUrl: './consejo.component.css'
})
export class ConsejoComponent {
  constructor(public route:ActivatedRoute) {}

}
