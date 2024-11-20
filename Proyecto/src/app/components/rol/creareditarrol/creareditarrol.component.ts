import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Rol } from '../../../models/Rol';
import { Usuario } from '../../../models/Usuario';
import { RolService } from '../../../services/rol.service';
import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'app-creareditarrol',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './creareditarrol.component.html',
  styleUrl: './creareditarrol.component.css',
})
export class CreareditarrolComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  rol: Rol = new Rol();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];

  listaRoles: { value: string; viewValue: string }[] = [
    { value: 'CLIENTE', viewValue: 'CLIENTE' },
    { value: 'ADMIN', viewValue: 'ADMIN' },
    //{ value: 'ESPECIALISTA', viewValue: 'ESPECIALISTA' },
  ];

  constructor(
    private rS: RolService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private uS: UsuarioService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      htipo: ['', [Validators.required, Validators.maxLength(30)]],
      husuario: ['', Validators.required],
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }

  insertar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }
    if (this.form.valid) {
      this.rol.idRol = this.form.value.hcodigo;
      this.rol.tipoRol = this.form.value.htipo;
      this.rol.us.id_usuario = this.form.value.husuario;
      console.log("Enviando datos:", {
        idRol: this.rol.idRol,
        tipoRol: this.rol.tipoRol,
        idUsuario: this.rol.us.id_usuario
      });
      if (this.edicion) {
        this.rS.update(this.rol).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.rol).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['roles']);
  }

  init() {
    if (this.edicion) {
      this.rS.listaId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idRol),
          htipo: new FormControl(data.tipoRol),
          husuario: new FormControl(data.us.id_usuario),
        });
      });
    }
  }
}
