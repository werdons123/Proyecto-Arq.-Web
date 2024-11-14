import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Simulacro } from '../../../models/Simulacro';
import { Zona } from '../../../models/Zona';
import { SimulacroService } from '../../../services/simulacro.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './creareditarsimulacros.component.html',
  styleUrl: './creareditarsimulacros.component.css'
})
export class CreareditarsimulacrosComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  sim: Simulacro = new Simulacro();
  id: number=0;
  edicion: boolean = false;
  listaZonas: Zona[] = [];

  constructor(
    private sS: SimulacroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute 
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
      hfecha: ['', Validators.required],
      hhora: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hparticipantes: ['', Validators.required],
      hzona: ['', Validators.required],
    });
  }

  insertar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log("Formulario inválido.");
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
    this.router.navigate(['zonas']);
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
          hzona: new FormControl(data.zo),
        });
      });
    }
  }
}
