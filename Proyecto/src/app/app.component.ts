import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertaComponent } from './components/alerta/alerta.component';
import { ConsejoComponent } from './components/consejo/consejo.component';
import { ZonaalertaComponent } from './components/zonaalerta/zonaalerta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertaComponent, ConsejoComponent, ZonaalertaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoArqWeb';
}
