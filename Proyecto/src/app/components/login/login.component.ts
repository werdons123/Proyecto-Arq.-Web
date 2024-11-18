import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtRequest } from '../../models/jwtRequest';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../models/Rol';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(
    private loginService: LoginService,
    private roleService: RolService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    
  ) {  }
  username: string = '';
  password: string = '';
  mensaje: string = '';
  id: number = 0;
  rol: Rol = new Rol();
  role:string = "";
  idR: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
  }
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe(
      (data: any) => {
        sessionStorage.setItem('token', data.jwttoken);
        this.router.navigate(['menu']);
      },
      (error) => {
        this.mensaje = 'Credenciales incorrectas!!!';
        this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
      }
    );
    this.role = this.loginService.showRole();
    this.idR = this.loginService.getId();
    if(this.role === ""){
      this.rol.idRol = 0;
      this.rol.tipoRol = "CLIENTE";
      this.rol.us.id_usuario = this.idR;
      this.roleService.insert(this.rol).subscribe((data) => {
        this.roleService.list().subscribe((data: Rol[]) => {
          this.roleService.setList(data);
        });
      });
    }
  }

}
