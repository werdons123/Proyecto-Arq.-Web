import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-creareditarusuarios',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './creareditarusuarios.component.html',
  styleUrl: './creareditarusuarios.component.css'
})
export class CreareditarusuariosComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();
  id: number = 0;
  edicion: boolean = false;
  
  listaUsuarios: Usuario[]=[]

  estados: { value: boolean; viewValue: string }[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Deshabilitado' },
  ];

  constructor(
    private uS: UsuarioService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private rS: RolService
    
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', Validators.required],
      hapellido: ['', Validators.required],
      hfecha: ['', Validators.required],
      hcorreo: ['', [Validators.required, Validators.email]],
      hruc: ['', [Validators.pattern(/^\d{11}$/)]],
      hdireccion: ['', Validators.required],
      htelefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      husername: ['', [Validators.required, Validators.minLength(3)]],
      hpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        ]
      ],
      hestado: [''],
    });
  }
insertar():void {
  this.form.markAllAsTouched();

  if (this.form.invalid) {
    console.log("Formulario inválido.");
    return;
  }
  if(this.form.valid) {
    
    this.usuario.id_usuario = this.form.value.hcodigo;
    this.usuario.nombre = this.form.value.hnombre;
    this.usuario.apellidos = this.form.value.hapellido;
    this.usuario.fechanacimiento = this.form.value.hfecha;
    this.usuario.correo = this.form.value.hcorreo;
    this.usuario.ruc = this.form.value.hruc;
    this.usuario.direccion = this.form.value.hdireccion;
    this.usuario.telefono = this.form.value.htelefono;
    this.usuario.username = this.form.value.husername;
    this.usuario.password = this.form.value.hpassword;
    this.usuario.enabled = true;
    if(this.edicion) {
      this.uS.update(this.usuario).subscribe((data) => {
        this.uS.list().subscribe((data)=> {
          this.uS.setList(data);
        });
      });
    } else {
      this.uS.insert(this.usuario).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
    }
  }
  this.router.navigate(['usuarios']);
}

init() {
  if(this.edicion) {
    this.uS.listaId(this.id).subscribe((data) => {
      this.form = new FormGroup({

        hcodigo: new FormControl(data.id_usuario),
        hnombre: new FormControl(data.nombre),
        hapellido: new FormControl(data.apellidos),
        hfecha: new FormControl(data.fechanacimiento),
        hcorreo: new FormControl(data.correo),
        hruc: new FormControl(data.ruc),
        hdireccion: new FormControl(data.direccion),
        htelefono: new FormControl(data.telefono),
        husername: new FormControl(data.username),
        hpassword: new FormControl(data.password),
        hestado: new FormControl(data.enabled),
      });
    });
  }
}


ValidarUsuarioUnico(control: AbstractControl) {
  return this.listaUsuarios.includes(control.value) ? { uniqueUsername: true } : null;
}

}
