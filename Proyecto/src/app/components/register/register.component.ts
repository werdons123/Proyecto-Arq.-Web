import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule , AbstractControl} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { Usuario } from '../../models/Usuario';
import { Rol } from '../../models/Rol';
import { UsuarioService } from '../../services/usuario.service';
import { RolService } from '../../services/rol.service';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
  
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup= new FormGroup({});
  user: Usuario = new Usuario();
  id:number=0;

  estados: { value: boolean; viewValue: string }[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Deshabilitado' },
  ];

  constructor(
    private uS: UsuarioService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
    this.registerForm = this.formBuilder.group({
      hcodigo:[''],
      hnombre: ['', Validators.required],
      hapellido: ['', Validators.required],
      hfecha: ['', Validators.required],
      hcorreo: ['', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$'
        )]],
      hdireccion: ['', Validators.required],
      htelefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      husername: ['', [Validators.required, Validators.minLength(3)]],
      hpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
           // Al menos una letra y un número
        ]
      ],
      hruc: [
        '',
        [Validators.pattern(/^\d{11}$/)] // Valida que el RUC tenga exactamente 11 dígitos numéricos
      ],
      hestado:[''] ,
    });
  }
  registrar():void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const username = this.registerForm.value.usuario;
      this.uS.existsByUsername(username).subscribe((exists: boolean) => {
        if (exists) {
          this.registerForm.controls['usuarios'].setErrors({ usernameTaken: true });
          this.snackBar.open('El nombre de usuario ya está en uso', '', {
            duration: 3000,
          });
        } else {
          this.user.id_usuario = this.registerForm.value.hcodigo;
          this.user.nombre = this.registerForm.value.hnombre;
          this.user.apellidos = this.registerForm.value.hapellidos;
          this.user.fechanacimiento = this.registerForm.value.hfechanacimiento;
          this.user.correo = this.registerForm.value.hcorreo;
          this.user.direccion = this.registerForm.value.hdireccion;
          this.user.telefono = this.registerForm.value.htelefono;
          this.user.username = this.registerForm.value.husername;
          this.user.password = this.registerForm.value.hpassword;
          this.user.enabled = true
          this.user.ruc = this.registerForm.value.hruc;
          this.uS.insert(this.user).subscribe((data) => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        }
      });
    } 
    this.router.navigate(['login']); 
  }
}

