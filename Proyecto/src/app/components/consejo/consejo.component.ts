import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarconsejoComponent } from './listarconsejo/listarconsejo.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-consejo',
  standalone: true,
  imports: [RouterOutlet, ListarconsejoComponent],
  templateUrl: './consejo.component.html',
  styleUrl: './consejo.component.css'
})
export class ConsejoComponent {
  role: string = '';
  constructor(private loginService: LoginService, public route:ActivatedRoute) {}

  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
}


