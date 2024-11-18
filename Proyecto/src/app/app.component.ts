import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ZonaComponent,
    SimulacroComponent,
    ContactoComponent,
    ZonacontactoComponent,
    ZonaalertaComponent,
    ConsejoComponent,
    AlertaComponent,
    RolComponent,
    UsuarioComponent,
    PlanDeEvacuacionComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    LoginComponent,
    HomeComponent,
    RegisterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  role: string = '';
  username: string = '';
  constructor(private loginService: LoginService) {}
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isADMIN() {
    
    return this.role === 'ADMIN';
  }

  isCLIENTE() {
    return this.role === 'CLIENTE';
  }
}
