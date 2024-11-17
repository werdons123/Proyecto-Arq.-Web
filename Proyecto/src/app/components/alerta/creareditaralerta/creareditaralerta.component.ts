import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import { Usuario } from '../../../models/Usuario';
import { Alerta } from '../../../models/Alerta';
import { AlertaService } from '../../../services/alerta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  edicion: boolean = false;
  id: number = 0;

  listaGravedad: { value: string; viewValue: string }[] = [
    { value: 'Alta', viewValue: 'Alta' },
    { value: 'Media', viewValue: 'Media' },
    { value: 'Baja', viewValue: 'Baja' },
  ];
  listaTipos: { value: string; viewValue: string }[] = [
    { value: 'Terremoto', viewValue: 'Terremoto' },
    { value: 'Tsunami', viewValue: 'Tsunami' },
    { value: 'Huracan', viewValue: 'Huracan' },
    { value: 'Tornado', viewValue: 'Tornado' },
    { value: 'Tormenta', viewValue: 'Tormenta' },
    { value: 'Inundacion', viewValue: 'Inunandacion' },
  ];

  constructor(
    private aS: AlertaService,
    private uS:UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  
     const fechaActual = new Date();
     const fechaAjustada = new Date(fechaActual.toLocaleString('en-US', { timeZone: 'America/Lima' }));
  
     const hora = fechaAjustada.toTimeString().split(' ')[0]; 
     
     
  
    this.form = this.formBuilder.group({
      hcodigo:[''],
      htipo: ['', Validators.required],
      hfecha: [fechaAjustada, Validators.required],
      hhora: [hora, Validators.required],
      hdescripcion: ['', Validators.required],
      hgravedad: ['', Validators.required],
      hestado: [false, Validators.required],
      husuario: ['', Validators.required],
    });
  
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
    this.form.get('hfecha')?.disable();
      this.form.get('hhora')?.disable();
  }
  insertar(): void {
    this.form.markAllAsTouched();
    const fechaActual = new Date();
    const fechaSolo = new Date(fechaActual.toISOString().split('T')[0]); 
    const hora = fechaActual.toTimeString().split(' ')[0]; 

    console.log('Fecha antes de enviar al servidor: ', fechaSolo);  

    if (this.form.invalid) {
      this.snackBar.open('Complete correctamente el formulario', 'Cerrar', {
        duration: 3000, 
        panelClass: ['error-snack-bar']  
      });
      return;
    }
    if ( this.form.valid) {
      this.aler.id_alerta = this.form.value.hcodigo;
      this.aler.tipo_desastre = this.form.value.htipo;
      this.aler.fecha =fechaSolo;
      this.aler.hora = hora;
      this.aler.descripcion = this.form.value.hdescripcion;
      this.aler.nivel_gravedad = this.form.value.hgravedad;
      this.aler.estado = this.form.value.hestado;
      this.aler.us.id_usuario = this.form.value.husuario;
      if (this.edicion) {
        this.aS.update(this.aler).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        this.aS.insert(this.aler).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['alertas']);
  }
  init() {
    if (this.edicion) {
  
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.id_alerta),
          htipo: new FormControl(data.tipo_desastre),
          hdescripcion: new FormControl(data.descripcion),
          hgravedad: new FormControl(data.nivel_gravedad),
          hestado: new FormControl(data.estado),
          husuario: new FormControl(data.us.id_usuario),
        });
      });
    }
  }


}
