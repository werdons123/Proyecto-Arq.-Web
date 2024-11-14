import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PlanEvacuacion } from '../../../models/Plan_de_Evacuacion';
import { PlanDeEvacuacionService } from '../../../services/plan-de-evacuacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Zona } from '../../../models/Zona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creareditarplanes',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './creareditarplanes.component.html',
  styleUrl: './creareditarplanes.component.css'
})
export class CreareditarplanesComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  plan: PlanEvacuacion = new PlanEvacuacion();
  id: number=0;
  edicion: boolean = false;
  listaZonas: Zona[] = [];

  constructor(
    private pS: PlanDeEvacuacionService,
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
      htitulo: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hrutas: ['', Validators.required],
      hpuntos: ['', Validators.required],
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
      this.plan.idPlanEvacuacion = this.form.value.hcodigo;
      this.plan.titulo = this.form.value.htitulo;
      this.plan.descripcion = this.form.value.hdescripcion;
      this.plan.rutasEvacuacion = this.form.value.hrutas;
      this.plan.puntosSeguros = this.form.value.hpuntos;
      this.plan.zona.id_Zona = this.form.value.hzona

      if(this.edicion) {
        this.pS.update(this.plan).subscribe((data) => {
          this.pS.list().subscribe((data)=> {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.plan).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });

      }
      
    
    }
    this.router.navigate(['planesdeevacuacion']);
  }

  init() {
    if(this.edicion) {
      this.pS.listaId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idPlanEvacuacion),
          htitulo: new FormControl(data.titulo),
          hdescripcion: new FormControl(data.descripcion),
          hrutas: new FormControl(data.rutasEvacuacion),
          hpuntos: new FormControl(data.puntosSeguros),
          hzona: new FormControl(data.zona),
        });
      });
    }
  }
}

