import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolComponent } from './components/rol/rol.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PlanDeEvacuacionComponent } from './components/plan-de-evacuacion/plan-de-evacuacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RolComponent, UsuarioComponent, PlanDeEvacuacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'disasterrelieve';
}
