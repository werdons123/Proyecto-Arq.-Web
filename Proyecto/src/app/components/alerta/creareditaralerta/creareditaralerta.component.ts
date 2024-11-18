import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../models/Usuario';
import { Alerta } from '../../../models/Alerta';
import { AlertaService } from '../../../services/alerta.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-creareditaralerta',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './creareditaralerta.component.html',
  styleUrl: './creareditaralerta.component.css'
})
export class CreareditaralertaComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  listaUsuarios: Usuario[] = [];
  aler: Alerta = new Alerta();

  listaGravedad: { value: string; viewValue: string }[] = [
    { value: 'Alta', viewValue: 'Alta' },
    { value: 'Media', viewValue: 'Media' },
    { value: 'Baja', viewValue: 'Baja' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private aS: AlertaService,
    private router: Router,
    private uS: UsuarioService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      htipo: ['', Validators.required],
      hfecha: ['', Validators.required],
      hhora: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hgravedad: ['', Validators.required],
      hestado: ['', Validators.required],
      husuario: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.aler.tipo_desastre = this.form.value.htipo;
      this.aler.fecha = this.form.value.hfecha;
      this.aler.hora = this.form.value.hhora;
      this.aler.descripcion = this.form.value.hdescripcion;
      this.aler.nivel_gravedad = this.form.value.hgravedad;
      this.aler.estado = this.form.value.hestado;
      this.aler.us.id_usuario = this.form.value.husuario;
      this.aS.insert(this.aler).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['alertas']);
    }
  }

}
