import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Simulacro } from '../../../models/Simulacro';
import { Zona } from '../../../models/Zona';
import { SimulacroService } from '../../../services/simulacro.service';
import { ZonaService } from '../../../services/zona.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creareditarsimulacros',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './creareditarsimulacros.component.html',
  styleUrl: './creareditarsimulacros.component.css'
})
export class CreareditarsimulacrosComponent implements OnInit{
  
  form: FormGroup = new FormGroup({});
  sim: Simulacro = new Simulacro();
  valor: number = 1;
  id: number=0;
  edicion: boolean = false;
  listaZonas: Zona[] = [];
  listaTipos: { value: string; viewValue: string }[] = [
    { value: 'Simulacro de sismo', viewValue: 'Simulacro de sismo' },
    { value: 'Simulacro de crecida de ríos', viewValue: 'Simulacro de crecida de ríos' },
    { value: 'Simulacro de evacuación por tormenta', viewValue: 'Simulacro de evacuación por tormenta' },
    { value: 'Simulacro de inundación por tsunami', viewValue: 'Simulacro de inundación por tsunami' },
    { value: 'Simulacro de actividad volcánica', viewValue: 'Simulacro de actividad volcánica' },
  ];
  constructor(
    private sS: SimulacroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private zS: ZonaService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      htipo: ['', Validators.required],
      hfecha: ['', [Validators.required,this.validarFecha]],
      hhora: ['', [Validators.required,this.validarHora]],
      hdescripcion: ['', Validators.required],
      hparticipantes: ['', Validators.required],
      hzona: ['', Validators.required],
    });
    this.zS.list().subscribe((data) => {
      this.listaZonas = data;
    });
  }

  insertar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.snackBar.open('Complete correctamente el formulario', 'Cerrar', {
        duration: 3000, 
        panelClass: ['error-snack-bar']  
      });
      return;
    }
    if(this.form.valid) {
      this.sim.idSimulacro = this.form.value.hcodigo;
      this.sim.tipoSimlacro = this.form.value.htipo;
      this.sim.fecha = this.form.value.hfecha;
      this.sim.hora = this.form.value.hhora;
      this.sim.descripcion = this.form.value.hdescripcion;
      this.sim.participantes = this.form.value.hparticipantes;
      this.sim.zo.id_Zona = this.form.value.hzona

      if(this.edicion) {
        this.sS.update(this.sim).subscribe((data) => {
          this.sS.list().subscribe((data)=> {
            this.sS.setList(data);
          });
        });
      } else {
        this.sS.insert(this.sim).subscribe((data) => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data);
          });
        });

      }
      
    
    }
    this.router.navigate(['simualcro']);
  }

  init() {
    if(this.edicion) {
      this.sS.listaId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idSimulacro),
          htipo: new FormControl(data.tipoSimlacro),
          hfecha: new FormControl(data.fecha),
          hhora: new FormControl(data.hora),
          hdescripcion: new FormControl(data.descripcion),
          hparticipantes: new FormControl(data.participantes),
          hzona: new FormControl(data.zo.id_Zona),
        });
      });
    }
  }
  validarFecha(control: FormControl): { [key: string]: boolean } | null {
    const fecha = control.value;
    if (!fecha) {
    return null; 
  }
    const fechaIngresada = new Date(fecha);
    const fechaActual = new Date();

 
    if (fechaIngresada <= fechaActual) {
      return { 'fechaMenorOIgualActual': true }; 
    }

    return null; 
  }

  validarHora(control: FormControl): { [key: string]: boolean } | null {
    const hora = control.value;
  
    const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    return hora && regex.test(hora) ? null : { 'horaInvalida': true };
  }
}
