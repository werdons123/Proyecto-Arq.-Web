import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZonaComponent } from './components/zona/zona.component';
import { SimulacroComponent } from './components/simulacro/simulacro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ZonacontactoComponent } from './components/zonacontacto/zonacontacto.component';
import { ZonaalertaComponent } from './components/zonaalerta/zonaalerta.component';
import { ConsejoComponent } from './components/consejo/consejo.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { RolComponent } from './components/rol/rol.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PlanDeEvacuacionComponent } from './components/plan-de-evacuacion/plan-de-evacuacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ZonaComponent,SimulacroComponent,ContactoComponent,ZonacontactoComponent,ZonaalertaComponent,ConsejoComponent,AlertaComponent,RolComponent,UsuarioComponent,PlanDeEvacuacionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
